const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.use(express.json())



// let login  = []
let signup = []
app.post('/signup', (req, res) => {
   const {fullName, email, password} = req.body
    // signup.push(req.body)
    const existinguser = signup.find(user =>(user.fullName === fullName || user.email===email))
    if(existinguser || fullName === '')
    return res.status(400).json({error:'User already exists either your Name your mail is conflicting'})
    signup.push({fullName,email,password})
     console.log(signup)
res.json({msg:'Signed up successfully',user:fullName})
})


app.post("/login", (req,res) =>{
  const {username , password} = req.body

  const permission = signup.find(user => user.fullName === username)
  console.log(permission)
  if(!permission)
  return res.status(400).json({error: 'Your Username is Incorrect'})

  console.log(permission.password)
  if(permission.password === password)
   res.json({msg:'Welcome', user:username})

  return res.status(400).json({error: 'Your Password is incorrect'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})