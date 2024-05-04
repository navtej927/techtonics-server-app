import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <article>
          <h2>Article Title</h2>
          <p>This is the content of the article.</p>
        </article>

        <section>
          <h2>Section Title</h2>
          <p>This is the content of the section.</p>
        </section>

        <aside>
          <h3>Sidebar Title</h3>
          <p>This is the content of the sidebar.</p>
        </aside>
      </main>

      <footer>
        <p>&copy; 2023 Layout Example. All rights reserved.</p>
      </footer>
    </>
  );
}
