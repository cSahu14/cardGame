import { useState } from "react"
import CustomizedDialogs from "./Dialog"

const Content = () => {
  const [open, setOpen] = useState(false)
  const [guestUser, setGuestUser] = useState(false)
  function handleGuest () {
    setGuestUser(true)
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div>
        <button onClick={handleClickOpen}>Start</button>
        <button onClick={handleGuest}>Play as Guest</button>
        {open && <CustomizedDialogs open={open} setOpen={setOpen}/>}
    </div>
  )
}

export default Content