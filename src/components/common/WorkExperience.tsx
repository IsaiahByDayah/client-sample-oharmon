import { ReactNode } from "react"
import { makeStyles, Typography, Paper } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles(({ spacing, shape, typography }) => ({
    root: {
        borderRadius: shape.borderRadius * 2,
        padding: spacing(2),
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    header: {
        display: "flex",
        justifyContent: "center",
        marginBottom: spacing(2),
    },
    position: {
        fontWeight: 900,
        fontSize: typography.h5.fontSize,
    },
    duration: {
        fontWeight: 300,
        fontSize: typography.body2.fontSize,
    },
    description: {
        marginTop: spacing(2),
        lineHeight: "160%",
        flexGrow: 1,
    },
}))

export interface WorkExperienceProps {
    className?: string

    header?: ReactNode
    position: string
    duration: string
    description: string
}

const WorkExperience = ({
    className,
    header,
    position,
    duration,
    description,
}: WorkExperienceProps) => {
    const classes = useStyles()

    return (
        <Paper className={cx(classes.root, className)}>
            {header && <div className={classes.header}>{header}</div>}
            <Typography className={classes.position}>{position}</Typography>
            <Typography className={classes.duration}>{duration}</Typography>
            <Typography className={classes.description}>{description}</Typography>
        </Paper>
    )
}

export default WorkExperience
