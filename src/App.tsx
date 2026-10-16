import { LanguageProvider, useLanguage } from './i18n/LanguageProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { FlutterWork } from './sections/FlutterWork';
import { VideoWork } from './sections/VideoWork';
import { Skills } from './sections/Skills';
import { Tools } from './sections/Tools';
import { Contact } from './sections/Contact';

function Page() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.skip}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <FlutterWork />
        <VideoWork />
        <Skills />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
