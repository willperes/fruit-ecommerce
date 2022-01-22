import { useState } from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './styles.scss';

export default function ProductAmount() {
  const [count, setCount] = useState(0);

  return (
    <div className="product-card-amount">
      <Button
        aria-label="reduce"
        onClick={() => {
          setCount(Math.max(count - 1, 0));
        }}
      >
        <RemoveIcon fontSize="small" />
      </Button>
      <p>{count}</p>
      <Button
        aria-label="increase"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <AddIcon fontSize="small" />
      </Button>
    </div>
  )
}