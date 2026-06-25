// KON-1: updated auth logic
function login(username, password) {
  if (!username || !password) {
    return "Error: credentials required";
  }
  return "Login successful";
}
