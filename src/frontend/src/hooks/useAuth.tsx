import { useInternetIdentity } from "@caffeineai/core-infrastructure";

export function useAuth() {
  const { identity, login, clear, loginStatus, isInitializing, isLoggingIn } =
    useInternetIdentity();

  const isAuthenticated = !!identity;

  return {
    identity,
    isAuthenticated,
    login,
    logout: clear,
    loginStatus,
    isInitializing,
    isLoggingIn,
  };
}
