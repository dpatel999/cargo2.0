 import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm(props) {

  const handleChangeFirstName = event => {
    props.setFirstName(event.target.value);
  };

  const handleChangeLastName = event => {
    props.setLastName(event.target.value);
  };

  const handleChangeAddress = event => {
    props.setAddress(event.target.value);
  };

  const handleChangeCity = event => {
    props.setCity(event.target.value);
  }; 

  const handleChangeZip = event => {
    props.setZip(event.target.value);
  }; 

  const handleChangePhoneNumber = event => {
    props.setPhonenumber(event.target.value)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value={props.firstName}
            onChange={handleChangeFirstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={props.lastName}
            onChange={handleChangeLastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            value={props.address}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            value={props.city}
            onChange={handleChangeCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            value={props.zip}
            onChange={handleChangeZip}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phonenumber"
            name="phonenumber"
            label="Phone Number"
            fullWidth
            autoComplete="phonenumber"
            value={props.phonenumber}
            onChange={handleChangePhoneNumber}
          />
        </Grid>
        {/*<Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
         <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}