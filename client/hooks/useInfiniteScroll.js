import {useCallback, useEffect, useRef, useState} from "react";

const useInfiniteScroll = targetElm => {
    const observerRef = useRef(null)
    const [intersecting, setIntersecting] = useState(false)
    // const observer = new IntersectionObserver(entries => setIntersecting(
    //     entries.some(entry => entry.isIntersecting)
    // ))

    const getObserver = useCallback(() => {
        if(!observerRef.current) { // 최초 호출 시 처리용
            observerRef.current = new IntersectionObserver(entries => setIntersecting(
                entries.some(entry => entry.isIntersecting)
            ))
        }
        return observerRef.current
    }, [observerRef.current])

    useEffect(() => {
        if (targetElm.current) getObserver().observe(targetElm.current)

        return () => {
            getObserver().disconnect()
        }
    }, [targetElm.current])

    return intersecting
}

export default useInfiniteScroll
