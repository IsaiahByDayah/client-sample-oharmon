import { makeStyles, Typography, Container, Grid } from "@material-ui/core"
import cx from "clsx"

import IGNLogo from "svgs/IGNLogo"
import GameInformerLogo from "svgs/GameInformerLogo"

import WorkExperience from "components/common/WorkExperience"
import CatalogLink from "components/common/CatalogLink"

const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
        backgroundColor: "#173F64",
        paddingTop: spacing(5),
        paddingBottom: spacing(10),
        color: palette.getContrastText("#173F64"),
    },
    title: {
        textAlign: "center",
        fontWeight: 900,
        marginBottom: spacing(5),
        textTransform: "capitalize",
    },
    header: {
        maxHeight: 32,
        width: "auto",
        maxWidth: "100%",
    },
    sectionTitle: {
        textAlign: "center",
        fontWeight: 900,
        marginTop: spacing(5),
        marginBottom: spacing(2),
        textTransform: "capitalize",
    },
    catalogLink: {
        width: "100%",
    },
}))

export interface WorkProps {
    className?: string
}

const Work = ({ className }: WorkProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <Typography className={classes.title} variant="h4">
                Work Experience
            </Typography>
            <Container>
                <Grid container spacing={4} justify="center">
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={<IGNLogo className={classes.header} />}
                            position="Freelance Games Writer | IGN Entertainment"
                            duration="June 2017-Present"
                            description="Helps produce IGN Wiki guides, records game play, and aides in compiling Nintendo News."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={
                                <img
                                    className={classes.header}
                                    src="/GameFanaticsLogo.png"
                                    alt="Game Fanatics Logo"
                                />
                            }
                            position="On-Camera Host/Gaming Features Writer | Game Fanatics"
                            duration="October 2015 - Present"
                            description="Hosts videos and podcasts, Covers industry news, reviews Indie and AAA titles, composes video scripts, records voice-overs, manages social media, and represents site at gaming conventions."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={
                                <img
                                    className={classes.header}
                                    src="/ESPNEsportsLogo.png"
                                    alt="ESPN Esports Logo"
                                />
                            }
                            position="Production Assistant | ESPN Esports"
                            duration="March 2019-July 2019"
                            description="Hosts videos and podcasts, Covers industry news, reviews Indie and AAA titles, composes video scripts, records voice-overs, manages social media, and represents site at gaming conventions."
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WorkExperience
                            header={<GameInformerLogo className={classes.header} />}
                            position="Content Intern | Game Informer"
                            duration="September 2012-December 2012"
                            description="Managed website content, wrote weekly news stories, composed online features and opinion pieces, hosted 24-hour live stream event for charity,recorded videos and podcasts, and interviewed producers and directors."
                        />
                    </Grid>
                </Grid>

                <Typography className={classes.sectionTitle} variant="h6">
                    Catalog of Written Work
                </Typography>
                <Grid container spacing={4} justify="center">
                    <Grid item xs={6} sm="auto">
                        <CatalogLink
                            className={classes.catalogLink}
                            href="https://thegamefanatics.com/author/hare23/"
                            color="#25B5EA"
                        >
                            Game Fanatics
                        </CatalogLink>
                    </Grid>
                    <Grid item xs={6} sm="auto">
                        <CatalogLink
                            className={classes.catalogLink}
                            color="#ffdd00"
                            href="https://www.gamespot.com/profile/dell2390/content/"
                        >
                            Gamespot
                        </CatalogLink>
                    </Grid>
                    <Grid item xs={6} sm="auto">
                        <CatalogLink
                            className={classes.catalogLink}
                            color="#00659F"
                            href="https://www.gameinformer.com/user/odell-harmon"
                        >
                            Game Informer
                        </CatalogLink>
                    </Grid>
                    <Grid item xs={6} sm="auto">
                        <CatalogLink
                            className={classes.catalogLink}
                            color="#B4D985"
                            href="https://xblafans.com/author/harmon"
                        >
                            XBLA Fans
                        </CatalogLink>
                    </Grid>
                    <Grid item xs={6} sm="auto">
                        <CatalogLink
                            className={classes.catalogLink}
                            color="#E8961A"
                            href="https://gamecritics.com/author/odell-harmon-jr/"
                        >
                            Game Critics
                        </CatalogLink>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Work
