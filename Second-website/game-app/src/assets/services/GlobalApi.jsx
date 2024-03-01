/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios"

const key = "aee83a6313f7471ca8cdcd89e3f0400d";

const axioCreate = axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenereList = axioCreate.get("/genres?key="+key);
const getGamesList = axioCreate.get("/games?key="+key);
const getGameListByGenreId=(id)=>axioCreate.get('/games?key='+key+'&genres='+id)

export default {
    getGenereList, getGamesList, 
    getGameListByGenreId
}