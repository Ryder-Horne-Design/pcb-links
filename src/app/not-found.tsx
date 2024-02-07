import LinkButton from "~/components/link-button";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col flex-wrap justify-center items-center">
      <header className="text-center mb-4">
        <h1 className="text-9xl">404</h1>
        <h2 className="text-4xl">Page not found</h2>
      </header>
      <LinkButton href="/">Back to Home Page</LinkButton>
    </main>
  );
};