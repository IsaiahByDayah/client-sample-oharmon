import { makeStyles, Container } from "@material-ui/core"

import SocialLinks from "components/common/SocialLinks"
import Quote from "components/common/Quote"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: spacing(5),
    },
    message: {},
    quote: {
        fontStyle: "italic",
    },
    signiture: {
        textAlign: "end",
    },
    socialLinks: {
        marginTop: spacing(5),
    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <Container className={classes.message} maxWidth="sm">
                <Quote
                    message="Strength is to know how small you are, and still strive to reach heights greater than you can imagine."
                    signiture="- O'Dell Harmon Jr."
                />
            </Container>
            <SocialLinks className={classes.socialLinks} />
        </footer>
    )
}

export default Header
