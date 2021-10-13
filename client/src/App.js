import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { useDispatch } from "react-redux"
import { getUsers } from "./JS/actions/actionUser"


function App() {
  const dispatch = useDispatch()

  const getAllUsers = () => {
    dispatch(getUsers())
  }


  useEffect(() => {
    getAllUsers()
  }, [])




  return (
    <BrowserRouter>
      <div>
        <Link to='/Users_list'>
          <Button variant="outline-primary button">Users List</Button>
        </Link>
        <Link to='/Add_user'>
          <Button variant="primary button">Add User</Button>
        </Link>
      </div>
      <Switch>
        <Route path="/Users_list" render={() => <UserCard />} />
        <Route path="/Add_user" render={() => <AddUser />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
