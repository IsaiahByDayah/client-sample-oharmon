import { useState } from "react"

const getTrueIndexes = (arr: boolean[]): number[] => {
    const indexes: number[] = []

    arr.forEach((val, index) => {
        if (val) indexes.push(index)
    })

    return indexes
}

const useInviewIndexes = (initialValues?: boolean[], mode?: "first" | "all" | "last") => {
    const [indexes, setIndexes] = useState<boolean[]>(initialValues ?? [])
    const [lastKnownIndexes, setLastKnownIndexes] = useState<boolean[]>(indexes)

    mode = mode ?? "all"

    const onChange = (index: number, value: boolean) => {
        const _indexes = [...indexes]
        _indexes[index] = value

        setIndexes(_indexes)
        setLastKnownIndexes(indexes)
    }

    const foundIndexes = getTrueIndexes(indexes)
    const lastFoundIndexes = getTrueIndexes(lastKnownIndexes)
    let _foundIndexes

    switch (mode) {
        case "first":
            _foundIndexes = foundIndexes.length ? foundIndexes : lastFoundIndexes
            _foundIndexes = _foundIndexes.slice(0, 1)
            break
        case "last":
            _foundIndexes = foundIndexes.length ? foundIndexes : lastFoundIndexes
            _foundIndexes = _foundIndexes.slice(-1)
            break
        default:
            _foundIndexes = foundIndexes
            break
    }

    return [_foundIndexes, onChange] as const
}

export default useInviewIndexes
