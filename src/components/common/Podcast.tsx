import { makeStyles, Paper, Typography, Link } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles(({ spacing, typography }) => ({
    root: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: spacing(16),
    },
    link: {
        display: "flex",
    },
    photo: {
        height: spacing(16),
        width: spacing(16),
        objectFit: "cover",
        flexGrow: 0,
        flexShrink: 0,
    },
    info: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: spacing(),
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
    series: {
        flexGrow: 0,
        flexShrink: 0,
        fontSize: typography.caption.fontSize,
        fontWeight: 900,
        opacity: 0.54,
    },
    description: {
        marginTop: spacing(),
        display: "-webkit-box",
        boxOrient: "vertical",
        overflow: "hidden",
        lineClamp: 3,
        flexGrow: 1,
        flexShrink: 0,
        opacity: 0.74,
        maxWidth: "100%",
    },
}))

export interface PodcastProps {
    className?: string

    src: string
    title: string
    series: string
    description?: string
    url?: string
}

const Podcast = ({ className, src, title, series, description, url }: PodcastProps) => {
    const classes = useStyles()

    const photo = <img className={classes.photo} src={src} alt={`${series} podcast cover`} />

    return (
        <Paper className={cx(classes.root, className)}>
            {url ? (
                <Link className={classes.link} href={url} target="_blank" rel="noopener noreferrer">
                    {photo}
                </Link>
            ) : (
                photo
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
                <Typography className={cx(classes.series, classes.oneLine)}>{series}</Typography>
                {description && (
                    <Typography className={classes.description} variant="body2">
                        {description}
                    </Typography>
                )}
            </div>
        </Paper>
    )
}

export default Podcast
