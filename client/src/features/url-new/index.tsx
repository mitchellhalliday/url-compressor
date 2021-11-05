import React, { useState } from "react"
import ShortLink from "../short-link"
import axios from "axios"

export default function UrlNew(){
    const [ url, setUrl ] = useState("")
    const [ output, setOutput ] = useState("")

    const handleSubmit = (e : React.ChangeEvent<HTMLInputElement>) => {        
        setUrl(e.target.value)
    }

    const handleClick = (e : React.MouseEvent) => {
        e.preventDefault()

        axios
            .post("/api/url", { url })
            .then(res => {
                setOutput(res.data.short_url)
            })
            .catch(err => {
                console.log(err)
            })

        setUrl("")
    }

    return (
        <div className="row">

            <div>
                <label htmlFor="longUrl" className="form-label">Long URL</label>

                <input 
                    id="longUrl" 
                    type="text" 
                    className="form-control" 
                    name="longUrl" 
                    value={url} 
                    onChange={handleSubmit}
                />
            </div>

            <div className="mt-2">
                <button className="btn btn-primary" onClick={handleClick}>Compress URL</button>
            </div>

            <div className="mt-2">
                
                <ShortLink slug={output} />

            </div> 
        </div>
    )
}

