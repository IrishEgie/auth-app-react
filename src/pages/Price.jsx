// src/pages/Price.jsx
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const pricingData = {
  title: "Simple, Transparent Pricing",
  subtitle: "Choose the plan that fits your needs. No hidden fees, cancel anytime.",
  plans: [
    {
      name: "Starter",
      price: "$0",
      description: "Great for individuals getting started with budgeting.",
      features: ["Track income & expenses", "Monthly reports", "Basic support", "Access on all devices"],
      buttonClass: "btn-outline-primary",
      buttonText: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$9",
      description: "Perfect for families and small teams.",
      features: ["Everything in Starter", "Collaborative budgeting", "Advanced analytics", "Priority support"],
      buttonClass: "btn-primary",
      buttonText: "Try Pro",
      highlight: false,
    },
    {
      name: "Enterprise",
      price: "$29",
      description: "Built for organizations with advanced needs.",
      features: ["All Pro features", "Custom integrations", "Team management", "Dedicated success manager"],
      buttonClass: "btn-primary",
      buttonText: "Contact Sales",
      highlight: true,
    },
  ],
  compareTitle: "Compare Our Plans",
  tableFeatures: [
    { name: "Track expenses", included: [true, true, true] },
    { name: "Generate reports", included: [true, true, true] },
    { name: "Multi-user access", included: [false, true, true] },
    { name: "Advanced analytics", included: [false, true, true] },
    { name: "Custom integrations", included: [false, false, true] },
    { name: "Dedicated manager", included: [false, false, true] },
  ],
};

const Pricing = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="container py-5 flex-grow-1">
        <header>
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold">{pricingData.title}</h1>
            <p className="fs-5 text-muted">{pricingData.subtitle}</p>
          </div>
        </header>

        <main>
          <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
            {pricingData.plans.map((plan, i) => (
              <div className="col" key={i}>
                <div className={`card h-100 shadow-sm ${plan.highlight ? "border-primary" : ""}`}>
                  <div
                    className={`card-header text-center fw-bold fs-5 ${
                      plan.highlight ? "bg-primary text-white" : "bg-light"
                    }`}
                  >
                    {plan.name}
                  </div>
                  <div className="card-body text-center">
                    <h2 className="card-title pricing-card-title">
                      {plan.price}
                      <small className="text-muted">/mo</small>
                    </h2>
                    <p className="text-muted">{plan.description}</p>
                    <ul className="list-unstyled mt-3 mb-4 text-start">
                      {plan.features.map((f, j) => (
                        <li key={j}>✓ {f}</li>
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

          <h2 className="text-center mb-4">{pricingData.compareTitle}</h2>

          <div className="table-responsive">
            <table className="table text-center table-bordered">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "34%" }}></th>
                  {pricingData.plans.map((plan, i) => (
                    <th key={i}>{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingData.tableFeatures.map((feature, i) => (
                  <tr key={i}>
                    <th className="text-start">{feature.name}</th>
                    {feature.included.map((included, j) => (
                      <td key={j}>
                        {included ? (
                          <span className="text-success">✓</span>
                        ) : (
                          <span className="text-muted">–</span>
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
