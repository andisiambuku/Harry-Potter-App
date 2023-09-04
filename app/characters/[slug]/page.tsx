"use client"
import { useEffect, useState } from 'react'

const LoadMe = ({params: {slug}}: {params: {slug: string}})=>{
    const [characterData, setCharacterData] = useState({})

    const fetchDetails = async (id: string) => {
        const res = await fetch(`https://hp-api.onrender.com/api/characters/${id}`)
        if(!res.ok){
            throw new Error('Failed to fetch character data')
        }
        return res.json()
    }
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const data = await fetchDetails(slug)
                console.log('data',data)
                setCharacterData({...data})
            }catch(err){
                console.error(JSON.stringify(err))
            }
        }
        fetchData()

    }, [])
    console.log('characterData', characterData)
    return (
        <h1>Loaded params page</h1>
    )
}

export default LoadMe