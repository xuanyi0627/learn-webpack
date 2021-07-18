'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import './search.less'
import avatar from './images/avatar.png'

class Search extends React.Component {
    render() {
        return (
            <div>
                <img src={avatar}/>
                <div className="search-text">Search Text  ssssss</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)