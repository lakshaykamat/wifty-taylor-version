type Props = {
    albumCover:string
    name:string
    description:string
    quizAttempts:number
}
const Cards = (props:Props) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between bg-secondary text-secondary-foreground outline outline-gray-200 outline-2">
            <div>
                <img
                    src={props.albumCover}
                    alt={`${props.name} Cover`}
                    className="w-full h-[275px] object-cover mb-4 rounded-md border-2 border-gray-400"
                />
                <h3 className="text-2xl font-semibold mb-2">{props.name}</h3>
                <p className="text-lg text-gray-600 mb-2">{props.description}</p>
            </div>    
            <p className="text-lg">{props.quizAttempts}</p>
        </div>

    )
}

export default Cards;
