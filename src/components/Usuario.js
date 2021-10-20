import React, { useEffect, useState } from 'react'

export const Usuario = () => {


    const [usuario, setUsuario] = useState([]);

    useEffect(() => {

    async function getContent() {

        try {
            
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(json => {
                    
                    setUsuario(json);
                    // console.log(json);
                });
            
            
        } catch (error) {
            console.error(error)
            // console.log("Errou po X razão")
            
        }  
        
        
    }

    getContent();

}, []);
    
    return (
        <div>
            {console.log(usuario)}  
            {usuario.map(user => (
                <li
                key={user.id}> 
                {user.name}
                </li>                            

            ))} 
            
            
        </div>
    )
}
