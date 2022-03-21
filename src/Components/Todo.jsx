import React from 'react'

function Todo(){
    const [title, setTitle] = React.useState("")
    const [data, setData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [isError, setIsError] = React.useState(false)
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        getTodos(page)
    }, [page]);

    const getTodos = ( page = 1) => {
        setIsLoading(true)
        fetch(`http://localhost:3004/posts?_page=${page}&_limit=2&_end=30`)
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
        .catch((err) => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    const addTodos = () => {
        const payload = {
            title, 
            status: false
        }
        setIsLoading(true)
        return fetch("http://localhost:3004/posts", {
            method:"POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            return getTodos();
        })
        .catch((err) => {
            setIsError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }


    return isLoading ? (<>
        ...loading
    </>) : isError ? (<>
        something went wrong
    </>) : (
        <>
        <div>
        <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Add something'
            /> 
            <button onClick={() => addTodos(title)}>ADD</button>
        </div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{`${item.title} - ${item.status}`}</li> 
                ))}
            </ul>
            <h3>Page : {page}</h3>  
            <button disabled={page===1} onClick={() => setPage(page - 1)}>PREV</button>
            <button onClick={ () => setPage(page + 1)}> NEXT</button>
        </>
    )
}

export {Todo}