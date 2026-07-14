import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddBooking from "./components/AddBooking"
import ViewBooking from "./components/ViewBooking"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-booking" element={<AddBooking/>}/>
      <Route path="/view-booking" element={<ViewBooking/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
