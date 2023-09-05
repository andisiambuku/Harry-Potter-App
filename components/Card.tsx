import { CharacterType } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = { 
  id: string
  name?: string,
  dateOfBirth?: string,
  image?: string,
  actor?: string
  }

const Card = ({ id, name,actor,  dateOfBirth, image }: CardProps)=>{

    return (     
      <Link href={`/characters/${id}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{border: '1px solid #eee', borderRadius: '8px', width:'400px', height: '400px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="px-6 py-4">
          {image && <img className="w-full" src={image}  style={{ border: '1px solid #eee', borderRadius: '8px', width: '200px', height: '200px'}} />}
          <div className="p-3 font-bold text-xl mb-2">{name ?? 'Default'}</div>
          {/* <div className="text-gray-700 text-base">{actor ?? ''}
          </div> */}
          <div className="">
          {dateOfBirth && <div className="p-3 text-sm font-semibold">Date of Birth: {dateOfBirth ?? "19 06 1999" }</div>}
        </div>
        </div>
        </div>
      </Link>
    )
}

export default Card
