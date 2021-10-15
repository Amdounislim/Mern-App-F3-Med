import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { useDispatch, useSelector } from "react-redux"
import { getUsers, toggleFalse } from "./JS/actions/actionUser"


function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

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
          <Button variant="primary button" onClick={()=>dispatch(toggleFalse())}>Add User</Button>
        </Link>
      </div>
      <Switch>
        <Route path="/Users_list" render={() => (<div className="contact-list">
          {users.map((el, i) => (<UserCard user={el} key={i} />))}
        </div>)} />
        <Route path="/(Add_user|Edit_user)/" render={() => <AddUser />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
