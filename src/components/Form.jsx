import * as React from "react";
import { useState } from "react";
import HomePage from "../Pages/HomePage";
// import FindWork from '../Pages/FindWork';
// import firebase from '../firebase';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from '@mui/material/Checkbox';
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Phone } from "@mui/icons-material";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useFirebase } from "../context/Firebase";
import { Navigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Labour Link
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide({ isLogin, setIsLogin }) {
  const [phone, setPhone] = useState("");
  const firebase = useFirebase();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      showToast("Invalid Phone Number !!!");
      return;
    }
    try {
      console.log("Login process initiated....");
      await firebase.loginWithPhoneNumber(phone);
    } catch (err) {
      console.log("Error during login ", err);
      showToast(err.message);
    }
  };
  const [toastIsActive, setToastIsActive] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (message) => {
    setToastMessage(message);
    setToastIsActive(true);
    setTimeout(() => {
      setToastIsActive(false);
      setToastMessage(null);
    }, 3000);
  };
  if (firebase.user) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      {isLogin ? (
        <HomePage isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            {/* Add the caption container on the left */}
            <Grid item xs={12} sm={4} md={7}>
              <div style={{ padding: "20px" }}>
                <Typography variant="h3">
                  Discover a world of opportunities for skilled workers and
                  professionals on our labor website.
                </Typography>

                <img
                  src="\assets\stable-diffusion-xl.png"
                  alt="Caption Image"
                  style={{ width: "60%", marginTop: "20px" }}
                />
              </div>
            </Grid>
            <div className="toast" hidden={!toastIsActive}>
              <span>{toastMessage}</span>
            </div>
            <CssBaseline />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign In
                </Typography>

                <Box
                  component="form"
                  noValidate
                  style={{ width: "50%" }}
                  onSubmit={(e) => handleSubmit(e)}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="phone number"
                    name="phone"
                    type="number"
                    autoFocus
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <div style={{ width: "100%", marginLeft: "auto" }}>
                    <button type="submit" className="btn">
                      Log In
                    </button>
                    <div id="recaptcha-verifier"></div>
                  </div>
                  <br />
                  <Grid container>
                    <Grid item>
                      <Link href="/userprofilesetup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      )}
    </>
  );
}
