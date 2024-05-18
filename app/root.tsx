import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import resetStyles from "~/styles/reset.css?url";
import themeStyles from "~/styles/theme.css?url";
import typographyStyles from "~/styles/typography.css?url";
import layoutStyles from "~/styles/layout.css?url";
import { LinkDescriptor } from "@remix-run/node";
import HeaderNavigation from "./components/HeaderNavigation";

export function links(): Array<LinkDescriptor> {
  return [
    { rel: "stylesheet", href: resetStyles },
    { rel: "stylesheet", href: themeStyles },
    { rel: "stylesheet", href: typographyStyles },
    { rel: "stylesheet", href: layoutStyles },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HeaderNavigation />
        <main>
          <section>{children}</section>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
