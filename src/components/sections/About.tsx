import { makeStyles, Typography, Link, Button, Container } from "@material-ui/core"

const useStyles = makeStyles(({ shape, shadows, spacing, breakpoints }) => ({
    root: {
        marginTop: spacing(5),
        marginBottom: spacing(5),
    },

    profile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        [breakpoints.up("md")]: {
            flexDirection: "row",
        },
    },

    photo: {
        width: spacing(30),
        height: "auto",

        transform: "rotate(-4deg)",
        boxShadow: shadows[4],
        borderRadius: shape.borderRadius * 2,

        [breakpoints.up("md")]: {
            marginRight: spacing(5),
        },
    },

    name: {
        fontWeight: 900,
        textAlign: "center",
        marginTop: spacing(5),
    },
    roles: {
        textAlign: "center",
        marginTop: spacing(),
    },

    blurbWrapper: {
        marginTop: spacing(5),
        maxWidth: breakpoints.values.sm,

        [breakpoints.up("md")]: {
            marginTop: spacing(10),
        },

        [breakpoints.up("lg")]: {
            maxWidth: breakpoints.values.md,
        },
    },
    contactLink: {
        marginTop: spacing(2),
        display: "inline-block",
        fontWeight: 900,
    },

    downloadButton: {
        marginTop: spacing(5),
        display: "block",
        margin: "auto",
        width: "fit-content",
    },
}))

const About = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <img className={classes.photo} src="profile.webp" alt="O'Dell Profile" />

                <div>
                    <Typography className={classes.name} variant="h2">
                        O'Dell Harmon Jr.
                    </Typography>
                    <Typography className={classes.roles}>Staff Writer | Editor | Host</Typography>
                </div>
            </div>

            <Container className={classes.blurbWrapper}>
                <Typography>
                    I have worked with Game Informer, IGN, The Houston Chronicle, and a plethora of
                    gaming websites. My charismatic personality has led to significant relationships
                    within the industry — building friendships with people on the publisher and
                    media side of gaming.
                </Typography>
                <Link className={classes.contactLink} href="mailto:Dell2390@gmail.com">
                    Get In Touch &gt;
                </Link>
            </Container>

            <Button
                className={classes.downloadButton}
                variant="contained"
                color="primary"
                component="a"
                download
                href="ODell-Harmon-Jr-Resume.pdf"
            >
                Download CV
            </Button>
        </div>
    )
}

export default About
