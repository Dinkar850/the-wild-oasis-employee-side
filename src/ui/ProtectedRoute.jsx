/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  //1. Load the auth user
  const { isLoading, isAuthenticated } = useUser();

  //2. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    ); //this part is here as hooks cant be after conditional statemenets

  // //3. If there is no auth user, redirect to the /login
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  //4. if there is a user, render the app
  return children;
}

export default ProtectedRoute;

// we need to fetch the user again and again whenever something happens or the user opens the app, to check if he is still authenticated so that the user does not have to login multiple times, and also for authorization
