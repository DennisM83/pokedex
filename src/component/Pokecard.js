import React from 'react'
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


export default function Pokecard(props) {
    let pic = `${POKE_API}${props.id}.png`
    return (
        <div style={{ display: 'inline-block', margin: '0 auto', width: '20rem'}}>
        <div  style={{backgroundColor: '#fff', width: '300px', height: '400px', borderRadius: '10px', margin: '100px 140px', boxShadow: '5px 5px 10px #595959' }}>
            <h3 style={{ color: '#212121', paddingTop: '20px' }}>{props.name}</h3>
            <img src={pic} alt="pokemon charater"/>
        </div>
        </div>
    )
    
}
