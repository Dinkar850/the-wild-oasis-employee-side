import supabase from "./supabase";
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
}

// we need to fetch the user again and again whenever something happens or the user opens the app, to check if he is still authenticated so that the user does not have to login multiple times

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession(); //gets  form local storage
  if (!session.session) return null;

  //if session hasnt expired do below, if it was expired we had returned a null already

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data?.user;
}
