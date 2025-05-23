import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const pricingData = {
  title: "Customize this title",
  subtitle: "Replace this subtitle with a brief description of your pricing offer.",
  plans: [
    {
      name: "Plan Name (e.g., Free)",
      price: "$0",
      description: "Short description of what this plan offers.",
      features: ["Feature one", "Feature two", "Feature three", "Feature four"],
      buttonClass: "btn-outline-primary",
      buttonText: "Customize button text",
      highlight: false,
    },
    {
      name: "Plan Name (e.g., Pro)",
      price: "$XX",
      description: "Brief explanation of this plan’s value.",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"],
      buttonClass: "btn-primary",
      buttonText: "Customize button text",
      highlight: false,
    },
    {
      name: "Plan Name (e.g., Enterprise)",
      price: "$YY",
      description: "Ideal for enterprise customers. Replace with real benefit.",
      features: ["Feature I", "Feature II", "Feature III", "Feature IV"],
      buttonClass: "btn-primary",
      buttonText: "Customize button text",
      highlight: true,
    },
  ],
  compareTitle: "Compare plans (customize this)",
  tableFeatures: [
    { name: "Feature 1 (rename this)", included: [true, true, true] },
    { name: "Feature 2", included: [false, true, true] },
    { name: "Feature 3", included: [true, true, true] },
    { name: "Feature 4", included: [false, true, true] },
    { name: "Feature 5", included: [false, true, true] },
    { name: "Feature 6", included: [false, false, true] },
  ],
};

const Pricing = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container py-3 flex-grow-1">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis">{pricingData.title}</h1>
            <p className="fs-5 text-body-secondary">{pricingData.subtitle}</p>
          </div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {pricingData.plans.map((plan, i) => (
              <div className="col" key={i}>
                <div className={`card mb-4 rounded-3 shadow-sm ${plan.highlight ? "border-primary" : ""}`}>
                  <div
                    className={`card-header py-3 ${
                      plan.highlight ? "text-bg-primary border-primary" : ""
                    }`}
                  >
                    <h4 className="my-0 fw-normal">{plan.name}</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {plan.price}
                      <small className="text-body-secondary fw-light">/mo</small>
                    </h1>
                    <p className="text-muted">{plan.description}</p>
                    <ul className="list-unstyled mt-3 mb-4">
                      {plan.features.map((f, j) => (
                        <li key={j}>{f}</li>
                      ))}
                    </ul>
                    <button type="button" className={`w-100 btn btn-lg ${plan.buttonClass}`}>
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="display-6 text-center mb-4">{pricingData.compareTitle}</h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}></th>
                  {pricingData.plans.map((plan, i) => (
                    <th key={i} style={{ width: "22%" }}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData.tableFeatures.map((feature, i) => (
                  <tr key={i}>
                    <th scope="row" className="text-start">
                      {feature.name}
                    </th>
                    {feature.included.map((included, j) => (
                      <td key={j}>
                        {included && (
                          <svg
                            className="bi"
                            width="24"
                            height="24"
                            role="img"
                            aria-label="Included"
                          >
                            <use xlinkHref="#check" />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
