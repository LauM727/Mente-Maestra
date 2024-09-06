import React, { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Logoimg from "../../assets/logoimg.png";

function Begin() {
    const navigate = useNavigate();
    const location = useLocation();
    const { participantNames } = location.state || { participantNames: [] };

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/game', { state: { participants: participantNames } });
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate, participantNames]);

    return (
        <div className="begin-screen">
            <img className="logo" src={Logoimg} alt="Logo" />
            <h2>¡Comencemos!</h2>
        </div>
    );
}

export default Begin;
