import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Typography, Card, CardContent, Grid } from '@mui/material';

const Input = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submissions, setSubmissions] = useState([]);

  const onSubmit = (data) => {
    setSubmissions([...submissions, data]); // Add new submission to the list
    toast.success('Form submitted successfully!');
    reset(); // Reset form after successful submission
  };
  

  return (
    <div style={{maxWidth: 600, margin: 'auto', marginTop: 20, padding: 20, textAlign: 'center', border: '1px solid #ccc', borderRadius: 8, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h5" gutterBottom>
        Enter Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 20 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              type="text"
              {...register('phone', { required: true })}
              error={!!errors.phone}
              helperText={errors.phone ? 'Phone is required' : ''}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              type="text"
              {...register('name', { required: true })}
              error={!!errors.name}
              helperText={errors.name ? 'Name is required' : ''}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Surname"
              type="text"
              {...register('surname', { required: true })}
              error={!!errors.surname}
              helperText={errors.surname ? 'Surname is required' : ''}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              {...register('email', { required: true })}
              error={!!errors.email}
              helperText={errors.email ? 'Email is required' : ''}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              type="text"
              {...register('image')}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          style={{ marginTop: 10 }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Send
        </Button>
      </form>

      {submissions.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <Typography variant="h5" gutterBottom>
            Result
          </Typography>
          {submissions.map((data, index) => (
            <Card key={index} style={{ marginBottom: 10 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Submission {index + 1}
                </Typography>
                <Typography variant="body1"><strong>Phone:</strong> {data.phone}</Typography>
                <Typography variant="body1"><strong>Name:</strong> {data.name}</Typography>
                <Typography variant="body1"><strong>Surname:</strong> {data.surname}</Typography>
                <Typography variant="body1"><strong>Email:</strong> {data.email}</Typography>
                {data.image && (
                  <div style={{ marginTop: 10 }}>
                    <img src={data.image} alt="Preview" style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
