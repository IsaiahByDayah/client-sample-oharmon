import { ThemeProvider as MuiThemeProvider } from "@material-ui/core"
import { FC, PropsWithChildren } from "react"

import theme from "lib/theme"

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
