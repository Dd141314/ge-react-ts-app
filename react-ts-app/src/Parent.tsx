import React, { useState, useEffect, createContext } from 'react';
import Button from './Button';
import Child from './Child';

interface AppContextProps {
    label: string;
    setLabel: React.Dispatch<React.SetStateAction<string>>;
    iconId: string;
    setIconId: React.Dispatch<React.SetStateAction<string>>;
}

// Create a context for sharing state between components
export const AppContext = createContext(null);

const Parent: React.FC = () => {
    // Use the useState hook to store the button label
    const [label, setLabel] = useState('Click me');
    const [iconId, setIconId] = useState('icon-heart');

    return (
        <AppContext.Provider value={{ label, setLabel, iconId, setIconId }}>
            <h1>Changing Label Component</h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <input type="text" style={{ marginRight: '8px' }} />
                <Button label={label} iconId={iconId} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <input type="text" style={{ marginRight: '8px' }} />
                <Button label={label} iconId={iconId} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <input type="text" style={{ marginRight: '8px' }} />
                <Button label={label} iconId={iconId} />
            </div>
            <Child />
        </AppContext.Provider>
    );
};

export default Parent;