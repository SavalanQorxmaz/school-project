'use client'
import React from "react"

const User = () => {

    const getAdmin = async ()=> {
        fetch('api/admin', {
            method: 'GET'
        })
        .then(response=>{
            return response.text()
        })
        .then(response=>{
            console.log(response)
            return response
        })
    }

return (
    <>
<div className="p-20 bg-green-300 h-24">
    User DAsboard
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, dolor voluptate. Enim sapiente ipsa placeat, officia, consequatur necessitatibus explicabo nihil sequi corrupti repellendus soluta illum, dolorum non sed doloribus numquam?
</div>

<div>
    <button onClick={getAdmin}>Request</button>
</div>
</>
)
}

export default User