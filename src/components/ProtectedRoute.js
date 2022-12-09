import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

// ProtectedRoute is intended to be used as a parent route element,
// whose child elements are protected by the logic residing in this component.
//  we use userInfo’s value to detect if a user is logged in.
// If userInfo is absent, an unauthorized template is returned.
// Otherwise, we use React Router’s Outlet component to render the child routes.

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user)

  // show unauthorized screen if no user is found in redux store
  if (!userInfo) {
    return (
      <div className='unauthorized'>
        <h1>Unauthorized :(</h1>
        <span>
          <NavLink to='/login'>Login</NavLink> to gain access
        </span>
      </div>
    )
  }

  // returns child route elements
  return <Outlet />
}

export default ProtectedRoute;