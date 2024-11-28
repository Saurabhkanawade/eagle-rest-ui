import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import Spinner from "../../Component/Spinner";
import { PASSWORD, USER_NAME, USERNAME } from "../../../Constants/constant";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an initial loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Loader duration: 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  // Show the loader until the app is ready
  if (isLoading) {
    return <Spinner />;
  }

  const handleSubmit = (event) => {
    console.log("data");

    event.preventDefault(); // Prevent form submission
    if (emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    console.log(data);

    // Check if email and password match "test"
    if (email === USERNAME && password === PASSWORD) {
      // Dummy token
      const accessToken = "DUMMYACCESSTOKEN";

      // Save token to localStorage
      localStorage.setItem("accessToken", accessToken);

      console.log("Login successful! Access Token:", accessToken);
      alert("Login successful!");

      // Redirect to dashboard or desired page
      window.location.href = "/dashboard";
    } else {
      alert("Invalid username or password!");
    }
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    console.log("Login successful! Access Token:", email.value, password.value);
    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

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
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ marginTop: "8px" }}
            noValidate
          >
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              name="email" // Add the name attribute
              type="email"
              label="Email Address"
              placeholder="eagle@email.com"
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
              name="password" // Add the name attribute
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
              type="submit"
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
