import Card from '../components/Card'
import { CharacterResultsTypes } from '../types'

//TODO Search filter

export const fetchCharacters = async (): Promise<CharacterResultsTypes> =>{
    const res = await fetch('https://hp-api.onrender.com/api/characters')

    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Page(){
    const characters = await fetchCharacters()

    return (
        <div>
            <h2 className='p-4 text-5xl text-center'>All characters in the films</h2>
            <div className=" p-10 flex flex-row flex-wrap gap-10">
                {characters.map(character=>(
                <Card key={character.id} id={character.id} name={character.name} image={character.image} dateOfBirth={character.dateOfBirth} actor={character.actor} />
            ))}
            </div>
        </div>
    )
}