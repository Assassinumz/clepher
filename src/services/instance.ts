import axios from "axios";

let url = 'https://www.alphavantage.co/query?apikey=RIBXT3XYLI69PC0Q'

export const instance = axios.create({
    baseURL: url,
})

