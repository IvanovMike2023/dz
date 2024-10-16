const initState = {
    themeId: 1,
}
export type initStateTypeId ={
    themeId: number
}
export type initState ={
    loading: {}
    theme: initStateTypeId
}
export const themeReducer = (state:initStateTypeId = initState, action: changeThemeIdType): initStateTypeId => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,themeId: action.id}
        default:
            return state
    }
}
type changeThemeIdType = ReturnType <typeof changeThemeId>
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
