import { makeStyles, Fade } from "@material-ui/core"
import cx from "clsx"

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        display: "flex",
        flexDirection: "row",
    },
    indicator: {
        padding: 0,
        height: spacing(1.5),
        width: spacing(1.5),
        borderRadius: "100%",
        borderWidth: "2px",
        borderColor: "#000000",
        borderStyle: "solid",
        marginRight: spacing(),

        "&:last-child": {
            marginRight: 0,
        },

        transition: "background-color 400ms ease-in-out",
    },
    active: {
        backgroundColor: "#000000",
    },
    clickable: {
        cursor: "pointer",
    },
}))

export interface SlideIndicatorsProps {
    className?: string

    total: number
    currentIndex: number | number[]

    onClick?: (index: number) => void
}

const SlideIndicators = ({ className, total, currentIndex, onClick }: SlideIndicatorsProps) => {
    const classes = useStyles()

    const currentIndexArr = Array.isArray(currentIndex) ? currentIndex : [currentIndex]

    return (
        <Fade in={Boolean(currentIndexArr.length)}>
            <div className={cx(classes.root, className)}>
                {Array(total)
                    .fill(null)
                    .map((_, index) =>
                        onClick ? (
                            <button
                                key={index}
                                className={cx(classes.indicator, classes.clickable, {
                                    [classes.active]: currentIndexArr.includes(index),
                                })}
                                onClick={() => onClick(index)}
                            />
                        ) : (
                            <div
                                key={index}
                                className={cx(classes.indicator, {
                                    [classes.active]: currentIndexArr.includes(index),
                                })}
                            />
                        )
                    )}
            </div>
        </Fade>
    )
}

export default SlideIndicators
