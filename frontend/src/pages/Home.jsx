import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Mission from '../components/Mission';
import AboutUs from '../components/AboutUs';
import Advantages from '../components/Adventages';
import Footer from '../components/Footer';

export default function Home() {
    return (
      <div className='w-full min-h-screen'>
        {/* Навигация */}
        <Header />
        <Banner />
        <Mission />
        <Services />
        <AboutUs />
        <Advantages />
        <Footer />
      </div>
    );
}