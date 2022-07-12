import React from 'react'
import './index.scss'
import Me from "../../assets/images/me.png"
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';

const Introduction = () => {
  return (
    <div className='introduction'>
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className='intro-greeting'>Hello, My name is </h2>
                <h1 className='intro-name'>Joshuaa</h1>
                <div className="intro-tags">
                    <div className="intro-tags-wrapper">
                        <div className="intro-tags-item">Data Scientist</div>
                        <div className="intro-tags-item">Data Analyst</div>
                        <div className="intro-tags-item">Data Engineer</div>
                        <div className="intro-tags-item">ML Enthusiast</div>
                        <div className="intro-tags-item">Web Dev Enthusiast</div>
                    </div>
                   
                </div>
                <p className="intro-desc">
                    I am a data science graduate hoping for opportunities to gain experience in 
                    the industry.
                </p>
            </div>
        <MouseOutlinedIcon className="intro-scroll" style={{height:30,width:30,position:'absolute',bottom:"20px"}}/>
        </div>
        <div className="intro-right">
            <div className="intro-bg"></div>
            <img className='intro-image' src={Me}alt="" />
        </div>
    </div>
  )
}

export default Introduction