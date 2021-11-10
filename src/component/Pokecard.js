import React from 'react'

export default function Pokecard({dex}) {

    return dex.map(item =>(
        <div style={{backgroundColor: '#fff', width: '300px', height: '400px', borderRadius: '10px', margin: '100px 140px', boxShadow: '5px 5px 10px #595959' }}>
            <h3 style={{ color: '#212121', paddingTop: '20px' }}>{item.name}</h3>
            <p>{item.id}</p>
        </div>
    ))
    
}
