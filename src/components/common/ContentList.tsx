import { ReactNode } from "react"
import { makeStyles, Typography } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles(({ spacing, mixins, breakpoints }) => ({
    root: {},
    label: {
        fontWeight: 900,
        textTransform: "capitalize",
        marginBottom: spacing(2),

        [breakpoints.down("lg")]: {
            ...mixins.gutters(),
        },
    },
}))

export interface ContentListProps {
    className?: string
    children?: ReactNode
    label?: string
}

const ContentList = ({ className, children, label }: ContentListProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            {label && <Typography className={classes.label}>{label}</Typography>}
            {children}
        </div>
    )
}

export default ContentList
