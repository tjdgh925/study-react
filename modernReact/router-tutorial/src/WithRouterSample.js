import React from 'react';
import { withRouter } from 'react-router-dom';
const WithRouterSample = ({ location, match, history }) => {
    return(
        <div>
            <h4>loaction</h4>
            <textarea value={JSON.stringify(location, null, 2)} readOnly />
            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)} readOnly />
            <div>
                <button onClick={() => history.push('/')}>홈으로</button>
            </div>
        </div>
    );
}

export default withRouter(WithRouterSample);