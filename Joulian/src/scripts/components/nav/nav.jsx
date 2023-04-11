import React, { useCallback, useContext } from 'react'
import { dataContext } from '../app/dataContext'
import { useOnglets } from '../../hooks/useOnglets/useOnglets'
import { PrimaryBTN } from '../primaryBTN/primaryBTN'
import { IconBTN } from '../iconButton/iconBTN'
import { ongletContext } from '../app/ongletContext'

export const PlusIcon = <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className=' fill-current' d="M20.25 11.5833H13.75V5.08333C13.75 4.79602 13.6359 4.52047 13.4327 4.3173C13.2295 4.11414 12.954 4 12.6667 4C12.3794 4 12.1038 4.11414 11.9006 4.3173C11.6975 4.52047 11.5833 4.79602 11.5833 5.08333V11.5833H5.08333C4.79602 11.5833 4.52047 11.6975 4.3173 11.9006C4.11414 12.1038 4 12.3794 4 12.6667C4 12.954 4.11414 13.2295 4.3173 13.4327C4.52047 13.6359 4.79602 13.75 5.08333 13.75H11.5833V20.25C11.5833 20.5373 11.6975 20.8129 11.9006 21.016C12.1038 21.2192 12.3794 21.3333 12.6667 21.3333C12.954 21.3333 13.2295 21.2192 13.4327 21.016C13.6359 20.8129 13.75 20.5373 13.75 20.25V13.75H20.25C20.5373 13.75 20.8129 13.6359 21.016 13.4327C21.2192 13.2295 21.3333 12.954 21.3333 12.6667C21.3333 12.3794 21.2192 12.1038 21.016 11.9006C20.8129 11.6975 20.5373 11.5833 20.25 11.5833Z"/>
</svg>

export const Nav = function(props) {
    const [data, setData] = useContext(dataContext)
    const [CurrentOnglet, setCurrentOnglet] = useContext(ongletContext) 
    const Todos = useOnglets(data, setCurrentOnglet)

    const handleAdds = useCallback((event) => {
        const newData = [...data]
        newData.push({
            "title": "Une todo",
            "tasks": []
        })
        setData(() => {
            return newData
        })
    })

    const handleClicksTitle = useCallback(() => {
        setCurrentOnglet(-1)
    })

    const handleSave = useCallback(() => {
        fetch("/jsp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    })

    return (
        <nav className=' fixed flex flex-col justify-between p-5 bg-gray-800 w-52 h-full'>
            <div className='flex flex-col gap-3'>
                <h1 onClick={handleClicksTitle} className= ' cursor-pointer text-white text-2xl font-medium h-fit'>Vos Todos</h1>
                <hr className='rounded-sm bg-gray-300' />
                {Todos}
                <hr className='rounded-sm bg-gray-300' />
                <IconBTN icon={PlusIcon} onClick={handleAdds}>Ajouter</IconBTN>
            </div>
            <PrimaryBTN onClick={handleSave}>Sauvegarder</PrimaryBTN>
        </nav>
    )
}