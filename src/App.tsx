import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Impact />
      <Contact />
    </Layout>
  );
}

export default App;
