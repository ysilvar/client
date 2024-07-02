
import {useEffect, useState} from 'react'

const Btn = (props)=>{
    const [isLogin,setIsLogin] = useState(props.login);
    useEffect(()=>{
        // setIsLogin(false)
    },[]);
    const handleClick = () =>{
        setIsLogin(!isLogin)
    }
    return (
        <>
        <button onClick={handleClick}>{isLogin ? 'hola':'mi mundo'}</button>
        </>
        
    );
}
export default Btn;