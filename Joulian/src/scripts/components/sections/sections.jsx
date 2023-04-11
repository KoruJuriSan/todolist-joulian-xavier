import React, { useContext, useState } from "react"
import { SectionAccueil } from "../sectionAccueil/sectionAccueil"
import { ongletContext } from "../app/ongletContext"
import { dataContext } from "../app/dataContext"
import { SectionTodo } from "../sectionTodo/sectionTodo"

export const Sections = function(props) {

    const [currentOnglet, setCurrentOnglet] =  useContext(ongletContext)
    const [data, setData] = useContext(dataContext)

    return <>
        {currentOnglet <= -1  ? <SectionAccueil /> : null}
        {currentOnglet >= 0  ? <SectionTodo /> : null}
    </>
}