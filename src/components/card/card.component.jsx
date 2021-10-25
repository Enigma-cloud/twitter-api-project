const Card = ({ children }) => {
    return (
        <div className="flex w-full rounded-lg shadow-lg p-8 bg-white hover:shadow-2xl transition-all duration-200 ease-in">
            {children}
        </div>
    )
};

export default Card;