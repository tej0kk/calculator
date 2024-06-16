import { Link } from "react-router-dom";

const Splash = () => {
    return (
        <div>
            <h3>Press button to start !</h3>
            <Link to="/home" className="btn btn-primary" type="button">
                START
            </Link>
        </div>
    );
}

export default Splash;