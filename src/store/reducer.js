const initialstate = {
        comments : []
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'UPDATE COMMENTS':
            {
                return {
                    ...state,
                    comments : action.comments
                }
                
            }
        
        default : {
            return state;
        }
    }
};

export default reducer;