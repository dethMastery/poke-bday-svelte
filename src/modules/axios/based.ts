import axios from 'axios'

async function pokeFetch(id: number) {
  const link = `https://pokeapi.co/api/v2/pokemon/${id}`

  const callAPI = await axios.get(link)
  return callAPI
}

export default pokeFetch