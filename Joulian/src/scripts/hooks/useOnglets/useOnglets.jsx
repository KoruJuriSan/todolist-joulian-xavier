import React, { useMemo } from "react"
import { Onglet } from "../../components/onglet/onglet"

export const useOnglets = function(data, setCurrentOnglet) {
    return useMemo(() => {
        return (
        <div className="grid gap-1">
            {
                data.map((todo, key) => {
                    return (
                        <Onglet onClick={setCurrentOnglet} index={key} key={`key:${key},titre:${todo.title}`} >{todo.title}</Onglet>
                    )
                })
            }
        </div>
        )
    })
}