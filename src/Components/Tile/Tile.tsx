import React, { ReactElement } from 'react';
import { Card, Grid } from '@mui/material';
import './Tile.css';

interface TileProps {
  children: ReactElement
}

function Tile(props: TileProps) {
  const { children } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card className="Tile">
        {children}
      </Card>
    </Grid>
  );
}

export default Tile;
