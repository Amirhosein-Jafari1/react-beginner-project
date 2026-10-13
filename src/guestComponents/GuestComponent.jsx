import "./GuestComponent.css"

const GuestComponent = () => {
    return (
        <div className="guest-container">
            <h1 className="guest-title">Guest Component</h1>
            <p className="guest-message">Please login to see your information 😉</p>
        </div>
    );
};

export default GuestComponent;