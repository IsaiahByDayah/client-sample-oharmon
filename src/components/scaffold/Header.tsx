import { makeStyles, AppBar, Toolbar } from "@material-ui/core"

import SocialLinks from "components/common/SocialLinks"

const useStyles = makeStyles(() => ({
    toolbar: {
        alignItems: "center",
        justifyContent: "center",
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <AppBar color="transparent" elevation={0} position="static">
            <Toolbar className={classes.toolbar}>
                <SocialLinks color="#000000" />
            </Toolbar>
        </AppBar>
    )
}

export default Header
