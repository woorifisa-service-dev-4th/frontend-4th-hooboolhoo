export async function getMyPageData(url) {
    const data = await fetch(url)
    const object= await data.json()
    
    return object
}