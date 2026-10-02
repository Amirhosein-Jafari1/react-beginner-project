const FunctionalComponents = () => {
    const value = prompt("1 or 2");
    return (
        <div>
            welcome
            {value === "1" ? <h1>خوش اومدی</h1> : null }
        </div>
    )
};

export default FunctionalComponents;