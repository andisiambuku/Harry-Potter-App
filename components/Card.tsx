import { CharacterType } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import dummy from'@/assets/dummy.jpg'

type CardProps = { 
  id: string
  name?: string,
  dateOfBirth?: string,
  image?: string,
  actor?: string
  }

const Card = ({ id, name,  dateOfBirth, image }: CardProps)=>{
    return (     
      <Link href={`/character/${id}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" style={{border: '1px solid #eee', borderRadius: '8px', width:'400px', height: '400px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div className="px-6 py-4">
          {/* {image && <img className="w-full" src={image}  style={{ border: '1px solid #eee', borderRadius: '8px', width: '200px', height: '200px'}} />} */}
          <Image src={image || dummy} alt={"actor image"} width={200} height={200} className="rounded-md mx-auto my-2" />
          <div className="p-3 font-bold text-xl mb-2">{name ?? 'Default'}</div>
          {dateOfBirth && <div className="p-3 text-sm font-semibold">Date of Birth: {dateOfBirth ?? "19 06 1999" }</div>}
        </div>
        </div>
      </Link>
    )
}

export default Card
