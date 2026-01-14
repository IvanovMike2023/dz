import React from 'react'

// Иконки для сортировки
const downIcon = '↓' // или можно оставить '[\\/]'
const upIcon = '↑' // или оставить '[/\$$'
const noneIcon = '—' // или '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

//Функция для определения нового сортировки при клике
export const pureChange = (sort: string, down: string, up: string): string => {
    if (sort === down) {
        return up // переключение с по убыванию на по возрастанию
    } else if (sort === up) {
        return '' // сброс сортировки
    } else {
        return down // переключение на по убыванию
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort,
        value,
        onChange,
        id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = (() => {
        if (sort === down) return downIcon
        if (sort === up) return upIcon
        return noneIcon
    })()

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', userSelect: 'none' }}
        >
            {icon}
        </span>
    )
}

export default SuperSort