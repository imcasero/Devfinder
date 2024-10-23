export const getGithubUserByName = async (username: string) => {
  const url = `https://api.github.com/users/${username}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  });

  if (!response.ok) {
    const errorBody = await response.json();
    console.log(errorBody);
    throw new Error(`Error ${response.status}: ${errorBody.message}`);
  }

  const userData = await response.json();
  return userData;
};
