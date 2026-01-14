import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
    >

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<{ id: any; value: string }>
    onChangeOption?: (option: any) => void
    onChange?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions = options
        ? options.map((o) => (
            <option
                key={o.id}
                id={'hw7-option-' + o.id}
                className={s.option}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [] // маппинг опций

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value
        if (onChangeOption) {
            onChangeOption(value)
        }
        if (onChange) {
            onChange(e)
        }
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect