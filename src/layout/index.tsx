import Header from "./header";

function Layout({ children }: { children: any }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-fill">
        <div className="container">{children} </div>
      </main>
    </div>
  );
}
export default Layout;
