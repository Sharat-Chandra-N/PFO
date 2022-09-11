import React from 'react'
import './Intro.css'

const Intro = ({ data }) => {

    const onHandleClick = (url) => {

        let element = document.createElement('a');

        if (url.startsWith('http://') || url.startsWith('https://')) {
            element.href = url;
        } else {
            element.href = 'http://' + url;
        }

        element.click();
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
                                <img src={item.image} alt='' onClick={() => onHandleClick(item.link, "_blank")} />
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