import { RotatingLines } from 'react-loader-spinner';
import './Loader.css'

export const Loader = () => {
  return (
    <div className="loader-container">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="32"
        visible={true}
      />
    </div>
  );
};