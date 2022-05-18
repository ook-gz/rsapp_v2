const manejadorErrores = (res, error) => {
    console.log(error);
    res.status(404).json({ errors: error});
}

module.exports = {
    manejadorErrores
}