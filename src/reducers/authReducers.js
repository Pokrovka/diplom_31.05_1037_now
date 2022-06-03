export const SignInReducer = (state,action) =>{
    switch(action.type){
        case  'UPDATE_SIGN_IN':
            return{
                ...state,
                userToken:action.payload.userToken
            }
        case 'UPDATE_ACCOUNT': 
            return {
                ...state,
                name: action.payload.name,
                surname: action.payload.surname,
                phone: action.payload.phone,
            }
        case 'UPDATE_EMAIL': 
            return {
                ...state,
                email: action.payload.email
            } 
        default:
            return state
    }
}