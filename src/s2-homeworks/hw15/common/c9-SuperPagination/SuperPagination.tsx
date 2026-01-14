import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page,
        itemsCountForPage,
        totalCount,
        onChange,
        id = 'hw15',
    }
) => {
    // вычисление количества страниц
    const lastPage = Math.ceil(totalCount / itemsCountForPage) || 1;

    // обработчик смены страницы
    const onChangeCallback = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        onChange(pageNumber, itemsCountForPage);
    }

    // обработчик смены количества элементов на страницу
    const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newCount = event.target.value as number;
        // при изменении количества элементов обычно возвращаемся к первой странице
        onChange(1, newCount);
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination (можно добавить по желанию)
                    marginRight: '10px'
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>показать</span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: "4"},
                    {id: 7, value: '7'},
                    {id: 10, value: '10'},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>строк в таблице</span>
        </div>
    )
}

export default SuperPagination