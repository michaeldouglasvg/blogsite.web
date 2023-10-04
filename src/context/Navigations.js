import React, {createContext, useReducer } from "react";
import Swal from 'sweetalert2'


// Initials
const initialData = {
    services: false,
    contact: false,
    blogs: false,
    gallery: false,
    homepage: false,
    download: false,
    downloadcv: false,
    hireme: false
}

export const NavigationContextApi = createContext(initialData);

// Reducer
const handleNavigation = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const NavigationContextApiProvider = ({ children }) => {
    const[state, dispatch] = useReducer(handleNavigation, initialData)

    // Actions
    const handleAlertofComplition = () => {
        return Swal.fire(
            'Develover Updates',
            'I would like to inform you that am currently engaged in the process of customizing and uploading content to your website. As a result, the website is temporarily undergoing maintenance to ensure that these updates are applied effectively. If you have any questions or require further assistance during this period, please do not hesitate to reach out to us. Thank you for your understanding and continued support.',
            'question'
          )
    }

    const download = () => {
        return Swal.fire({
            icon: 'error',
            title: 'Resume/CV, Contacts and Downloads',
            text: 'Apologies, website is undergoing maintenance. I am actively updating the above mentioned task. Please feel free to get in touch with us for further assistance.',
            footer: '<a href="https://mgracekr-site.netlify.app/">Get intouch</a>'
          })
    }

    return <NavigationContextApi.Provider value={
        {download, handleAlertofComplition, state, dispatch}
    }>
        { children }
    </NavigationContextApi.Provider>
}