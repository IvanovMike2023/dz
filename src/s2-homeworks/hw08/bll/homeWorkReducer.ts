import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload==='up'){
                return state.sort((a:UserType,b:UserType)=>{
                    if(a.name>b.name) return 1
                    else if (a.name<b.name) return -1
                    else return 0
                }) // need to fix
            }
         if((action.payload==='down')) {

                return state.sort((a:UserType,b:UserType)=>{
                    if(a.name<b.name) return 1
                    else if (a.name>b.name) return -1
                    else return 0
                })
            }
         else return state
        }
        case 'check': {
            return state.filter(el=>el.age>18).sort((a:UserType,b:UserType)=>{
                if(a.name>b.name) return 1
                else if (a.name<b.name) return -1
                else return 0
            })
        }
        default:
            return state
    }
}
