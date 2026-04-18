import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Find Donors" },
  { to: "/register", label: "Register" },
  { to: "/dashboard", label: "Dashboard" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, login, logout, isLoggingIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b-2 border-primary shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="BloodLink home"
          >
            <div className="flex items-center gap-1">
              <div
                className="w-0.5 h-7 bg-primary rounded-full"
                aria-hidden="true"
              />
              <Droplets
                className="h-6 w-6 text-primary transition-smooth group-hover:scale-110"
                aria-hidden="true"
              />
            </div>
            <span className="text-lg font-bold tracking-tight font-display">
              Blood<span className="text-primary">Link</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:bg-primary/10"
                data-ocid={`nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth button */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                data-ocid="nav-logout"
              >
                Log Out
              </Button>
            ) : (
              <Button
                size="sm"
                onClick={login}
                disabled={isLoggingIn}
                data-ocid="nav-login"
              >
                {isLoggingIn ? "Connecting…" : "Login / Register"}
              </Button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="nav-mobile-toggle"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-smooth [&.active]:text-primary [&.active]:bg-primary/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-border">
              {isAuthenticated ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  data-ocid="nav-mobile-logout"
                >
                  Log Out
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    login();
                    setMobileOpen(false);
                  }}
                  disabled={isLoggingIn}
                  data-ocid="nav-mobile-login"
                >
                  {isLoggingIn ? "Connecting…" : "Login / Register"}
                </Button>
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Droplets className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-semibold text-foreground">BloodLink</span>
            <span>— Connecting lives through blood donation</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {year}.{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors duration-200"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
