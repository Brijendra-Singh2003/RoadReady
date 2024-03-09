"use client";

import { createContext, useState } from "react";

export const UserContext = createContext({
    user: {name: "", image: "#", email: ""},
    setUser: ()=>console.log("default user component")
});

export default function UserProvider({children}) {

    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={ { user: user, setUser: setUser} }>
            {children}
        </UserContext.Provider>
    )
}
