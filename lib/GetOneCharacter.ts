export default async function getOneCharacter(id:string) {
    const url = `https://hp-api.onrender.com/api/character/${id}`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Failed to fetch character');
        }
        return await res.json();
    } catch (error) {
        throw new Error('Failed to fetch or parse data');
    }
}