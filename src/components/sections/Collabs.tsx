import { makeStyles, useMediaQuery, Theme, Typography, Grid, Container } from "@material-ui/core"
import cx from "clsx"

import brandCollabs from "data/brandCollabs"

import BrandCollab from "components/common/BrandCollab"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        paddingTop: spacing(5),
        paddingBottom: spacing(10),
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(5),
    },
    collab: {
        height: "100%",
    },
    reverse: {
        flexDirection: "row-reverse",
    },
    indecators: {
        marginTop: spacing(2),
        justifyContent: "center",
    },
}))

export interface CollabsProps {
    className?: string
}

const Collabs = ({ className }: CollabsProps) => {
    const classes = useStyles()
    const horizontal = useMediaQuery<Theme>((theme) => theme.breakpoints.only("sm"))

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                Brand Collabs
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    {brandCollabs.map((bc, index) => (
                        <Grid key={index} item xs={12} md={4}>
                            <BrandCollab
                                className={classes.collab}
                                src={bc.src}
                                quoteProps={{
                                    message: bc.message,
                                    signiture: (
                                        <>
                                            {bc.person}
                                            {bc.role && (
                                                <>
                                                    <br />
                                                    {bc.role}
                                                </>
                                            )}
                                        </>
                                    ),
                                }}
                                color={bc.color}
                                variant={horizontal ? "horizontal" : "vertical"}
                                reverse={index % 2 === 1}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Collabs
