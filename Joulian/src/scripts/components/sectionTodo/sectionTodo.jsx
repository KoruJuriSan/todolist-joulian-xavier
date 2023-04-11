import React, { useCallback, useContext, useMemo } from "react"
import { dataContext } from "../app/dataContext"
import { ongletContext } from "../app/ongletContext"
import { Section } from "../section/section"
import { Task } from "../task/task"
import { IconBTN } from "../iconButton/iconBTN"
import { PlusIcon } from "../nav/nav"

export const SectionTodo = function(props) {

    const [data, setData] = useContext(dataContext)
    const [currentOnglet, setCurrentOnglet] = useContext(ongletContext)

    const Tasks = useMemo(() => {
        return data[currentOnglet].tasks.map((element, key) => {
            return <Task index={key} key={key} checked={element.statut}>{element.content}</Task>
        })
    }, [data, currentOnglet])

    const handleChanges = useCallback((event) => {
        const newData = [
            ...data
        ]
        newData[currentOnglet].title = event.target.value
        setData(() => {
            return (newData)
        })
    })

    const handleAdds = useCallback((event) => {
        const newData = [
            ...data
        ]
        newData[currentOnglet].tasks.push({
            "content": "Finir mon projet de todolist",
            "statut": false
        })
        setData(() => {
            return (newData)
        })
    })

    return (
        <Section className=" flex flex-col gap-2 px-12 py-6">
            <input onChange={handleChanges} className=" bg-transparent w-fit text-3xl p-1 text-white font-semibold" value={data[currentOnglet].title} />
            <hr />
            {Tasks}
            <IconBTN icon={PlusIcon} onClick={handleAdds}>Ajouter</IconBTN>
        </Section>
    )
}