// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewsSection from '../components/ReviewsSection';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Component {...pageProps} />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
