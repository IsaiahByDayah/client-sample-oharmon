import { makeStyles, Paper, Typography, Link } from "@material-ui/core"
import cx from "clsx"
import ReactPlayer from "react-player"

const useStyles = makeStyles(({ spacing, shape }) => ({
    root: {
        width: "100%",
        overflow: "hidden",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    playerWrapper: {
        borderRadius: shape.borderRadius,
        overflow: "hidden",
        position: "relative",
        paddingTop: "56.25%",
    },
    player: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    header: {
        width: "100%",
        display: "flex",

        flexDirection: "column",
        alignItems: "flex-start",

        justifyContent: "flex-start",
        padding: spacing(2),
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
        fontWeight: 700,
    },
    details: {
        flexGrow: 0,
        flexShrink: 0,
        opacity: 0.54,
    },
}))

export interface VideoProps {
    className?: string

    title: string
    outlet: string
    date: string
    src?: string
    url?: string
    poster?: string
}

const Video = ({ className, title, outlet, date, src, url, poster }: VideoProps) => {
    const classes = useStyles()

    return (
        <Paper className={cx(classes.root, className)}>
            <div className={classes.playerWrapper}>
                <ReactPlayer
                    className={classes.player}
                    width="100%"
                    height="100%"
                    url={src}
                    light={poster ?? true}
                />
            </div>
            <div className={classes.header}>
                <Link
                    className={cx(classes.title, classes.oneLine)}
                    href={url ?? src}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body1"
                >
                    {title}
                </Link>
                <Typography className={cx(classes.details, classes.oneLine)} variant="body2">
                    {`${outlet}${date ? ` | ${date}` : ""}`}
                </Typography>
            </div>
        </Paper>
    )
}

export default Video
