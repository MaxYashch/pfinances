import { Route, Routes } from "react-router-dom";
import { Account, Dashboard, Income, Outcome } from "../../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/income' element={<Income />}></Route>
      <Route path='/outcome' element={<Outcome />}></Route>
      <Route path='/account' element={<Account />}></Route>
    </Routes>
  )
};
