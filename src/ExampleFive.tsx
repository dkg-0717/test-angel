import React, { useState, useEffect } from 'react'

const url = "https://jsonplaceholder.typicode.com/users/1";

// /**
//   // Sample Response
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org"
//   }
// **/

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export const ExampleFive = () => {
    const [userData, setUserData] = useState<User>()

    const populateData = (data: User) => {
        const { id, name, username, email, website, phone } = data
        let user: User = {
            id, name, username, email, website, phone
        }
        setUserData(user)
    }

    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        populateData(data)
    }

    const getInitials = (name: string) => {
        const nameSplitted = name.split(' ');
        if (nameSplitted.length > 1) {
            return `${nameSplitted[0][0].toUpperCase()}${nameSplitted[1][0].toUpperCase()}`
        }
        return name[0].toUpperCase()
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="App">
                <h2>User Data</h2>
                <div className="user-card">
                    <div className="user-image">
                        <div className="logo">
                            <p className='logo-txt'>{userData?.username && getInitials(userData?.username)}</p>
                        </div>
                    </div>
                    <div className="user-info">
                        <p>
                            <strong>Name: </strong>{" "}
                            {userData?.username || "(Need to populate name here)"}
                        </p>
                        <p>
                            <strong>Website: </strong>
                            {userData?.website || "(Need to populate website here)"}
                        </p>
                        <p>
                            <strong>Email: </strong>
                            {userData?.email || "(Need to populate email here)"}
                        </p>
                        <p>
                            <strong>Phone: </strong>
                            {userData?.phone || "(Need to populate phone here)"}
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

