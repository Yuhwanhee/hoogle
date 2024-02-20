const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 9595;
app.listen(port, () => {
    console.log(`\x1b[32mserver is running on port ${port}\x1b[0m`)
})


//models    
const User = require('./models/User');
const Post = require('./models/Post')
const multer = require('multer');
const path = require('path');




//몽고DB 연결
mongoose.connect('mongodb+srv://hh90512:!!774912yu@cluster0.4qr9iqs.mongodb.net/hoogle')
    .then(() => {
        const db = mongoose.connection;
        console.log('MongoDB Connected in', db.name)
    })
    .catch((err) => console.log(err))






const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const ext = path.extname(file.originalname)
        const filename = uniqueSuffix + ext
        cb(null, filename)
    }
})
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 30, // 30MB
    }
})
app.use('/uploads', express.static('uploads'))




app.post('/login', async (req, res) => {
    const userId = req.body.id
    const { isSecond, ps } = req.body


    console.log('hello', userId)
    // console.log('isSecond', isSecond)

    try {
        if (isSecond === true) {
            const user = await User.findById(ps)
            if (!user) {
                res.status(400).json()
            } else if (userId === user.password) {
                const token = jwt.sign({
                    userId: user._id,
                    name: user.name,
                    profile: user.profile,
                    id: user.id
                },
                    'secrest',
                    {
                        expiresIn: '2m'
                    }
                )
                res.status(201).json({ token: token })
            } else {
                res.status(401).json()
            }
        } else {
            const user = await User.findOne({ id: userId })
            if (!user) {
                res.status(400).json()
            } else {
                res.status(200).json({ userId: user._id })
            }
        }

    } catch (err) {
        console.log(err)
        res.status(500).json
    }
})

app.post('/fetch-user-data', async (req, res) => {
    const { user } = req.body

    try {
        const user1 = await User.findById(user)
        if (!user1) {
            res.status(400).json()
        } else {
            res.status(200).json(user1)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json
    }
})


app.post('/signup', async (req, res) => {
    const { id, password, name } = req.body


    try {
        const already = await User.findOne({ id: id })
        if (already) {
            res.status(400).json()
        } else {
            const user = new User({
                id: id,
                password: password,
                name: name
            })
            await user.save()
            const token = jwt.sign({
                userId: user._id,
                name: user.name,
                profile: user.profile,
                id: user.id

            },
                'secrest',
                {
                    expiresIn: '2m'
                }
            )
            res.status(200).json({ token: token })
            console.log('새로운 유저 회원가입 됨')

        }
    } catch (err) {
        console.log(err)
        res.status(500).json
    }
}
)


app.post('/test', upload.single('img'), async (req, res) => {
    try {
        const user = await User.findById(req.body.userId)
        if (!user) {
            res.status(400).json()

        } else {
            user.profile = req.file.filename
            await user.save()

            const token = jwt.sign({
                userId: user._id,
                name: user.name,
                profile: user.profile,
                id: user.id
            },
                'secrest',
                {
                    expiresIn: '2m'
                }
            )
            res.status(200).json({ token: token })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
    res.status(200).json()
})


app.post('/new-post', async (req, res) => {
    const { title, write, path, date } = req.body;
    try {
        if (title && write && path) {
            const newPost = new Post({
                title: title,
                write: write,
                path: path,
                date: date,
            })
            const saved = await newPost.save()

            if (saved) {
                res.status(200).json()
            }
            console.log('new post added : ', saved.title)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
    res.status(200).json()
})

app.get('/test-get-posts', async (req, res) => {
    try {
        const posts = await Post.find()
        res.status(200).json(posts)
    } catch (err) {
        console.log(err)
    }
})



app.post('/change-nickname', async (req, res) => {
    const { nickname, userId } = req.body;


    try {
        if (nickname && userId) {
            const change = await User.findById(userId)
            if (change.name) {
                change.name = nickname
                const saved = await change.save()
                if (saved) {
                    const token = jwt.sign({
                        userId: saved._id,
                        name: saved.name,
                        profile: saved.profile,
                        id: saved.id
                    },
                        'secrest',
                        {
                            expiresIn: '2m'
                        }
                    )
                    res.status(200).json({ token: token })
                }
            } else {
                console.log('failed')
            }


        }


    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
})




app.post('/search-data', async (req, res) => {
    const { word } = req.body
    try {
        if (word) {
            const result1 = await Post.find({ title: { $regex: new RegExp(word, 'i') } })
            const result2 = await Post.find({
                $and: [{ title: { $not: { $regex: new RegExp(word, 'i') } } }, { write: { $regex: new RegExp(word, 'i') } }]
            })

            if (result1) {
                res.status(200).json({ result1: result1, result2: result2 })
            }
        }

    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
})



app.post('/change-password', async (req, res) => {
    const { pswd, userId } = req.body;

    try {

        if (pswd && userId) {
            const change = await User.findById(userId)
            if (change.password) {
                change.password = pswd
                const saved = await change.save()
                if (saved) {
                    const token = jwt.sign({
                        userId: saved._id,
                        name: saved.name,
                        profile: saved.profile,
                        id: saved.id,

                    },
                        'secrest',
                        {
                            expiresIn: '2m'
                        }
                    )
                    res.status(200).json({ token: token })
                }
            } else {
                console.log('failed')
            }


        }


    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
})


app.post('/get-post-info', async (req, res) => {
    const { id } = req.body;

    try {
        if (id) {
            const change = await Post.findById(id)
            if (change) {
                res.status(200).json(change)
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).json()
    }
})

