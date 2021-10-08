import React from "react";
import './Button.scss';

const Button = ({id, onClick, text}) => {
    return (
        <div>
            <button
                data-testid={'testButton'}
                className={`buttonAddToCart`}
                onClick={id ? () => onClick(id) : () => onClick()}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;