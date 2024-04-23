import { createContext } from "react";

export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;