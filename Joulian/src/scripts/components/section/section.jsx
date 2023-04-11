import React from "react"

export const Section = function({className, value=undefined, children=""}) {
    return (
        <section className={` ml-52 h-full ${className}`}>
            {value == undefined ? children : value}
        </section>
    )
}