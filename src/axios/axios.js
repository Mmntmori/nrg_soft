import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.reddit.com/r/'
})


//Делаем запрос на сабредит 
export const getArticle = (subreddit) => {
    return instance.get(`${subreddit}.json`).then(response => {
        if (response.status === 200) {
            return response.data.data.children
        } else {
            throw new Error('server response code: '+response.status)
        }
    })
}
