import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const Header = () =>{
    const [engActive, setEnglish] = useState('active')
    const [cnActive, setCn] = useState(false)
    
    const radioEng = () => {
        setEnglish(current => !current);
        setCn("");
    }
    const radioCn = () => {
        setCn(current => !current);
        setEnglish("");
    }
    useEffect(() => {
       
        /*const dataInterval = setInterval(()=> {
            navigate('/idle')
         },300000)
         return () => clearInterval(dataInterval)*/
    },[])
    return (
        <div>
            <div className="row d-flex justify-content-end pt-3">
                <div className="option-lang col-md-12">
                    <div className={engActive ? 'active' : ''} onClick={radioEng}  id="lang-eng">English</div>
                    <div className={cnActive ? 'active' : ''} onClick={radioCn}  id="lang-cn">汉语</div>                
                </div>
            </div>
        </div>
    )
}

export default Header