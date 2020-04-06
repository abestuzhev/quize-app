import React from 'react';
import {ClickedContext} from '../App';

export default props => {
    return (
        <div style={{border:'1px solid #ccc', width: 200, margin: '0 auto', padding: '20px'}}>
            <div>Counter 2</div>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked!</p> : null}
            </ClickedContext.Consumer>
            
        </div>
    )
}