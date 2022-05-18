import {Fragment} from 'react'
import LogoRSA from '../img/LogoProyectoRS.png'
import useForm from '../hooks/useForm';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useParams, useNavigate } from 'react-router-dom';

const FormCambiarPass = () => {
        let { id, token } = useParams();
        const navigate = useNavigate();
        
        //extraemos data y handleChange del useForm
        const [data, handleChange] = useForm();

        const handleSubmit = (e) => {
            e.preventDefault();
            cambiarPass(data);       
        }

        const cambiarPass = async(formData) => {
            try {
                //Hacemos un fetch con post
                const data = await fetch(`http://localhost:3005/recuperar-pass/${id}/${token}`,{
                    method:'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(formData)
                });
        
                const res = await data.json();
                const {msj, errors} = res;
    
                if (!errors) {
                    console.log(msj);
                    toast.success(() => (
                        <span>
                          <b>{msj} </b>
                          <button onClick={() => navigate('/')}>Ingresar</button>
                        </span>),{
                            duration:5000
                    });
        
                }else{
                    if(errors[0]){
                        toast.error(errors[0].msg);
                    }else{
                        toast.error(errors);
                    }
                }    
        
            } catch (error) {
                console.log(error);
            }
        
        }

  return (
    <Fragment>
    <Toaster />
    <div className='w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0'>
        <div className='w-full sm:max-w-md p-5 mx-auto'>
          <h2 className="mb-6 text-center text-3xl font-semibold">Cambiar contraseña</h2>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <Link to="/">
                <img className="m-auto my-1" src={LogoRSA} alt="LogoRSApp" width="200px" height="100px"/>
            </Link>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                        Ingrese nueva contraseña
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name='nuevaPass' id='nuevaPass' type="password" placeholder="***********" onChange={handleChange} required/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                        Confirme la contraseña
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    name='nuevaPass2' id='nuevaPass2' type="password" placeholder="***********" onChange={handleChange} required/>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">
                       Enviar
                    </button>
                </div>
            </form>
        </div>  
    </div>    
    </Fragment>
  )
}

export default FormCambiarPass