import React, {createContext} from 'react';

const CurrentUserContext = React.createContext({
    currentUser:{},
    isLoggedIn:false,
});
export default CurrentUserContext;