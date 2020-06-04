import { getArticle } from '../axios/axios';
import { reactLocalStorage } from 'reactjs-localstorage';

const SWITCH_PRELOADER = 'SWITCH_PRELOADER',
    DELETE_ARTICLE = 'DELETE_ARTICLE',
    LIKE_ARTICLE = 'LIKE_ARTICLE',
    PUSH_NEW_ARTICLE = 'PUSH_NEW_ARTICLE',
    GET_LIST_FROM_LOCAL_STORAGE = 'GET_LIST_FROM_LOCAL_STORAGE',
    SET_LIST_FROM_LOCAL_STORAGE = 'SET_LIST_FROM_LOCAL_STORAGE';

// Начальный стейт приложения
let initialState = {
    linksList: [],
    isRequesting: false
}

// генератор случайного числа для выбора случайной статьи

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const linksListReducer = (state = initialState, action) => {

    switch (action.type) {
        case SWITCH_PRELOADER: {
            return { ...state, isRequesting: !state.isRequesting }
        }
        case DELETE_ARTICLE: {
            let stateCopy = { ...state, linksList: [...state.linksList] }

            stateCopy.linksList.splice(action.index, 1)

            return stateCopy
        }
        case LIKE_ARTICLE: {
            let stateCopy = { ...state, linksList: [...state.linksList] }
            stateCopy.linksList[action.index].isLiked = !stateCopy.linksList[action.index].isLiked
            return stateCopy
        }

        case PUSH_NEW_ARTICLE: {
            let randomInt = getRandomInt(action.list.length);
            // Простое решение защиты от повторов статей

            let flag = false;
            state.linksList.forEach(e => {
                if (e.id === action.list[randomInt].data.id) {
                    flag = true;
                }
            })
            
            if (!flag) {
                return {
                    ...state, linksList: [...state.linksList, {
                        id: action.list[randomInt].data.id,
                        href: action.list[randomInt].data.url,
                        header: action.list[randomInt].data.title,
                        isLiked: false
                    }]
                }
            } else {
                return state
            }
        }

        case GET_LIST_FROM_LOCAL_STORAGE: {
            if (state.linksList.length === 0 && window.localStorage.articles) {
                // Забираем объект articles из локального хранилища и парсим для дальнейшего преобразования в массив для стейта
                // let obj = JSON.parse(window.localStorage.articles);
                let obj = reactLocalStorage.getObject('articles');
                let stateCopy = { ...state, linksList: [...state.linksList] }
                for (let key in obj) {
                    stateCopy.linksList.push(obj[key]);
                }
                return stateCopy
            }

            return state
        }

        case SET_LIST_FROM_LOCAL_STORAGE: {
            reactLocalStorage.clear('articles')
            if (state.linksList.length !== 0) {
                let obj = {};
                state.linksList.forEach(e => {
                    obj[e.id] = { ...e }
                })
                reactLocalStorage.setObject('articles', obj)
            }
            return state
        }

        default: {
            return state
        }
    }
}

export const switchPreloader = () => {
    return {
        type: SWITCH_PRELOADER
    }
}

export const deleteArticle = (index) => {
    return {
        type: DELETE_ARTICLE,
        index
    }
}

export const likeArticle = (index) => {
    return {
        type: LIKE_ARTICLE,
        index
    }
}

export const pushNewArticle = (list) => {
    return {
        type: PUSH_NEW_ARTICLE,
        list
    }
}

export const getListFromLocalStorage = () => {
    return {
        type: GET_LIST_FROM_LOCAL_STORAGE
    }
}

export const setListFromLocalStorage = () => {
    return {
        type: SET_LIST_FROM_LOCAL_STORAGE
    }
}

export const getNewArticle = (subreddit) => {
    return (dispatch) => {
        dispatch(switchPreloader())
        getArticle(subreddit).then(response => {
            dispatch(pushNewArticle(response))
            dispatch(switchPreloader())
        })
    }
}

export default linksListReducer