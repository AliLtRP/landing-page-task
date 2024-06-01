import "./App.css";
import Hero from "./components/Hero";
import ShareSection from "./components/ShareSection";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <ShareSection />
    </Layout>
  );
}

export default App;
