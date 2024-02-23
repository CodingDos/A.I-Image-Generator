import './ImgGen.css'
import DefaultImg from "./DefaultImg/CMcgExw.png"
import { useRef, useState } from 'react'
import axios from 'axios'

import React from 'react'

function ImageGenerator() {

    const [image, setImage] = useState("/")
    let inputRef = useRef(null)

    const imageGenerator = async () => {
        if (inputRef.current.value==="") {
            return 0
        }
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/images/generations",
                {
                    prompt: `${inputRef.current.value}`,
                    n: 1,
                    size: "512x512",
                },
                {
                    headers: {
                        "Content-Type": "application/json", 
                        Authorization: "Bearer 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",
                    }
                }
            )
            console.log(response.data)
            setImage(response.data.data[0].url)
        } catch (error) {
            console.error('Error generating image', error)
        }
    } 
  return (
    <div className="ai-img-gen">
        <div className="Title">A.I Image Generator</div>
        <div className="img-loading"></div>
            <div className="defaultimg"><img src={image==="/"?DefaultImg:image} alt="" /></div>
    <div className ="search-box">
        <input type="text" ref={inputRef} className="searchInput" placeholder='Describe the picture you want'/>
        <div className="createButton" onClick={()=>{imageGenerator()}}>Create IMG</div>
    </div>    
    </div>
  )
}

export default ImageGenerator

