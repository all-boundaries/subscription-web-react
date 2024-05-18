import Logo from "./Logo";

export default function HeaderNavigation() {
  return (
    <header>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <h1>Coffee Subscription</h1>
        </li>
      </ul>
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
}
