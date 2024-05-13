import React, { useContext } from 'react';
import { AppContext } from './Parent';
import Button from './Button';

const Child: React.FC = () => {
    const { setLabel, setIconId } = useContext(AppContext);

  const handleClick = () => {
    setLabel('Clicked Star Button');
    setIconId('icon-star');
  };

  return (
    <div>
      <Button label='Change Label' iconId="icon-star"  onClick={handleClick} />
    </div>
  );
};

export default Child;