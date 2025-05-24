import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Featurette from "../components/layout/Featurette";

export const About = ({ onLogout }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header onLogout={onLogout} />
      {/* Mission Section */}
      <div className="w-100 py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-3">About Us</h2>
          <p className="lead px-md-5">
            RBG Editor began as a weekend experiment between a small group of
            university students who were tired of clunky, overcomplicated video
            editing tools. What started as a simple timeline prototype quickly
            grew into a sleek, intuitive platform built with students and
            educators in mind. With a clean interface, smart editing workflows,
            and just the right features, RBG Editor shows what’s possible when
            thoughtful design meets practical needs — and what can be achieved
            using React, Bootstrap, and a little creative drive.
          </p>
        </div>
      </div>
      <>
        {/* Featurette: The Beginning */}
        <Featurette
          heading="How RBG Editor Began"
          subheading="An idea sparked in the middle of a lecture."
          description="RBG Editor started as a side project between a few students who were frustrated by the complexity of mainstream video editing tools. What if editing could be fast, focused, and friendly — built specifically for students and educators? That question became the foundation of this platform."
          imageSrc="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        {/* Featurette: Our Purpose */}
        <Featurette
          heading="Why We Built It"
          subheading="Tools should help, not hinder."
          description="Most editing software comes packed with features that overwhelm rather than assist. RBG Editor is designed to do the opposite — offering just the right tools for creating, trimming, and sharing video content, without the learning curve. It's clean, responsive, and built with the classroom in mind."
          imageSrc="https://images.unsplash.com/photo-1528109901743-12b16e05eedf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8"
          reverse={true}
        />

        {/* Featurette: What's Next */}
        <Featurette
          heading="The Vision Going Forward"
          subheading="Simple tools for serious creativity."
          description="Though RBG Editor began as a student project, it represents a bigger idea — that creativity and education deserve better tools. Whether you're preparing a class demo or editing a presentation, our hope is that RBG Editor makes your work easier, smoother, and more enjoyable."
          imageSrc="https://images.unsplash.com/photo-1502209877429-d7c6df9eb3f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
      </>

      {/* Footer */}
      <Footer />
    </div>
  );
};
