import {React,useState} from "react";
import './authPage.css';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Header from "../../components/Header/Header";
export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'NOT A MEMBER? JOIN HERE' : 'LOG IN'}</h3>
      </div>
      <div className="form">

              {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}

      </div>
    </main>
  );
}

