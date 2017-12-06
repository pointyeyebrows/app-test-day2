module.exports = {
    addToAnimals: (req, res, next) => {
    const db = req.app.get("db")
    const { name, img } = req.body;
    db.addToAnimals([ name, img ])
    .then(response => res.status(200).send())
    .catch( () => res.status(500).send() );
    },
    editAnimal: (req, res, next) => {
        const db = req.app.get('db')
        const { params, query} = req;
        db.editAnimal([params.id, query.img])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
}