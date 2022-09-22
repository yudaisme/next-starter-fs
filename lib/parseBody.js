export const parseBody = (body) => {
    console.log(body)
    if(typeof body === 'string') return JSON.parse(body)
    return body
}