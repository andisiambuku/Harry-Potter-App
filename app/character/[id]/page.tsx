import getOneCharacter from "@/lib/GetOneCharacter";
import { CharacterType } from "@/types";
import { Suspense } from "react";
import { CharacterDetails } from "./CharacterDetails";



export default async function Page({ params }: { params: { id: string } }) {
    const data: Promise<CharacterType[]> = getOneCharacter(params.id);
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <CharacterDetails promise={data} />
        </Suspense>
    )
    
}