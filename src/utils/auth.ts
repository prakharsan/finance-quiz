export const login = (username: string) => {
  document.cookie = `username=${username}; path=/; max-age=86400`; // 1 day
};

export const logout = () => {
  document.cookie = `username=; path=/; max-age=0`;
};

export const getLoggedInUser = (): string | null => {
  const match = document.cookie.match(/(^|;) ?username=([^;]*)(;|$)/);
  return match ? decodeURIComponent(match[2]) : null;
};
