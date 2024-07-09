// src/components/Redux.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, setPage } from '../actions/productActions';
import { Grid, Typography, Button } from '@material-ui/core';

const Redux = () => {
  const dispatch = useDispatch();
  const { products, loading, error, currentPage } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchProducts(page));
  };

  if (loading) return <Typography variant="h6">Loading...</Typography>;
  if (error) return <Typography variant="h6">{error}</Typography>;

  return (
    <div>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <div>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body1">{product.description}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>
      <Button onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
    </div>
  );
};

export default Redux;
