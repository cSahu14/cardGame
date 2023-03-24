import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Club from "../icons/Club.svg";
import Diamond from "../icons/Diamond.svg";
import Spade from "../icons/Spade.svg";
import Heart from "../icons/Heart.svg";
import styles from "../styles/Content.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


export default function CustomizedDialogs({ open, setOpen }) {
  const [randomItems, setRandomItems] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [addBalance, setAddBalance] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const cards = [
    {
      id: 1,
      name: "club",
    },
    {
      id: 2,
      name: "diamond",
    },
    {
      id: 3,
      name: "heart",
    },
    {
      id: 4,
      name: "spade",
    },
  ];

  useEffect(() => {
    if(gameStart){
      const getRandomItem = () => {
        setAddBalance(addBalance - 2);
        for (let i = 0; i < 3; i++) {
          setRandomItems((prev) => 
             [...prev, cards[Math.floor(Math.random() * 4)]]
          );
        }
        
        
      } 
      getRandomItem()
     
    }
  }, [gameStart])

  useEffect(() => {
    localStorage.setItem("items",  randomItems);
    if(randomItems){
      randomItemCheck(randomItems)
    }
  }, [randomItems])
  


  function randomItemCheck(randomItems) {
    console.log(randomItems)
    if(randomItems){
      if (randomItems[0]?.id === 4 && randomItems[1]?.id === 4 && randomItems[2]?.id === 4) {
        console.log("5")
        setAddBalance((prev) => prev + 5);
      } else if ((randomItems[0]?.id === randomItems[1]?.id) === randomItems[2]?.id) {
        console.log("2")
        setAddBalance((prev) => prev + 2);
      } else if (
        randomItems[0]?.id === randomItems[1]?.id ||
        randomItems[1]?.id === randomItems[2]?.id ||
        randomItems[2]?.id === randomItems[0]?.id
      ) {
        console.log("0.5")
        setAddBalance((prev) => prev + 0.5);
      }else {
        console.log("not react")
      }
    }
    console.log("addBalance2", addBalance)
  }

  function handleGameStart() {
    setGameStart(true);
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent>
          <div className={styles.cardIcons}>
            {!gameStart
              ? cards.map((card) => (
                  <div key={card.id}>
                    {card.name === "club" && (
                      <img src={Club} alt="club" className={styles.cards} />
                    )}
                    {card.name === "spade" && (
                      <img src={Spade} alt="spade" className={styles.cards} />
                    )}
                    {card.name === "diamond" && (
                      <img
                        src={Diamond}
                        alt="diamond"
                        className={styles.cards}
                      />
                    )}
                    {card.name === "heart" && (
                      <img src={Heart} alt="heart" className={styles.cards} />
                    )}
                  </div>
                ))
              : randomItems.map((item) => (
                  <div>
                    {item.name === "club" && (
                      <img src={Club} alt="club" className={styles.cards} />
                    )}
                    {item.name === "spade" && (
                      <img src={Spade} alt="spade" className={styles.cards} />
                    )}
                    {item.name === "diamond" && (
                      <img
                        src={Diamond}
                        alt="diamond"
                        className={styles.cards}
                      />
                    )}
                    {item.name === "heart" && (
                      <img src={Heart} alt="heart" className={styles.cards} />
                    )}
                  </div>
                ))}
          </div>
        </DialogContent>
        <div className={styles.dialogBtns}>
          {!gameStart && (
            <DialogActions>
              <button onClick={handleGameStart}>Start</button>
            </DialogActions>
          )}
          <DialogActions>
            <button onClick={handleClose}>Close</button>
          </DialogActions>
        </div>
      </BootstrapDialog>
    </div>
  );
}
