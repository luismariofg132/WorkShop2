export const GetApi = async (endpoint) => {
    const resp = await fetch(endpoint)
    const data = await resp.json()

    return data
}