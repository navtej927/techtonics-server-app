"use client";

export const Header = () => {
  const CreateError = () => {
    throw new Error("This is an error");
  };

  return (
    <header className="flex justify-between pt-4 pb-4">
      <h1>Todo Application</h1>
      <nav>
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button onClick={CreateError}>error</button>
      </nav>
    </header>
  );
};
