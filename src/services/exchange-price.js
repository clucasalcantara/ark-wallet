import axios from 'axios'

const client = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  responseType: 'json',
})

export default getCurrentPrice = async (targetSymbol = 'USD') => {
  const {data} = await client.get(`price?fsym=ARK&tsyms=${targetSymbol}`)
  console.log('Market Cap', data[targetSymbol])
  return data[targetSymbol]
}
