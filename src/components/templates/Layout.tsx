import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <main className="bg-[#F8F9FA] dark:bg-[#141517] min-h-screen dark:text-white">
      <Navbar />
      <section className="max-w-4xl m-auto px-5">{children}</section>
      <Footer />
    </main>
  );
}
