"use client";

import { useState, useEffect } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import banner from "../public/Images/banner.png";
import logo from "../public/Images/Logo.png";
import Image from "next/image";
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


// FAQ Component (defined before Home)
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="faq-item py-3 border-bottom"
      onClick={() => setOpen(!open)}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="fw-semibold mb-0">{question}</h6>
        {open ? (
          <RemoveIcon className="text-primary" />
        ) : (
          <AddIcon className="text-primary" />
        )}
      </div>

      {open && (
        <p className="text-secondary mt-3 mb-0 faq-answer">{answer}</p>
      )}
    </div>
  );
}


export default function Home() {

  // Dynamic section state
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sectionKey = "drive-payments"; // Laravel section key

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/sections/${sectionKey}`);
        if (!response.ok) throw new Error("Failed to fetch section data");
        const data = await response.json();
        setSection({
          title: data.title,
          cards: JSON.parse(data.cards || "[]"),
        });
      } catch (err) {
        console.error("Error fetching section:", err);
        setError("Failed to load content.");
      } finally {
        setLoading(false);
      }
    };
    fetchSection();
  }, []);


  return (
    <>
    <main >
      {/* Top Contact Bar */}
      <div className="py-2">
        <div className="container text-end text-dark">
          connect with us: <a href="tel:7862590231" className="text-decoration-none text-dark">786-259-0231</a>
        </div>
      </div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Left Logo */}
          <a className="navbar-brand" href="#">
            <Image
              src={logo}
              alt="our logo"
              className="img-fluid"
              priority
            />
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right Menu Items */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Our Services
                  <ArrowOutwardIcon fontSize="small" className="ms-1" />
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Our Specalities
                  <ArrowOutwardIcon fontSize="small" className="ms-1" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us
                  <ArrowOutwardIcon fontSize="small" className="ms-1" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link expert-link" href="#">
                  <button className="expert-btn">
                    Connect with our experts
                    <span className="icon-circle">
                      <ArrowOutwardIcon fontSize="small" />
                    </span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ---------------- */}
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left side */}
            <div className="col-lg-6">
              <h1 className="display-6 fw-bold mb-3 text-primary">
                End-to-End AR Follow Up Services for Maximum Recovery
              </h1>
              <p className="lead mb-4 text-secondary">
                AR follow up in medical billing ensures every claim is tracked, resolved, and paid—boosting your cash flow without delays.
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <CheckCircleIcon className="text-success me-2 mt-1" />
                  <div>
                    <strong>118+ EMR/EHR</strong><br />
                    <span className="text-secondary small">Flexible, system-agnostic integration</span>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <CheckCircleIcon className="text-success me-2 mt-1" />
                  <div>
                    <strong>5M+ Prior Auth</strong><br />
                    <span className="text-secondary small">Fast, accurate approval processing</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <CheckCircleIcon className="text-success me-2 mt-1" />
                  <div>
                    <strong>45+ States</strong><br />
                    <span className="text-secondary small">Extensive PI & WC coverage</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div>
                <button className="btn btn-primary me-3 px-4 py-2">
                  Book Demo
                </button>
                <button className="btn btn-outline-primary px-4 py-2">
                  Explore Our Coding Solutions
                </button>
              </div>
            </div>

            {/* Right side image */}
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="hero-img">
                <Image
                  src={banner}
                  alt="Medical billing team working"
                  className="img-fluid rounded shadow"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------- */}

      {/* ---------------- */}
      {/* Dynamic AR Follow Up Section */}
      <section className="ar-services py-5">
        <div className="container text-center">
          {loading ? (
            <p>Loading content...</p>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            <>
              <h2 className="fw-bold mb-5 text-primary">{section?.title}</h2>
              <div className="row g-4 justify-content-center">
                {section?.cards?.map((card, i) => (
                  <div key={i} className="col-md-4">
                    <div className="service-card p-4 h-100">
                      <h5 className="fw-semibold mb-2">{card.title}</h5>
                      <p className="text-secondary small mb-3">{card.description}</p>
                      <button className="btn btn-outline-primary btn-sm">Explore Solutions</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>


      {/* ---------------- */}
      {/* ---------------- */}
      {/* Metrics Section */}
      <section className="metrics-section py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">

            {/* Column 1 */}
            <div className="col-md-4">
              <div className="metric-box p-4 h-100">
                <h2 className="fw-bold text-primary display-5">63K</h2>
                <p className="text-secondary mb-0">
                  Patient collection rate supported by real-time eligibility and payment tracking.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-md-4">
              <div className="metric-box p-4 h-100">
                <h2 className="fw-bold text-primary display-5">36 Days</h2>
                <p className="text-secondary mb-0">
                  Average collection cycle achieved through payer-driven workflow optimization.
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-md-4">
              <div className="metric-box p-4 h-100">
                <h2 className="fw-bold text-primary display-5">75%</h2>
                <p className="text-secondary mb-0">
                  Credentialing applications processed with automated healthcare billing process integrations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- */}
      {/* ---------------- */}
      {/* Integration Benefits Section */}

      {/* Feature Section */}
      <section className="feature-section py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            {/* Left Title */}
            <div className="col-md-6">
              <h2 className="fw-bold text-primary">
                Simplify AR Follow-Up with Smart Automation
              </h2>
            </div>

            {/* Right Paragraph */}
            <div className="col-md-6">
              <p className="text-secondary">
                Our AI-assisted AR follow-up services streamline claim management, reduce denials,
                and accelerate payment cycles. Leverage automation to ensure no revenue is left behind.
              </p>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-3">
              <div className="feature-card p-4 h-100">
                <ElectricBoltOutlinedIcon className="feature-icon mb-3" />
                <h5 className="fw-semibold mb-2">AI-Powered Tracking</h5>
                <p className="text-secondary small mb-0">
                  Automatically prioritize claims with intelligent sorting and payer-based logic.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3">
              <div className="feature-card p-4 h-100">
                <ElectricBoltOutlinedIcon className="feature-icon mb-3" />
                <h5 className="fw-semibold mb-2">Real-Time Insights</h5>
                <p className="text-secondary small mb-0">
                  Get live dashboards for AR aging, claim status, and denial trends for better forecasting.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3">
              <div className="feature-card p-4 h-100">
                <ElectricBoltOutlinedIcon className="feature-icon mb-3" />
                <h5 className="fw-semibold mb-2">Seamless Integration</h5>
                <p className="text-secondary small mb-0">
                  Compatible with all major EHR, EMR, and practice management systems for faster onboarding.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3">
              <div className="feature-card p-4 h-100">
                <ElectricBoltOutlinedIcon className="feature-icon mb-3" />
                <h5 className="fw-semibold mb-2">Faster Turnaround</h5>
                <p className="text-secondary small mb-0">
                  Reduce claim turnaround times and boost efficiency with automated workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ---------------- */}
      {/* ---------------- */}

      {/* Expertise Section */}
      <section className="expertise-section text-center py-5 bg-light">
        <div className="container">

          {/* Top Icon & Title */}
          <StarOutlineIcon className="expertise-main-icon mb-3" />
          <h2 className="fw-bold text-primary mb-5">
            Expertise Across Accounts Receivable Follow Up Services
          </h2>

          {/* Custom 5x2 Grid */}
          <div className="expertise-grid mb-4">
            {[
              "Cardiology",
              "Neurology",
              "Orthopedics",
              "Radiology",
              "Pediatrics",
              "Dermatology",
              "Oncology",
              "Urology",
              "Pathology",
              "Gastroenterology",
            ].map((speciality, i) => (
              <div key={i} className="expertise-card p-4">
                <MedicalServicesOutlinedIcon className="expertise-icon mb-2" />
                <h6 className="fw-semibold mb-1">{speciality}</h6>
                <p className="text-secondary small mb-0">
                  Specialized AR expertise for {speciality.toLowerCase()} practices.
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Button */}
          <button className="btn btn-primary px-4 py-2 rounded-pill mt-3">
            View all our experts
          </button>

        </div>
      </section>
      {/* ---------------- */}
      {/* ---------------- */}
      {/* Insights Section */}
      <section className="insights-section py-5">
        <div className="container">

          {/* Section Title */}
          <h2 className="fw-bold text-center text-primary mb-5">
            Insights to Strengthen Your Medical Billing Collections Support
          </h2>

          {/* Insights Row */}
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="insight-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-semibold mb-3">
                    You’re invited! Join us for Radar: The Analytics details of our journey.
                  </h5>
                  <p className="text-secondary small">
                    Discover how data-driven AR strategies can optimize claim performance and reduce denials.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 pt-3 border-top">
                  <img
                    src="/rohit.jpg"
                    alt="Rohit Kadam"
                    className="author-img me-3"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 small fw-semibold">Rohit Kadam</h6>
                    <span className="text-secondary small">13th Jan 2020</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="insight-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-semibold mb-3">
                    How predictive analytics improves AR recovery rates by 40%.
                  </h5>
                  <p className="text-secondary small">
                    See how AI forecasting helps medical billing teams anticipate payer delays and boost cash flow.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 pt-3 border-top">
                  <img
                    src="/author2.jpg"
                    alt="Priya Sharma"
                    className="author-img me-3"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 small fw-semibold">Priya Sharma</h6>
                    <span className="text-secondary small">22nd Feb 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="insight-card p-4 h-100 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-semibold mb-3">
                    Transforming AR operations with intelligent automation tools.
                  </h5>
                  <p className="text-secondary small">
                    Explore how RPA and machine learning are transforming healthcare revenue cycle efficiency.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3 pt-3 border-top">
                  <img
                    src="/author3.jpg"
                    alt="Vikas Patil"
                    className="author-img me-3"
                  />
                  <div className="">
                    <span className="text-start mb-0 small fw-semibold">Vikas Patil</span>
                    <span className="text-end text-secondary small">10th Mar 2021</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- */}
      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container text-center">

          {/* Section Heading */}
          <h2 className="fw-bold text-primary mb-3">
            Real Results Reflected Through AR Performance Metrics in Healthcare
          </h2>
          <p className="text-secondary mb-5">
            Our clients share how AR management in medical billing helped them recover faster and stress less.
          </p>

          {/* Testimonials Grid */}
          <div className="row g-4">

            {[
              { name: "John Doe", role: "CEO at Digital Services", img: "/client1.jpg" },
              { name: "Sarah Miller", role: "COO at MediConnect", img: "/client2.jpg" },
              { name: "Ravi Sharma", role: "Head of Finance at HealthCore", img: "/client3.jpg" },
              { name: "Emily Carter", role: "Director at AR Insight", img: "/client4.jpg" },
              { name: "Michael Brown", role: "VP at CareWave Systems", img: "/client5.jpg" },
              { name: "Priya Patel", role: "CFO at Nexa Healthcare", img: "/client6.jpg" },
            ].map((client, index) => (
              <div key={index} className="col-md-4">
                <div className="testimonial-card p-4 h-100 d-flex flex-column justify-content-between">
                  {/* Stars */}
                  <div className="text-end text-warning mb-2">
                    {"★★★★★"}
                  </div>

                  {/* Feedback */}
                  <p className="text-secondary flex-grow-1">
                    Working with this company has been a game changer for our business.
                    From the initial consultation to the final execution.
                  </p>

                  {/* Author */}
                  <div className="d-flex align-items-center mt-4 pt-3 border-top">
                    <img
                      src={client.img}
                      alt={client.name}
                      className="author-img me-3"
                    />
                    <div className="text-start">
                      <h6 className="mb-0 small fw-semibold">{client.name}</h6>
                      <span className="text-secondary small">{client.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* ---------------- */}
      {/* FAQ Section */}
      <section className="faq-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5">
            Frequently Asked Questions
          </h2>

          <div className="faq-list mx-auto" style={{ maxWidth: "800px" }}>
            {[
              {
                q: "How does Qualigenix handle complex outstanding claims follow up?",
                a: "Qualigenix leverages automation and expert AR teams to follow up on every pending claim until resolution.",
              },
              {
                q: "What makes unpaid claim resolution faster with Qualigenix?",
                a: "Our optimized workflows and automated reminders ensure claim follow-up happens promptly and efficiently.",
              },
              {
                q: "Do you integrate with different EMR/EHR systems?",
                a: "Yes, we integrate with over 100+ EHR and billing systems seamlessly.",
              },
              {
                q: "Can Qualigenix support both small clinics and large hospitals?",
                a: "Absolutely. Our flexible models scale with your organization's AR volume and complexity.",
              },
              {
                q: "How do you ensure HIPAA compliance?",
                a: "Our systems follow HIPAA and HITRUST frameworks to maintain full data security.",
              },
              {
                q: "Do you provide real-time reporting and analytics?",
                a: "Yes, we deliver detailed dashboards showing claim progress, AR days, and payer performance.",
              },
            ].map((item, index) => (
              <FAQItem key={index} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- */}
      </main>
    </>
  );
}

