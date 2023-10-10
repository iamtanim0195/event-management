import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { id, image,price, name, description,} = service || {};

    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className=" h-[30vh] relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
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
                    <Link to={`/details/${id}`}><button className="btn btn-primary block mx-auto ">details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;