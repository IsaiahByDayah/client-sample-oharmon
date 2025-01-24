import { FC } from "react"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core"

import theme from "lib/theme"

const ThemeProvider: FC = ({ children }) => {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
