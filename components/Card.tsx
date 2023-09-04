import { CharacterType } from '../types'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = { 
  id: string
  name?: string,
  dateOfBirth?: string,
  image?: string
  actor?: string
  }

const Card = ({ id, name,actor,  dateOfBirth, image }: CardProps)=>{

    return (
      <Link href={`/characters/${id}`}>
<div className="max-w-sm rounded overflow-hidden shadow-lg" style={{border: '1px solid #eee', borderRadius: '8px', width:'400px', height: '400px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div className="px-6 py-4">
  {/* {image && image?.length !== 0 && <Image className="w-full" src={image} alt="Sunset in the mountains" width={200} height={200}/>} */}
  {image && <img className="w-full" src={image}  style={{width: '200px', height: '200px'}}/>}
  <div className="font-bold text-xl mb-2">{name ?? 'Default'}</div>
  <p className="text-gray-700 text-base">
    {actor ?? ''}
  </p>
</div>
<div className="px-6 pt-4 pb-2">
{dateOfBirth && <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">DOB: {dateOfBirth ?? "19 06 1999" }</div>}

</div>
</div>
      </Link>
    )
}

export default Card