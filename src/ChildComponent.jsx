const ChildComponent = ({text, children}) => {
    return (
        <div>
            <h1>child component</h1>
            <p>{text}</p>
            {children}
        </div>
    );
};

export default ChildComponent;
