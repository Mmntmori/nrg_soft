import React from 'react';
import './LinkBlock.css'
import { connect } from 'react-redux';
import { getNewArticle } from '../../reducers/linksListReducer'

function LinkBlock(props) {
    console.log(props)
    return (
        <div className="buttons">
            <button className="buttons__item" type='button' onClick={() => { props.getNewArticle('angular') }}>
                Angular JS
            </button>
            <button className="buttons__item" type='button' onClick={() => { props.getNewArticle('vuejs') }}>
                reactjs
            </button>
            <button className="buttons__item" type='button' onClick={() => { props.getNewArticle('reactjs') }}>
                Vue js
            </button>
            <button className="buttons__item" type='button' onClick={() => { props.getNewArticle('frontend') }}>
                Frontend
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

const LinkBlockContainer = connect(mapStateToProps, { getNewArticle })(LinkBlock)

export default LinkBlockContainer