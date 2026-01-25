import React, {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';



type Theme = {
    theme:string,
    setTheme:Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<Theme>({} as Theme);

function AppThemeContext({children}:{children:ReactNode}  ) {

    const [theme, setTheme] = useState('blue')
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>{children}</ThemeContext.Provider>
    );
}

export const useThemeFromContext = ()=> {
    const {theme,setTheme} = useContext(ThemeContext);
    return {theme,setTheme};
}

export default AppThemeContext;