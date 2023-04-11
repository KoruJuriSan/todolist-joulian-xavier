import React, { useMemo, useState, useEffect } from "react"
import { Nav } from "../nav/nav"
import { dataContext } from "./dataContext"
import { Sections } from "../sections/sections"
import { ongletContext } from "./ongletContext"

export const App = function(props) {

    const [todo, setTodo] = useState([])
    const [currentOnglet, setCurrentOnglet] = useState(-1)

    useEffect(() => {
        fetch("/get-data")
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])

    return (
    <>
        <dataContext.Provider value={[todo, setTodo]}>
        <ongletContext.Provider value={[currentOnglet, setCurrentOnglet]}>

            <Nav></Nav>
            <Sections></Sections>

        </ongletContext.Provider>
        </dataContext.Provider>
    </>
    )
}