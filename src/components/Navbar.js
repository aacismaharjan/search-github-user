import React from 'react'
import styled from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  const isUser = isAuthenticated && user

  return (
    <Wrapper>
      <div className='brand-name'>
        <h4>Github Stats Search</h4>
      </div>
      <div className='login-info'>
        {isUser && user.picture && <img src={user.picture} alt={user.name} />}
        {isUser && user.name && (
          <h4>
            Welcome, <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}

        {isUser ? (
          <button
            onClick={() => {
              logout({ returnTo: window.location.origin })
            }}
          >
            logout
          </button>
        ) : (
          <button onClick={loginWithRedirect}>login</button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  .brand-name {
    h4 {
      font-size: 24px;
      font-weight: 500;
    }
  }
  .login-info {
    display: grid;
    grid-template-columns: auto auto 100px;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
  }
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  @media (max-width: 767px) {
    padding: 1em;
    justify-content: center;
    grid-template-columns: auto;
    grid-gap: 20px;

    .login-info {
      display: grid;
      grid-template-columns: auto auto 60px;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    h4 {
      text-align: center;
      font-size: 12px;
      margin-bottom: 0;
      font-weight: 400;
    }
    img {
      width: 35px !important;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }

    button {
      font-size: 14px;
    }
  }
`

export default Navbar
