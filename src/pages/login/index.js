import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {Login} from '../../api/models'

const LoginPage = function () {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const history = useHistory()
    const login = async ()=>{
        const res = await Login({ name, pwd })
        console.log(res.data)
        history.push('/home')
    }
    return <form action="" method="get" className="form-example">
        <div className="form-example">
            <label htmlFor="name">账号: </label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="form-example">
            <label htmlFor="pwd">密码: </label>
            <input type="password" value={pwd} onChange={e=>setPwd(e.target.value)} required />
        </div>
        <div className="form-example">
            <input type="button" id='login' onClick={login} value="登录" />
        </div>
    </form>
}

export default LoginPage