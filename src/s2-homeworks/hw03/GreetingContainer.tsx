import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: any) => void, setName: (name: string) => void, addUserCallback: (user: string) => void) => {
    if (name.trim() === '') {
        setError('Error! Empty value!')
    } else {
        addUserCallback(name)
    }

    setName('')
}

export const pureOnBlur = (name: string, setError: (e: string) => void) => {
    if (name.trim() === '') {
        setError('Error')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить

    e.key === 'Enter' && addUser()
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // need to fix
        if (e.currentTarget.value.length > 15) {
            setError('Error>15')
            setName('')
            // console.log(error)
        } else {
            setName(e.currentTarget.value)
            setError('')
        }
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {

        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length// need to fix

    const lastUserName = users[totalUsers - 1]?.name // need to fix
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
