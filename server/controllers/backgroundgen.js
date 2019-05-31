let id = 1
let completedBackgrounds = [
    {
        id: id++,
        user: 'Starter',
        color1: '#ffffff',
        color2: '#ffffff',
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
        let { user, color1, color2, backgroundUrl } = req.body
        let background = completedBackgrounds.find(background => +background.id === +id)
        let index = completedBackgrounds.findIndex(background => +background.id === +id)
        
        let newBackground = {
            id: background.id,
            user: user || background.user,
            color1: color1 || background.color1,
            color2: color2 || background.color2,
            backgroundUrl: backgroundUrl || background.backgroundUrl
        }

        completedBackgrounds[index] = newBackground
        res.status(200).send(completedBackgrounds)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = completedBackgrounds.findIndex(background => +background.id === +id)
        completedBackgrounds.splice(index, 1)
        res.send(completedBackgrounds)
    }
}