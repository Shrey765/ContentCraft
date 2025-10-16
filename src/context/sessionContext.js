import React from "react";

const SessionContext = React.createContext({
    sessions: [
        {
            id: 1,
            title: "The Unstoppable Rise of Renewable Energy",
            type: "Blog Post",
            time: "2 hours ago"
        }
    ],
    addSession: (session) => {},
    updateSession: (session) => {},
    deleteSession: (session) => {},
})


export const useSession = () => {
    return React.useContext(SessionContext);
}

export const SessionProvider = SessionContext.Provider