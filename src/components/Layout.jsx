import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--text-primary)' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
