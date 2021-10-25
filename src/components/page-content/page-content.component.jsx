const PageContent = ({ children }) => {
    return (
        <div className="flex flex-col gap-10 p-12 pt-10 h-full bg-gray-200">
            {children}
        </div>
    )
};

export default PageContent;
