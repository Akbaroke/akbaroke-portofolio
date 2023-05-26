import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';
import FormatCapitalize from '../../utils/FormatCapitalize';

export default function Layout({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const format = FormatCapitalize(location.pathname.replace('/', ''));
  const title = format ? format + ' | Muhammad Akbar' : 'Muhammad Akbar | Frontend Developer';

  return (
    <main className="bg-[#F8F9FA] dark:bg-[#141517] min-h-screen dark:text-white">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <section className="max-w-4xl m-auto px-5">{children}</section>
      <Footer />
    </main>
  );
}
