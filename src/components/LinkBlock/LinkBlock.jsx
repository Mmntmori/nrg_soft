import React from 'react';
import './LinkBlock.css'
import { connect } from 'react-redux';
import { getNewArticle } from '../../reducers/linksListReducer'

//////// Заготовка дебаунсера
function debounce(f, time, arg) {
    let timer = false;
    return function () {
        if (!timer) {
            f(arg);
            timer = setTimeout(function () {
                timer = false;
            }, time)
        }
    }
}

function LinkBlock(props) {
    return (
        <div className="buttons">
            <button className="buttons__item" type='button' onClick={ debounce( props.getNewArticle, 800, 'angular') }>
                Angular JS
            </button>
            <button className="buttons__item" type='button' onClick={ debounce( props.getNewArticle, 800, 'vuejs') }>
                reactjs
            </button>
            <button className="buttons__item" type='button' onClick={ debounce( props.getNewArticle, 800, 'reactjs') }>
                Vue js
            </button>
            <button className="buttons__item" type='button' onClick={ debounce( props.getNewArticle, 800, 'frontend') }>
                Frontend
            </button>
        </div>
    )
}


const LinkBlockContainer = connect(null, { getNewArticle })(LinkBlock)

export default LinkBlockContainer