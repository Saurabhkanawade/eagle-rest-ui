import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MuiCard from "@mui/material/Card";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

function Login() {
  const [emailError, setEmailError] = useState();
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [passwordError, setPasswordError] = useState();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState();
  const [open, setOpen] = useState();

  const handleSubmit = (event) => {};

  const validateInputs = () => {};
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card variant="outlined">
          <Typography sx={{ width: "100%" }} component="h1" variant="h4">
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              marginTop: "8px",
            }}
            noValidate
          >
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              label="Email Address"
              placeholder="your@email.com"
              variant="outlined"
              autoComplete="email"
              margin="normal"
              autoFocus
              required
              fullWidth
              color={emailError ? "error" : "primary"}
            />
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              placeholder="••••••••••••"
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              autoComplete="password"
              margin="normal"
              required
              fullWidth
              color={passwordError ? "error" : "primary"}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
              onClick={validateInputs}
            >
              Login
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button>New User ?</Button>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}

export default Login;
