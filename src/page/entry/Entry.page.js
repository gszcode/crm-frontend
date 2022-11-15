import './entry.page.css'
import { useState } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset'

export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')

  const handleOnChange = (e) => {
    const { name, value } = e.target

    name === 'email' ? setEmail(value) : setPassword(value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return alert('Fill up all the form!')
    }

    //TODO call api to submit the form
    console.log({ email, password })
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      return alert('Please enter the email!')
    }

    //TODO call api to submit the form
    console.log({ email })
  }

  const formSwitcher = (formType) => {
    setFormLoad(formType)
  }

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box bg-light p-5 rounded">
        {formLoad === 'login' ? (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
          />
        ) : (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  )
}
