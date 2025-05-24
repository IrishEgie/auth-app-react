import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import FeatureCards from "../components/layout/FeatureCards";

export const Main = ({ onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onLogout={onLogout} />

      {/* Hero-like About Section */}
      <div
        className="d-flex align-items-center justify-content-center text-white flex-grow-1"
        style={{
          minHeight: "90vh",
          padding: "2rem",
          backgroundImage: `url('https://images.unsplash.com/photo-1614963326505-843868e1d83a?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textShadow: "0 0 8px rgba(0,0,0,0.7)",
        }}
      >
        <div className="container text-center">
          <img src="/logo.png" alt="Logo" className="rounded-circle w-25" />
          <h1 className="display-4 fw-bold">Welcom to RBG Editor</h1>
          <p className="lead">
            RBG Editor is a hub for, intuitive video editing platform built with creators in mind. Whether you're trimming lectures or building content for the web, we make it seamless and fast.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-100 py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-3">Our Story</h2>
          <p className="lead px-md-5">
            RBG Editor started as a weekend hackathon project between a group of university friends frustrated by clunky editing tools.
            What began as a simple timeline editor quickly evolved into a fully-featured platform with a clean interface, smart workflows, and just the right amount of power.
            Today, ClipForge stands as a sample project showing what’s possible with React, Bootstrap, and a little imagination.
          </p>
        </div>
      </div>

      {/* Features Preview */}
      <Hero
        title="Smart Tools for Better Editing"
        subtitle="Our platform includes timeline trimming, clip splitting, and media previews to help you move faster and smarter."
        buttonText="See It In Action"
        onButtonClick={() => alert("Demo feature not implemented in this sample.")}
        imageSrc="/illustration.jpg"
      />

      {/* Showcase Cards */}
      <div className="w-100 my-5 py-3 bg-light"></div>
      <FeatureCards
        FCtitle="Work"
        img1="https://images.unsplash.com/photo-1746022791473-aac2a0500d80?w=500&auto=format&fit=crop&q=60"
        img2="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60"
        img3="https://images.unsplash.com/photo-1618329027137-a520b57c6606?w=500&auto=format&fit=crop&q=60"
        title1="Fast Cuts"
        title2="Precise Timing"
        title3="Export Anywhere"
        location1="Dashboard"
        location2="Timeline"
        location3="Render Queue"
        duration1="Now"
        duration2="Today"
        duration3="Instant"
      />
      {/* Footer */}
      <Footer />
    </div>
  );
};
