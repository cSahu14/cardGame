import styles from "../styles/Header.module.css"
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [open, setOpen] = useState(false)
  const [userDetails, setUserDetails] = useState(localStorage.getItem("userDetails"))


  function handleLogin () {
      setOpen(true);
  }

  function handleLogout() {
      setIsLogin(false)
      localStorage.removeItem("userDetails")
  }


  return (
    <header className={styles.headerDiv}>
      {(open || isLogin) && <CustomizedDialogs open={open} setOpen={setOpen} setIsLogin={setIsLogin}/>}
        <div className={styles.headerContainer}>
            <span className={styles.logo}>CARD GAME</span>
            <div className={styles.headerItems}>
                <span className={styles.balance}>$9.99</span>
                
                <span className={styles.avatar}>
                    <FontAwesomeIcon icon={faUserTie} />
                </span>
                {
                  !isLogin ?
                  <button className={styles.authBtn} onClick={handleLogin}>
                    Login
                  </button> :
                  <button className={styles.authBtn} onClick={handleLogout}>
                    Logout
                  </button>
                }
            </div>
        </div>
    </header>
  )
}

export default Header

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


 function CustomizedDialogs({ open, setOpen, setIsLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleClose = () => {
    setOpen(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = () => {
    if(email && password){
      localStorage.setItem("userDetails" , [email, password])
      setIsLogin(true)
      setOpen(false)
    }
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
          <div className={styles.loginDiv}>
            <input type="text" placeholder="Enter Email" onChange={handleEmail}/>
            <input type="password" placeholder="Enter Password" onChange={handlePassword}/>
            <button onClick={handleSubmit}>Login</button>
          </div>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
  );
}
