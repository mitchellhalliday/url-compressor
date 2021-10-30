import React, { useState } from "react"

export default function UrlNew(){
    const [ url, setUrl ] = useState("")   

    const handleSubmit = (e) => {        
        setUrl(e.target.value)
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
                <button className="btn btn-primary">Compress URL</button>
            </div>            
        </div>
    )
}

