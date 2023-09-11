import getOneCharacter from "@/lib/GetOneCharacter";
import { CharacterType } from "@/types";
import Image from "next/image";
import dummy from '@/assets/dummy.jpg'
import { Suspense } from "react";

type Props ={ promise: Promise<CharacterType[]>}

export async function CharacterDetails({promise}:Props){
    const details = await promise

    const content = details.map((detail)=>(<div key={detail.id}>
        <div>
            <Image src={detail.image || dummy} alt={"character image"} width={300} height={300} className="rounded-md mx-auto my-2" />
        </div>
        <div>
            <ul>
                <li>Actor: {detail.actor}</li>
                <li>Alternate Names: {detail.alternate_names.join(', ')}</li>
                <li>Gender:{detail.gender}</li>
                <li>Alive: {detail.alive ? 'Yes' : 'No'}</li>
                <li>House: {detail.house}</li>
            </ul>
        </div>
    </div>))
    return content
}

export default async function Page({ params }: { params: { id: string } }) {
    const data: Promise<CharacterType[]> = getOneCharacter(params.id);
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <CharacterDetails promise={data} />
        </Suspense>
    )
    
}