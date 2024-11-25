export interface GithubUser {
  login: string; // The username of the user
  id: number; // Unique ID of the user
  node_id: string; // Unique node ID provided by GitHub
  avatar_url: string; // URL of the user's avatar
  gravatar_id: string | null; // Gravatar ID (can be null)
  url: string; // API URL of the user
  html_url: string; // Profile URL of the user on GitHub
  followers_url: string; // API URL for the user's followers
  following_url: string; // API URL for the user's followings
  gists_url: string; // API URL for the user's gists
  starred_url: string; // API URL for the user's starred repositories
  subscriptions_url: string; // API URL for the user's subscriptions
  organizations_url: string; // API URL for the user's organizations
  repos_url: string; // API URL for the user's repositories
  events_url: string; // API URL for the user's events
  received_events_url: string; // API URL for the user's received events
  type: string; // The type of user (e.g., "User" or "Organization")
  site_admin: boolean; // Indicates if the user is a site admin
  name: string | null; // Full name of the user (can be null)
  company: string | null; // Company name (can be null)
  blog: string; // Blog URL (can be an empty string)
  location: string | null; // Location of the user (can be null)
  email: string | null; // Email address (can be null)
  hireable: boolean | null; // Indicates if the user is available for hire (can be null)
  bio: string | null; // User's bio (can be null)
  twitter_username: string | null; // User's Twitter username (can be null)
  public_repos: number; // Number of public repositories
  public_gists: number; // Number of public gists
  followers: number; // Number of followers
  following: number; // Number of people the user is following
  created_at: string; // Account creation date (ISO 8601 format)
  updated_at: string; // Last profile update date (ISO 8601 format)
}
