import './App.css';
import { useSelector } from 'react-redux';
import Login from "./components/Authentication/Login";
import Alert from '@mui/material/Alert';
import ApplicationBar from './components/Shared/ApplicationBar';
import PostForm from "./components/Post/PostForm";
import PostList from "./components/Post/PostList";

export default function App() {
  const state = useSelector(state => state);
  console.log(state);
  return (
    <>
      {state.errorAlertVisible ? <Alert severity="error">{state.errorAlertText}</Alert> : <></>}
      {state.infoAlertVisible ? <Alert severity="info">{state.infoAlertText}</Alert> : <></>}
      {
        state.logged
          ?
          <div style={{ textAlign: "center" }}>
            <ApplicationBar />
            <PostForm />
            <PostList />
          </div>
          :
          <Login />
      }
    </>
  );
};