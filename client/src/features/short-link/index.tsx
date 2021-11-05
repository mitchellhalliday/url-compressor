import React from "react"

type ShortLinkProp = {
    slug: string
}

export default function ShortLink({ slug } : ShortLinkProp){
    return (
        <>
            { slug && <p>The compressed URL is: <a href={ slug }>{ window.location + slug }</a></p> }
        </>
    )
}