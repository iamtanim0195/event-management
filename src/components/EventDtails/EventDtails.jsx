import { useEffect, useState } from "react"
import EventDtailCard from "./EventDtailCard"
import { useLoaderData, useParams } from "react-router-dom"

const EventDtails = () => {

    const [detail, setDetail] = useState()

    const { id } = useParams()
    const details = useLoaderData()

    useEffect(() => {
        const findDetail = details?.find(detail => detail.id == id)

        setDetail(findDetail)

    }, [id, details])
    return (
        <EventDtailCard detail={detail}></EventDtailCard>
    )
}

export default EventDtails;