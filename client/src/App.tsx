import React from "react"
import SharedLayout from "./features/shared-layout"
import UrlNew from "./features/url-new"

import "bootstrap/dist/css/bootstrap.css" 

function App() {
    return (
        <div> 
            <SharedLayout>
                <UrlNew />
            </SharedLayout>
        </div>
    )
}

export default App
