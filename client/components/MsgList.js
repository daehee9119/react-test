import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import fetcher from "../fetcher";
import useInfiniteScroll from "../hooks/useInfiniteScroll";


const MsgList = ({smsgs, users}) => {
    const {query: {userId = ''}} = useRouter()
    const [msgs, setMsgs] = useState(smsgs)
    const [editingId, setEditingId] = useState(null)
    const [hasNext, setHasNext] = useState(true)
    const fetchMoreEl = useRef(null)
    const intersecting = useInfiniteScroll(fetchMoreEl)

    const onCreate = async text => {
        const newMsg = await fetcher('post', '/messages', {text, userId})
        if (!newMsg) throw Error('something wrong')
        // const newMsg = {
        //     id: msgs.length + 1,
        //     userId: getRandomUserId(),
        //     timestamp: Date.now(),
        //     text: `${msgs.length + 1} ${text}`
        // }
        setMsgs(msgs => ([newMsg, ...msgs]))
    }

    const onupdate = async (text, id) => {
        const newMsg = await fetcher('put', `/messages/${id}`, {text, userId})
        if (!newMsg) throw Error('something wrong')
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === id)
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1, newMsg)
            return newMsgs
        })
        doneEdit()
    }

    const doneEdit = () => {
        setEditingId(null)
    }

    const getMessages = async () => {
        const newMsgs = await fetcher('get', '/messages', {params: {cursor: msgs[msgs.length - 1]?.id || ''}})
        if (newMsgs.length === 0) {
            setHasNext(false)
            return
        }
        setMsgs(msgs => [...msgs, ...newMsgs])
    }

    useEffect(() => {
        if (intersecting && hasNext) getMessages()
    }, [intersecting])

    const onDelete = async id => {
        const receivedId = await fetcher('delete', `/messages/${id}`, {params: {userId}})
        setMsgs(msgs => {
            const targetIndex = msgs.findIndex(msg => msg.id === receivedId + '')
            if (targetIndex < 0) return msgs;
            const newMsgs = [...msgs]
            newMsgs.splice(targetIndex, 1)
            return newMsgs
        })
    }

    return (
        <>
            <MsgInput mutate={onCreate}/>
            <ul className="messages">
                {msgs.map(x => (
                    <MsgItem
                        key={x.id} {...x}
                        onUpdate={onupdate}
                        onDelete={() => onDelete(x.id)}
                        startEdit={() => setEditingId(x.id)}
                        isEditing={editingId === x.id}
                        myId={userId}
                        user={users[x.userId]}
                    />
                ))}
            </ul>
            <div ref={fetchMoreEl}/>
        </>
    )
}
export default MsgList
