import React, {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then(userCredential=>{
            console.log(userCredential)
        }).catch(err=>console.log('error: ' + err))
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button>submit</button>
        </form>
    </div>
  )
}

export default Login