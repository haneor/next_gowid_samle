import React, {FC} from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export interface CircleLoadingProps {
  open: boolean;
  size?: number;
}

const CircleLoading: FC<CircleLoadingProps> = ({
  open = false,
  size = 100
}) => {

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color='primary' size={size} />
      </Backdrop>
    </div>
  );
};

export default CircleLoading;
