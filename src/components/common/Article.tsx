import { makeStyles, Paper, Typography, Link } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    link: {
        display: "flex",
        width: "100%",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: spacing(2),
        overflow: "hidden",
    },
    outletLogo: {
        flexGrow: 0,
        flexShrink: 0,
        maxHeight: "100%",
        marginRight: spacing(2),
        height: spacing(5),
        width: spacing(5),
        objectFit: "contain",
    },
    info: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        overflow: "hidden",
    },
    oneLine: {
        maxWidth: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    },
    title: {
        flexGrow: 0,
        flexShrink: 0,
        textTransform: "capitalize",
    },
    details: {
        flexGrow: 0,
        flexShrink: 0,
        opacity: 0.54,
    },
    photo: {
        width: "100%",
        height: "auto",
        objectFit: "cover",
        flexGrow: 0,
        flexShrink: 0,
    },
    blurb: {
        margin: spacing(2),
        display: "-webkit-box",
        boxOrient: "vertical",
        overflow: "hidden",
        lineClamp: 5,
        flexGrow: 1,
        flexShrink: 0,
        opacity: 0.74,
    },
}))

export interface ArticleProps {
    className?: string

    title: string
    outlet: string
    outletLogoSrc?: string
    date: string
    thumbnailSrc: string
    blurb?: string
    url?: string
}

const Article = ({
    className,
    title,
    outlet,
    outletLogoSrc,
    date,
    thumbnailSrc,
    blurb,
    url,
}: ArticleProps) => {
    const classes = useStyles()

    const photo = <img className={classes.photo} src={thumbnailSrc} alt={`${title} thumbnail`} />

    return (
        <Paper className={cx(classes.root, className)}>
            <div className={classes.header}>
                {outletLogoSrc && (
                    <img
                        className={classes.outletLogo}
                        src={outletLogoSrc}
                        alt={`${outlet} logo`}
                    />
                )}
                <div className={classes.info}>
                    <Typography className={cx(classes.title, classes.oneLine)}>
                        {url ? (
                            <Link href={url} target="_blank" rel="noopener noreferrer">
                                {title}
                            </Link>
                        ) : (
                            title
                        )}
                    </Typography>
                    <Typography className={cx(classes.details, classes.oneLine)}>
                        {`${outlet}${date ? ` | ${date}` : ""}`}
                    </Typography>
                </div>
            </div>
            {url ? (
                <Link className={classes.link} href={url} target="_blank" rel="noopener noreferrer">
                    {photo}
                </Link>
            ) : (
                photo
            )}
            {blurb && (
                <Typography className={classes.blurb} variant="body2">
                    {blurb}
                </Typography>
            )}
        </Paper>
    )
}

export default Article
