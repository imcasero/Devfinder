import { StoredUser } from "../interfaces/StoredUser";

// The key used to store recent GitHub users in localStorage.
const LOCAL_STORAGE_KEY = "recentGithubUsers";

/**
 * Retrieves the list of recent users stored in localStorage.
 * If no users are stored, returns an empty array.
 *
 * @returns {StoredUser[]} - An array of the most recent users.
 */
export const getRecentUsers = (): StoredUser[] => {
  const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
};

/**
 * Adds a new user to the list of recent users stored in localStorage.
 * If the user already exists, it will be moved to the top of the list.
 * If there are more than 4 users, the oldest one will be removed.
 *
 * @param {StoredUser} user - The user object to be added to the recent users list.
 */
export const addUserToStorage = (user: StoredUser) => {
  const currentUsers = getRecentUsers();

  // Check if the user already exists in the list.
  const existingUserIndex = currentUsers.findIndex(
    (u) => u.login === user.login
  );

  if (existingUserIndex !== -1) {
    // If the user exists, move it to the beginning (consider it the most recent search).
    currentUsers.splice(existingUserIndex, 1);
  }

  // Add the new user at the beginning of the array.
  currentUsers.unshift(user);

  // Limit the array length to the 4 most recent searches.
  if (currentUsers.length > 10) {
    currentUsers.pop(); // Remove the oldest entry.
  }

  // Store the updated list back in localStorage.
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUsers));
};

/**
 * Creates a user object to be stored in localStorage.
 * This function generates a full profile URL based on the current URL.
 *
 * @param {string} avatar_url - The URL of the user's avatar image.
 * @param {string} login - The GitHub username of the user.
 * @param {string} name - The full name of the user.
 *
 * @returns {StoredUser} - A user object containing avatar_url, login, name, and html_url.
 */
export const createStoredUser = (
  avatar_url: string,
  login: string,
  name: string
): StoredUser => {
  return {
    avatar_url,
    login,
    name,
  };
};

/**
 * Retrieves the stored recent users from localStorage.
 * This is a shorthand function for getting the recent users.
 *
 * @returns {StoredUser[]} - An array of the most recent users stored in localStorage.
 */
export const getStoredUsers = (): StoredUser[] => {
  // Retrieve the stored users from localStorage using the defined key.
  const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);

  // Parse the stored data from JSON and return it, or return an empty array if no users are found.
  return storedUsers ? JSON.parse(storedUsers) : [];
};
