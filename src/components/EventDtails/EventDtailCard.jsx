
const EventDtailCard = ({ detail }) => {
    const { details, image, price, name, description, } = detail || {};

    return (
        <div>
            <div className="relative flex  mx-auto rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" w-[40vw] h-[50vh] relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        className="w-full"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="p-6">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <p className="font-bold">{description}</p>
                    <h1 className="text-xl font-bold">{price}</h1>
                    <p className="text-2xl font-bold">Details</p>
                    <p className="font-bold">{details}</p>
                </div>
            </div>
        </div>
    )
}

export default EventDtailCard