import { GithubUser } from "../interfaces/GithubUser";

/**
 * Fetches GitHub user data by username from the GitHub API.
 * The function performs a GET request to the GitHub API and returns the user data as a `GithubUser` object.
 *
 * @param {string} username - The GitHub username of the user to fetch.
 * @returns {Promise<GithubUser>} - A promise that resolves to the user data in the form of a `GithubUser` object.
 * @throws {Error} - Throws an error if the API request fails or if the response is not OK.
 */
export const getGithubUserByName = async (
  username: string
): Promise<GithubUser> => {
  const url = `https://api.github.com/users/${username}`; // URL to fetch the GitHub user's data.

  try {
    // Send a GET request to the GitHub API to fetch the user data.
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json", // Ensures the correct API version is used.
      },
    });

    // If the response is not OK (status code outside the range 200-299), throw an error.
    if (!response.ok) {
      const errorBody = await response.json(); // Extract error details from the response body.
      console.log(errorBody); // Log the error response (for debugging purposes).
      throw new Error(`Error ${response.status}: ${errorBody.message}`); // Throw an error with the status and message.
    }

    // If the request is successful, parse the response JSON and return it as a `GithubUser` object.
    const userData = await response.json();
    return userData as GithubUser;
  } catch (error) {
    // In case of any error (e.g., network issue), log it and throw the error to be handled by the caller.
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};
