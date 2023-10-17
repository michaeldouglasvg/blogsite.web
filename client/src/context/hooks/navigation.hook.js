import React from "react"
import { NavigationContextApi } from "../Navigations"

export const useNavigationHook = () => {
    const context = React.useContext(NavigationContextApi);

    if(!context) {
        throw Error("Context not defined well, please consider checking tree nodes.")
    }

    return context;
}
