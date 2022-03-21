import React from 'react'

function Counter(){
    const [count, setCount] = React.useState(10)

    React.useEffect(() => {
        const id = setInterval(() => {
            setCount((prev) => {
                if(prev === 0){
                    clearInterval(id)
                    return prev
                }
                return prev -1
            })
        }, 1000)
        return () => {
            console.log("Cleaning up any set intervals")
            clearInterval(id)
        }
    }, [])


    return (
        <>
            <h1>Counter is { count}</h1>
        </>

    )
}

export {Counter}