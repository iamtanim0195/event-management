import ServiceCard from "./ServiceCard"

const Services = ({ services}) => {
    return (
        <div>
            <div className="grid grid-cols-1 pt-10 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    services?.map((service) => <ServiceCard key={service.id} service={service} ></ServiceCard>)
                }
            </div>
        </div>
    )
}

export default Services