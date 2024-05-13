import React from 'react';

interface ButtonProps {
    label: string;
    iconId: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, iconId, onClick }) => {
    return (
        <button style={{ display: 'flex', alignItems: 'center' }} onClick={onClick}>
            <svg width="20" height="20" style={{marginRight : '4px'}}>
                <use xlinkHref={`/public/sprite.svg#${iconId}`} />
            </svg>
            <span>{label}</span>
        </button>
    );
};

export default Button;