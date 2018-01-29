import React from 'react';
import {connect} from 'dva';

const example = ()=>{
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default connect()(example);