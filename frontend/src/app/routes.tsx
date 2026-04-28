import { createBrowserRouter } from "react-router";

// Marketing pages
import Landing from "./pages/marketing/Landing";
import About from "./pages/marketing/About";
import HowItWorks from "./pages/marketing/HowItWorks";

// Auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Onboarding
import Onboarding from "./pages/onboarding/Onboarding";

// App pages
import Dashboard from "./pages/app/Dashboard";
import Explore from "./pages/app/Explore";
import UserProfile from "./pages/app/UserProfile";
import Booking from "./pages/app/Booking";
import Chat from "./pages/app/Chat";
import VideoSession from "./pages/app/VideoSession";
import Notifications from "./pages/app/Notifications";
import Settings from "./pages/app/Settings";

// Layout
import AppLayout from "./layouts/AppLayout";
import MarketingLayout from "./layouts/MarketingLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MarketingLayout,
    children: [
      { index: true, Component: Landing },
      { path: "about", Component: About },
      { path: "how-it-works", Component: HowItWorks },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/onboarding",
    Component: Onboarding,
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "explore", Component: Explore },
      { path: "profile/:userId", Component: UserProfile },
      { path: "book/:userId", Component: Booking },
      { path: "chat", Component: Chat },
      { path: "chat/:chatId", Component: Chat },
      { path: "session/:sessionId", Component: VideoSession },
      { path: "notifications", Component: Notifications },
      { path: "settings", Component: Settings },
    ],
  },
]);
