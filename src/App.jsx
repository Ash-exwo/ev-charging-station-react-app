import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddBooking from "./components/AddBooking"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-booking" element={<AddBooking/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
