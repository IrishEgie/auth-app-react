import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Footer from "../components/layout/Footer";
import FeatureCards from "../components/layout/FeatureCards";

export const Main = ({ onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Header Navigation Bar */}
      <Header onLogout={onLogout} /> {/* 👈 use it here */}
      {/* Main Content Area */}
      <div
        className="d-flex align-items-center justify-content-center text-white flex-grow-1"
        style={{
          minHeight: "90vh",
          padding: "2rem",
          backgroundImage: `url('https://images.unsplash.com/photo-1614963326505-843868e1d83a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1614963326505-843868e1d83a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textShadow: "0 0 8px rgba(0,0,0,0.7)",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Your Dashboard</h1>
          <p className="lead">
            You've successfully logged in to your account. Explore the features
            using the navigation above.
          </p>
        </div>
      </div>
      <div className="w-100 my-5 py-3 bg-light"></div>
      <Hero
        title="Quick Actions"
        subtitle="Access your profile, adjust settings, or view notifications in one click."
        buttonText="View Profile"
        onButtonClick={() => alert("Feature coming soon!")}
        imageSrc="/illustration.jpg" // or whatever image is in your public folder
      />
      <div className="w-100 my-5 py-3 bg-light"></div>
      <FeatureCards
        img1="https://images.unsplash.com/photo-1746022791473-aac2a0500d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D"
        img2="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww"
        img3="https://images.unsplash.com/photo-1618329027137-a520b57c6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      />
      <Footer />
    </div>
  );
};
