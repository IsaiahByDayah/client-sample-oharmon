import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const theme = responsiveFontSizes(
    createMuiTheme({
        typography: {
            fontFamily: ["Lato", "sans-serif"].join(","),
        },
        palette: {
            primary: {
                main: "#FFA726",
            },
        },
        overrides: {
            MuiButton: {
                label: {
                    textTransform: "none",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                },
            },

            MuiLink: {
                root: {
                    color: "inherit",
                },
            },
        },
    })
)

export default theme
