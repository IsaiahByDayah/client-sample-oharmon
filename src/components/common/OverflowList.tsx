import { ReactNode, Children } from "react"
import { makeStyles } from "@material-ui/core"
import cx from "clsx"
import { InView } from "react-intersection-observer"

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
    root: {
        display: "flex",
        overflow: "auto",
        paddingBottom: spacing(2),

        scrollSnapType: "x mandatory",
    },
    item: {
        scrollSnapAlign: "start",
        display: "flex",
        paddingLeft: spacing(2),
        paddingRight: spacing(2),

        minWidth: "100%",
        maxWidth: "100%",

        [breakpoints.up("sm")]: {
            minWidth: "calc(((100% / 12) * 6))",
            maxWidth: "calc(((100% / 12) * 6))",

            "&:first-child": {
                paddingLeft: spacing(3),
            },
            "&:last-child": {
                paddingRight: spacing(3),
            },
        },

        [breakpoints.up("md")]: {
            minWidth: "calc(((100% / 12) * 6))",
            maxWidth: "calc(((100% / 12) * 6))",
        },

        [breakpoints.up("lg")]: {
            minWidth: "calc(((100% / 12) * 4))",
            maxWidth: "calc(((100% / 12) * 4))",
        },
    },
    anchor: {
        paddingLeft: spacing(2),
        [breakpoints.up("sm")]: {
            paddingLeft: spacing(3),
        },
    },
}))

export interface OverflowListProps {
    className?: string
    children?: ReactNode

    onChange?: (index: number, inView: boolean) => void
}

const OverflowList = ({ className, children, onChange }: OverflowListProps) => {
    const classes = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            {Children.map(children, (child, index) => (
                <InView
                    className={classes.item}
                    as="div"
                    onChange={(inView) => onChange?.(index, inView)}
                    threshold={0.5}
                >
                    {child}
                </InView>
            ))}
        </div>
    )
}

export default OverflowList
