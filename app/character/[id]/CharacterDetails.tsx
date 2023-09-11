import { CharacterType } from "@/types"
import Image from "next/image";
import dummy from '@/assets/dummy.jpg'

type Props ={ promise: Promise<CharacterType[]>}

export async function CharacterDetails({promise}:Props){
    const details = await promise

    const content = details.map((detail)=>(<div key={detail.id}>
        <div>
            <h2 className="text-4xl font-bold text-center p-3">{detail.name}</h2>
            <Image src={detail.image || dummy} alt={"character image"} width={200} height={200} className="rounded-md mx-auto my-2" />
       
            <ul className="text-center p-10 space-y-3">
                <li><strong>Actor :</strong> {detail.actor}</li>
                <li><strong>Alternate Names :</strong> {detail.alternate_names.join(', ')}</li>
                <li><strong>Date of Birth :</strong> {detail.dateOfBirth}</li>
                <li><strong>Gender :</strong> {detail.gender}</li>
                <li><strong>Alive :</strong> {detail.alive ? 'Yes' : 'No'}</li>
                <li><strong>House :</strong> {detail.house}</li>
            </ul>
        </div>
    </div>))
    return content
}