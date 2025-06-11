/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the auth user
  const { isLoading, isAuthenticated } = useUser();

  //2. If there is no auth user, redirect to the /login
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login"); //not just isAuthenticated as, if isLoading is still true, isAuthenticated will always be false kyuki the user hasnt arrived yet, it is null while loading is true
  }, [isLoading, navigate, isAuthenticated]);

  //3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    ); //this part is here as hooks cant be after conditional statemenets

  //4. if there is a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

// we need to fetch the user again and again whenever something happens or the user opens the app, to check if he is still authenticated so that the user does not have to login multiple times, and also for authorization
