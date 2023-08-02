

import React, { useState } from 'react'

//list with option add and delete items

interface Item {
    title: string;
    done: boolean;
}

export const ExampleFour = () => {
    const [list, setList] = useState<Item[]>([]);
    const [value, setValue] = useState("");

    const changeHandler = (val: string) => {
        setValue(val)
    };

    const submitHandler = () => {
        if (value !== '') {
            setList([
                ...list,
                { title: value, done: false }
            ])
            setValue('')
        }
    };

    const deleteHandler = (item: Item) => {
        const findItem = list.filter(i => i.title !== item.title)
        if (findItem) {
            setList([
                ...findItem
            ])
        }
    };

    const markHandler = (item: Item) => {
        const items = list.filter(i => i.title !== item.title)
        setList([
            ...items,
            {
                ...item,
                done: true
            }
        ])
    }

    return (
        <div className='todoapp-container' style={{ textAlign: 'center' }}>
            <div className="todo-app">
                <h1>Todo App</h1>
                <div className="input-container">
                    <input type="text" value={value} onChange={(event) => changeHandler(event.target.value)} />{" "}
                    <button className='add-button' onClick={submitHandler}>Add</button>
                </div>
                <div className='list-container'>
                    {list.length > 0 ?
                        <ul className='list-items'>
                            {list.map((item: Item, idx) => {
                                return (
                                    <li className='item' key={idx}>
                                        <p className={`${item.done ? 'item-done' : ''} item-title`}>{item.title}</p>
                                        <button className='delete-item' onClick={() => deleteHandler(item)}>delete</button>
                                        <button className='mark-item' disabled={item.done} onClick={() => markHandler(item)}>hecho</button>
                                    </li>
                                )
                            })}
                        </ul> :
                        <p>No hay tareas</p>
                    }
                </div>
            </div>
        </div>
    )
}
