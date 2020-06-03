import React from 'react';
import './LinkBlock.css'

function LinkBlock(props) {
    return (
        <div className="buttons">
            <button className="buttons__item" type='button' onClick={() => { alert('click') }}>
                Angular JS
            </button>
            <button className="buttons__item" type='button' onClick={() => { alert('click') }}>
                reactjs
            </button>
            <button className="buttons__item" type='button' onClick={() => { alert('click') }}>
                Vue js
            </button>
            <button className="buttons__item" type='button' onClick={() => { alert('click') }}>
                Frontend
            </button>
        </div>
    )
}

export default LinkBlock