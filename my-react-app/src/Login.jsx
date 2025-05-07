import React, { useState } from "react";
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const [id,setUserid] = useState('')
    const [pw,setUserpw] = useState('')

    const oi = "jh";
    const op = "123";

    const LoginCheck = () => {
        if(id == oi && pw == op){
            alert("로그인 성공!")
            navigate('/Home')
        }
        else{
            alert("로그인 실패!")
        }

    }
    return (
        <div class="ht1">
            <h1>로그인</h1>
            <h3>아이디</h3>
            <input
                type="text"
                value={id}
                onChange={(e) => setUserid(e.target.value)}
                placeholder="아이디를 입력하세요" className="bt1"></input>
                

            <h3>비밀번호</h3>
            <input
                type="text"
                value={pw}
                onChange={(e) => setUserpw(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="bt1"></input>
            <br></br> 
            <button type="submit" onClick={LoginCheck} className="bt2">로그인</button>
        </div>
    );
}


export default Login;