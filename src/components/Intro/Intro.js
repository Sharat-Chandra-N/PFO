import React from 'react'
import './Intro.css'

const Intro = ({ data }) => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='intro'>
            <div className='i-left'>
                <span>{data.introTitle}</span>
                <span>{data.name}</span>
                <span>{data.description}</span>
                <button className='button i-hire-me' style={{ width: "100px" }}>{data.hireMeButtonLabel}</button>
                <div className='i-icons'>
                    {
                        data.links.map((item) => (
                            <div>
                                <img src={item.image} alt='' onClick={() => openInNewTab(item.link)} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='i-right'>

            </div>
        </div>
    )
}

export default Intro