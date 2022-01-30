import classes from './ProfileForm.module.css';
import { useRef,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const idToken = authCtx.token;
  console.log("idTOken = ",idToken);
  console.log("AuthContext = ",authCtx);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAn8viR0Fmn2R64Rz0RJSlcBbmUtl2ME8c',{
      method:'POST',
      body:JSON.stringify({
        password: enteredNewPassword,
        idToken: idToken,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type':'application/json'
      }
    }).then(res => {
      if(!res.ok) {
        return res.json().then(data => {
          throw new Error(data.error.message)
        })
      }
      else {
        return res.json();
      }
    })
    .then(res => {
      console.log(res);
      alert("Successfully changed password");
      history.replace("/");
    })
    .catch(error => {
      alert(error)
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
