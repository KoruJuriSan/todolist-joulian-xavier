import React, { useCallback, useContext } from "react"
import { dataContext } from "../app/dataContext"
import { ongletContext } from "../app/ongletContext"
import { TrashBTN } from "../trashBTN/trashBTN"

export const Task = function({checked=false, children="", index=0}) {

    const [data, setData] = useContext(dataContext)
    const [currentOnglet, setCurrentOnglet] = useContext(ongletContext)

    const handleChange = useCallback((event) => {
        const newData = [
            ...data
        ]
        newData[currentOnglet].tasks[index].content = event.target.value
        setData(() => {
            return (newData)
        })
    }, [data, index])

    const handleDelete = useCallback(() => {
        const newData = data[currentOnglet].tasks
        newData.splice(index, 1)
        setData(() => {
            return ([
                ...data
            ])
        })
    })

    const handleChecked = useCallback(() => {
        let newData = [...data]
        newData[currentOnglet].tasks[index].statut = !data[currentOnglet].tasks[index].statut
        setData(() => {
            return (newData)
        })
    })
 
    return <div className=" bg-gray-800 px-5 py-2 rounded-lg text-white flex justify-between">
        <input onChange={handleChecked} checked={checked} className="mr-3" type="checkbox" name="" id="" />
        <input placeholder="écrivez votre tâche a éffectuer !" onChange={handleChange} value={children} type="text" className={` dottedhas bg-transparent px-2 py-1 w-full ${ checked ? "line-through" : ""}`} />
        <TrashBTN className="ml-3"  onClick={handleDelete}></TrashBTN>
    </div>
}  