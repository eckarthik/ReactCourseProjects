import useInput from '../hooks/use-input.js';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: enteredFirstNameChangeHandler,
    inputBlurHandler: enteredFirstNameBlurHandler,
    reset: resetEnteredFirstName
  } = useInput(value => value.trim() !== '' && value.length > 3);

  const {
    value: enteredSecondName,
    isValid: enteredSecondNameIsValid,
    hasError: enteredSecondNameHasError,
    valueChangeHandler: enteredSecondNameChangeHandler,
    inputBlurHandler: enteredSecondNameBlurHandler,
    reset: resetEnteredSecondName
  } = useInput(value => value.trim() !== '' && value.length > 3);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: resetEnteredEmail
  } = useInput(value => value.trim() !== '' && value.length > 3 && value.includes('@'));

  let formIsValid = false;
  if(enteredFirstNameIsValid && enteredSecondNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if(!enteredFirstNameIsValid || !enteredSecondNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredSecondName);
    console.log(enteredEmail);
    resetEnteredFirstName('');
    resetEnteredSecondName('');
    resetEnteredEmail('');
  }

  const firstNameInputClasses = enteredFirstNameHasError ? 'form-control invalid': 'form-control'
  const secondNameInputClasses = enteredSecondNameHasError ? 'form-control invalid': 'form-control'
  const emailInputClasses = enteredEmailHasError ? 'form-control invalid': 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={enteredFirstNameChangeHandler} onBlur={enteredFirstNameBlurHandler} /> 
          {enteredFirstNameHasError && <p className='error-text'>Please enter valid first name</p>}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredSecondName} onChange={enteredSecondNameChangeHandler} onBlur={enteredSecondNameBlurHandler}/>
          {enteredSecondNameHasError && <p className='error-text'>Please enter valid second name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='email' value={enteredEmail} onChange={enteredEmailChangeHandler} onBlur={enteredEmailBlurHandler}/>
        {enteredEmailHasError && <p className='error-text'>Please enter valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
