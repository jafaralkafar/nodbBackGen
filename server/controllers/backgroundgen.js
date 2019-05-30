let id = 1
let completedBackgrounds = [
    {
        id: id++,
        user: 'Grant',
        color1: '',
        color2: '',
        backgroundUrl: ''
    },
]

module.exports = {
    read: (req, res) => {
        if(req.query.user) {
            const users = completedBackgrounds.filter(user=>user.user === req.query.user)
            return res.status(200).send(users)
        } else {
            res.status(200).send(completedBackgrounds)
        }
    },
    create: (req, res) => {
        let newBackground = req.body
        newBackground.id = id++
        completedBackgrounds.push(newBackground)
        res.status(200).send(completedBackgrounds)
    },
    update: (req, res) => {
        let {id} = req.params
        let updatedBackground = req.body
        updatedBackground.id = id
        let index = completedBackgrounds.findIndex(background => +background.id === +id)
        completedBackgrounds.splice(index, 1, updatedBackground)

        res.status(200).send(completedBackgrounds)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = completedBackgrounds.findIndex(background => +background.id === +id)
        completedBackgrounds.splice(index, 1)
        res.send(completedBackgrounds)
    }
}