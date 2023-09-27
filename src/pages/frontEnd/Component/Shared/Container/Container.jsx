const Container = ({children}) => {
    return (
        <div className="container mx-auto px-4 lg:w-[90%] md:w-[80%] lg:px-0">
            {children}
        </div>
    );
};

export default Container;