import React, { useEffect, useState } from 'react'

interface TestProps {
    myString: string
    myNumber: number
}

interface User {
    name: string
    age: number
}

interface ResponseType {
    userId: number
    id: number
    title: string
    body: string
}

const Test = ({ myString, myNumber }: TestProps): JSX.Element => {
    const [counter, setCounter] = useState<number>(0)

    const [myArray, setMyArray] = useState<Array<string | number>>([1, 2, 3, 4, ''])

    const [myArray2, setMyArray2] = useState<string[]>(['1', '2', '3', '4', '5'])

    const [user, setUser] = useState<User>({} as User)

    const add = (a: number, b: number): number => {
        return a + b
    }

    const getPosts = async (): Promise<ResponseType[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getPosts()
            .then((data): void => console.log(data[0].id))
            .catch((error): void => console.log(error))
            .finally((): void => console.log('done'))
    }, [])

    return (
        <div>
            {myString} {myNumber}
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => add(myNumber, counter)}>Add</button>
        </div>
    )
}

export default Test