"use client";

import { useState, useEffect } from "react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import banner from "../public/Images/banner.png";
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
        <h6 className=" mb-0">{question}</h6>
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
        const response = await fetch(`https://ketaan-chopade-assignment.42web.io/api/sections/${sectionKey}`);
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
        <div className="hero-sec-bg">
          <div className="pt-3">
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
                <ul className="navbar-nav align-items-center">
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
                    <a className="nav-link expert-link pe-0" href="#">
                      <button className="btn expert-btn ps-3 py-0 rounded-pill">
                        Connect with our experts
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                          <rect x="1.74846e-06" y="40" width="40" height="40" rx="20" transform="rotate(-90 1.74846e-06 40)" fill="white" />
                          <path d="M15.4697 24.5303C15.1768 24.2374 15.1768 23.7626 15.4697 23.4697L23.9698 14.9697C24.2627 14.6768 24.7375 14.6768 25.0304 14.9697C25.3233 15.2626 25.3233 15.7375 25.0304 16.0304L16.5304 24.5303C16.2375 24.8232 15.7626 24.8232 15.4697 24.5303Z" fill="black" />
                          <path d="M14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75L24.5 14.75C24.9142 14.75 25.25 15.0858 25.25 15.5L25.25 24.5C25.25 24.9142 24.9142 25.25 24.5 25.25C24.0857 25.25 23.75 24.9142 23.75 24.5L23.75 16.25L15.5 16.25C15.0858 16.25 14.75 15.9143 14.75 15.5Z" fill="black" />
                        </svg>
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
                  <h1 className="">
                    End-to-End AR Follow Up Services for Maximum Recovery
                  </h1>
                  <p className="mb-4">
                    AR follow up in medical billing ensures every claim is tracked, resolved, and paid—boosting your cash flow without delays.
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M24.6613 13.512L20.1613 10.9747C19.4333 10.564 18.5653 10.564 17.8373 10.9747L13.3373 13.512C12.512 13.9773 11.9987 14.8907 11.9987 15.896V16.3333C11.9987 20.8867 14.7653 24.8453 18.7267 25.9627C18.8147 25.988 18.9067 26 18.9987 26C19.0907 26 19.1813 25.988 19.2707 25.9627C23.232 24.8467 25.9987 20.8867 25.9987 16.3333V15.896C25.9987 14.8907 25.4867 13.9773 24.6613 13.512ZM18.5 17.6667H19.5C20.4187 17.6667 21.1667 18.4147 21.1667 19.3333C21.1667 20.1933 20.504 20.8787 19.6667 20.9667V21.6667C19.6667 22.0347 19.368 22.3333 19 22.3333C18.632 22.3333 18.3333 22.0347 18.3333 21.6667V21H17.5C17.132 21 16.8333 20.7013 16.8333 20.3333C16.8333 19.9653 17.132 19.6667 17.5 19.6667H19.5C19.684 19.6667 19.8333 19.5173 19.8333 19.3333C19.8333 19.1493 19.684 19 19.5 19H18.5C17.5813 19 16.8333 18.252 16.8333 17.3333C16.8333 16.4733 17.496 15.788 18.3333 15.7V15C18.3333 14.632 18.632 14.3333 19 14.3333C19.368 14.3333 19.6667 14.632 19.6667 15V15.6667H20.5C20.868 15.6667 21.1667 15.9653 21.1667 16.3333C21.1667 16.7013 20.868 17 20.5 17H18.5C18.316 17 18.1667 17.1493 18.1667 17.3333C18.1667 17.5173 18.316 17.6667 18.5 17.6667ZM10 15.8933C10 14.1733 10.9067 12.5867 12.36 11.7733L13.1333 11.3333H5C4.45333 11.3333 4 10.88 4 10.3333C4 9.78667 4.45333 9.33333 5 9.33333H14.3333C14.8 9.33333 15.2 9.66667 15.2933 10.1067L16.8533 9.22667C17.5067 8.86667 18.2533 8.66667 19 8.66667C19.1067 8.66667 19.2267 8.66667 19.3333 8.69333V3.66667C19.3333 1.64 17.6933 0 15.6667 0H3.66667C1.64 0 0 1.64 0 3.66667V21C0 23.0267 1.64 24.6667 3.66667 24.6667H13.1067C11.16 22.4933 10 19.5333 10 16.3333V15.8933ZM5 5.33333H14.3333C14.88 5.33333 15.3333 5.78667 15.3333 6.33333C15.3333 6.88 14.88 7.33333 14.3333 7.33333H5C4.45333 7.33333 4 6.88 4 6.33333C4 5.78667 4.45333 5.33333 5 5.33333ZM9 15.3333H5C4.45333 15.3333 4 14.88 4 14.3333C4 13.7867 4.45333 13.3333 5 13.3333H9C9.54667 13.3333 10 13.7867 10 14.3333C10 14.88 9.54667 15.3333 9 15.3333Z" fill="#2C2C2C" />
                      </svg>
                      <div className="ps-3">
                        <strong>118+ EMR/EHR</strong><br />
                        <span className="small">Flexible, system-agnostic integration</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="31" viewBox="0 0 27 31" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0669 0C19.8544 0 25.3567 5.50231 25.3567 12.2897C25.3567 19.0772 19.8544 24.5795 13.0669 24.5795C6.27944 24.5795 0.777125 19.0772 0.777125 12.2897C0.777125 5.50231 6.27944 0 13.0669 0ZM15.8612 25.3491L19.0155 30.8125L20.2899 24.8004L26.1338 26.7028L22.9782 21.237C21.1301 23.2827 18.6576 24.7537 15.8612 25.3491ZM10.2727 25.3491C7.47619 24.7537 5.00362 23.2828 3.15569 21.2369L0 26.7027L5.84388 24.8004L7.11844 30.8124L10.2727 25.3491ZM13.0669 1.83888C7.29519 1.83888 2.61606 6.51794 2.61606 12.2897C2.61606 18.0614 7.29519 22.7406 13.0669 22.7406C18.8386 22.7406 23.5177 18.0614 23.5177 12.2897C23.5177 6.51806 18.8386 1.83888 13.0669 1.83888ZM13.0669 2.90138C7.88181 2.90138 3.67856 7.10462 3.67856 12.2897C3.67856 17.4749 7.88181 21.6781 13.0669 21.6781C18.2521 21.6781 22.4552 17.4749 22.4552 12.2897C22.4552 7.10462 18.252 2.90138 13.0669 2.90138ZM13.0669 4.88987L11.1791 9.64344L6.07481 9.96988L10.0123 13.2343L8.74556 18.1896L13.0669 15.4536L17.3883 18.1896L16.1216 13.2343L20.0589 9.96988L14.9548 9.64344L13.0669 4.88987Z" fill="#2C2C2C" />
                      </svg>
                      <div className="ps-3">
                        <strong>5M+ Prior Auth</strong><br />
                        <span className="small">Fast, accurate approval processing</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none">
                        <path d="M29.272 22.1909C29.1877 21.971 29.0385 21.7819 28.8442 21.6489C28.6498 21.5159 28.4196 21.4452 28.1841 21.4463H26.0357C25.9713 21.4462 25.9096 21.4206 25.8641 21.375C25.8186 21.3295 25.793 21.2678 25.793 21.2034V18.9954C25.7926 18.6477 25.6543 18.3143 25.4084 18.0684C25.1625 17.8226 24.8292 17.6842 24.4815 17.6838H20.8765C20.5288 17.6843 20.1955 17.8226 19.9497 18.0685C19.7039 18.3144 19.5657 18.6477 19.5654 18.9954V21.2034C19.5654 21.2678 19.5398 21.3295 19.4943 21.375C19.4488 21.4206 19.3871 21.4462 19.3228 21.4463H17.0542C16.819 21.4463 16.5894 21.5174 16.3953 21.6503C16.2013 21.7831 16.0519 21.9715 15.9668 22.1907C15.8817 22.41 15.8649 22.6498 15.9184 22.8788C15.972 23.1078 16.0936 23.3152 16.2671 23.4739L21.6807 28.426C21.9363 28.6621 22.2714 28.7932 22.6194 28.7932C22.9673 28.7932 23.3025 28.6621 23.5581 28.426L28.9717 23.4741C29.1461 23.3161 29.2683 23.1086 29.3219 22.8794C29.3756 22.6501 29.3582 22.41 29.272 22.1909Z" fill="#2C2C2C" />
                        <path d="M20.0049 16.0376H25.2329C25.465 16.0376 25.6876 15.9454 25.8517 15.7813C26.0157 15.6172 26.1079 15.3947 26.1079 15.1626C26.1079 14.9305 26.0157 14.708 25.8517 14.5439C25.6876 14.3798 25.465 14.2876 25.2329 14.2876H20.0049C19.7728 14.2876 19.5503 14.3798 19.3862 14.5439C19.2221 14.708 19.1299 14.9305 19.1299 15.1626C19.1299 15.3947 19.2221 15.6172 19.3862 15.7813C19.5503 15.9454 19.7728 16.0376 20.0049 16.0376Z" fill="#2C2C2C" />
                        <path d="M20.0049 13.1342H25.2329C25.465 13.1342 25.6876 13.042 25.8517 12.8779C26.0157 12.7138 26.1079 12.4913 26.1079 12.2592C26.1079 12.0272 26.0157 11.8046 25.8517 11.6405C25.6876 11.4764 25.465 11.3842 25.2329 11.3842H20.0049C19.7728 11.3842 19.5503 11.4764 19.3862 11.6405C19.2221 11.8046 19.1299 12.0272 19.1299 12.2592C19.1299 12.4913 19.2221 12.7138 19.3862 12.8779C19.5503 13.042 19.7728 13.1342 20.0049 13.1342Z" fill="#2C2C2C" />
                        <path d="M13.4848 7.92694H9.72176C9.04107 7.92694 8.48926 8.47875 8.48926 9.15944V27.0164C8.48926 27.6971 9.04107 28.2489 9.72176 28.2489H13.4848C14.1654 28.2489 14.7173 27.6971 14.7173 27.0164V9.15944C14.7173 8.47875 14.1654 7.92694 13.4848 7.92694Z" fill="#2C2C2C" />
                        <path d="M1.2324 0H4.995C5.32185 0 5.63532 0.129842 5.86644 0.360961C6.09756 0.592081 6.2274 0.905547 6.2274 1.2324V26.9443C6.2274 27.2711 6.09758 27.5845 5.8665 27.8156C5.63541 28.0467 5.322 28.1765 4.9952 28.1765H1.2324C0.905547 28.1765 0.592081 28.0467 0.360962 27.8155C0.129842 27.5844 0 27.271 0 26.9441V1.2324C0 0.905547 0.129842 0.592081 0.360962 0.360961C0.592081 0.129842 0.905547 0 1.2324 0Z" fill="#2C2C2C" />
                      </svg>
                      <div className="ps-3">
                        <strong>45+ States</strong><br />
                        <span className="small">Extensive PI & WC coverage</span>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div>
                    <button className="btn expert-btn ps-3 py-0 rounded-pill">
                      Book Demo
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="1.74846e-06" y="40" width="40" height="40" rx="20" transform="rotate(-90 1.74846e-06 40)" fill="white" />
                        <path d="M15.4697 24.5303C15.1768 24.2374 15.1768 23.7626 15.4697 23.4697L23.9698 14.9697C24.2627 14.6768 24.7375 14.6768 25.0304 14.9697C25.3233 15.2626 25.3233 15.7375 25.0304 16.0304L16.5304 24.5303C16.2375 24.8232 15.7626 24.8232 15.4697 24.5303Z" fill="black" />
                        <path d="M14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75L24.5 14.75C24.9142 14.75 25.25 15.0858 25.25 15.5L25.25 24.5C25.25 24.9142 24.9142 25.25 24.5 25.25C24.0857 25.25 23.75 24.9142 23.75 24.5L23.75 16.25L15.5 16.25C15.0858 16.25 14.75 15.9143 14.75 15.5Z" fill="black" />
                      </svg>
                    </button>
                    <button className="btn px-4 py-2">
                      Explore Our Coding Solutions <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="1.74846e-06" y="40" width="40" height="40" rx="20" transform="rotate(-90 1.74846e-06 40)" fill="" />
                        <path d="M15.4697 24.5303C15.1768 24.2374 15.1768 23.7626 15.4697 23.4697L23.9698 14.9697C24.2627 14.6768 24.7375 14.6768 25.0304 14.9697C25.3233 15.2626 25.3233 15.7375 25.0304 16.0304L16.5304 24.5303C16.2375 24.8232 15.7626 24.8232 15.4697 24.5303Z" fill="black" />
                        <path d="M14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75L24.5 14.75C24.9142 14.75 25.25 15.0858 25.25 15.5L25.25 24.5C25.25 24.9142 24.9142 25.25 24.5 25.25C24.0857 25.25 23.75 24.9142 23.75 24.5L23.75 16.25L15.5 16.25C15.0858 16.25 14.75 15.9143 14.75 15.5Z" fill="black" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ---------------- */}
        {/* Dynamic AR Follow Up Section */}
        <section className="ar-services py-5">
          <div className="container">
            {loading ? (
              <p>Loading content...</p>
            ) : error ? (
              <p className="text-danger">{error}</p>
            ) : (
              <>
                <h2 className="mx-auto text-center col-md-7 mb-5">
                  {section?.title}
                </h2>

                {/* Row 1 – 3 cards */}
                <div className="row g-4 justify-content-center mb-4">
                  {section?.cards?.slice(0, 3).map((card, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-4">
                      <div className="service-card d-flex flex-column p-4 h-100">
                        <div>
                          <h5 className="mb-4">{card.title}</h5>
                          <p className="small mb-3">{card.description}</p>
                        </div>
                        <div className="mt-auto text-start">
                          <button className="btn btn-sm">Explore Solutions</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2 – 2 cards (centered) */}
                <div className="row g-4 justify-content-center mb-4">
                  {section?.cards?.slice(3, 5).map((card, i) => (
                    <div key={i + 3} className="col-12 col-sm-6 col-md-6 col-lg-6">
                      <div className="service-card d-flex flex-column p-4 h-100">
                        <div>
                          <h5 className="mb-4">{card.title}</h5>
                          <p className="small mb-3">{card.description}</p>
                        </div>
                        <div className="mt-auto text-start">
                          <button className="btn btn-sm">Explore Solutions</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 3 – 3 cards */}
                <div className="row g-4 justify-content-center">
                  {section?.cards?.slice(5, 8).map((card, i) => (
                    <div key={i + 5} className="col-12 col-sm-6 col-md-4">
                      <div className="service-card d-flex flex-column p-4 h-100">
                        <div>
                          <h5 className="mb-4">{card.title}</h5>
                          <p className="small mb-3">{card.description}</p>
                        </div>
                        <div className="mt-auto text-start">
                          <button className="btn btn-sm">Explore Solutions</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
        {/* ---------------- */}
        {/* Metrics Section */}
        <section className="metrics-section py-5">
          <div className="container">
            <div className="row  g-4">

              {/* Column 1 */}
              <div className="col-md-4">
                <div className="metric-box p-4 h-100">
                  <h2 className=" text-center display-5">63K</h2>
                  <p className="sub-text mb-0">
                    Patient collection rate supported by real-time eligibility and payment tracking.
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-md-4">
                <div className="metric-box p-4 h-100">
                  <h2 className="text-center display-5">36 Days</h2>
                  <p className="sub-text mb-0">
                    Average collection cycle achieved through payer-driven workflow optimization.
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-md-4">
                <div className="metric-box p-4 h-100">
                  <h2 className="text-center display-5">75%</h2>
                  <p className="sub-text mb-0">
                    Credentialing applications processed with automated healthcare billing process integrations.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* ---------------- */}
        {/* Integration Benefits Section */}
        {/* Feature Section */}
        <section className="feature-section py-5">
          <div className="container">
            <div className="row align-items-center mb-5">
              {/* Left Title */}
              <div className="col-md-6">
                <h2 className="">
                  AR Follow-Up Services That Maximize Recovery and Minimize Delays
                </h2>
              </div>

              {/* Right Paragraph */}
              <div className="col-md-6">
                <p className="para">
                  Our accounts receivable follow up services simplify payer communication and speed up reimbursements. From tracking aged claims to closing payment gaps, we ensure your revenue stays in motion.
                </p>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-3">
                <div className="feature-card p-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="45" viewBox="0 0 33 45" fill="none">
                    <path d="M32.9695 20.6494C32.9127 20.4089 32.7974 20.1863 32.6338 20.0011C32.4703 19.816 32.2635 19.6741 32.032 19.5881L21.2301 15.5362L23.9788 1.78686C24.0411 1.4674 23.9977 1.13636 23.8553 0.843702C23.7129 0.551041 23.4792 0.312636 23.1894 0.164464C22.8996 0.0162916 22.5695 -0.0336087 22.2489 0.0222931C21.9283 0.0781949 21.6345 0.236865 21.412 0.474361L0.411976 22.9744C0.241416 23.1541 0.118031 23.3733 0.0528448 23.6123C-0.0123418 23.8513 -0.0173002 24.1028 0.0384131 24.3442C0.0941264 24.5856 0.208776 24.8095 0.372119 24.9958C0.535461 25.1821 0.742411 25.3251 0.974476 25.4119L11.7801 29.4637L9.03885 43.1981C8.97661 43.5176 9.01996 43.8486 9.16236 44.1413C9.30476 44.4339 9.53849 44.6723 9.82828 44.8205C10.1181 44.9687 10.4482 45.0186 10.7688 44.9627C11.0894 44.9068 11.3832 44.7481 11.6057 44.5106L32.6057 22.0106C32.7732 21.8309 32.894 21.6127 32.9574 21.3754C33.0208 21.138 33.025 20.8887 32.9695 20.6494ZM13.0157 38.6175L14.9788 28.7962C15.0491 28.4479 14.9934 28.086 14.8217 27.7749C14.6501 27.4638 14.3735 27.2237 14.0413 27.0975L4.13385 23.3756L20.0001 6.37686L18.0389 16.1981C17.9686 16.5464 18.0243 16.9084 18.196 17.2195C18.3676 17.5306 18.6442 17.7706 18.9764 17.8969L28.8764 21.6094L13.0157 38.6175Z" fill="#3A1912" />
                  </svg>
                  <h5 className="mb-2">Predictive Claim Alerts</h5>
                  <p className="text-secondary small mb-0">
                    Early warning signals trigger follow-up on high-risk unpaid claims before they age out.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-3">
                <div className="feature-card p-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="45" viewBox="0 0 33 45" fill="none">
                    <path d="M32.9695 20.6494C32.9127 20.4089 32.7974 20.1863 32.6338 20.0011C32.4703 19.816 32.2635 19.6741 32.032 19.5881L21.2301 15.5362L23.9788 1.78686C24.0411 1.4674 23.9977 1.13636 23.8553 0.843702C23.7129 0.551041 23.4792 0.312636 23.1894 0.164464C22.8996 0.0162916 22.5695 -0.0336087 22.2489 0.0222931C21.9283 0.0781949 21.6345 0.236865 21.412 0.474361L0.411976 22.9744C0.241416 23.1541 0.118031 23.3733 0.0528448 23.6123C-0.0123418 23.8513 -0.0173002 24.1028 0.0384131 24.3442C0.0941264 24.5856 0.208776 24.8095 0.372119 24.9958C0.535461 25.1821 0.742411 25.3251 0.974476 25.4119L11.7801 29.4637L9.03885 43.1981C8.97661 43.5176 9.01996 43.8486 9.16236 44.1413C9.30476 44.4339 9.53849 44.6723 9.82828 44.8205C10.1181 44.9687 10.4482 45.0186 10.7688 44.9627C11.0894 44.9068 11.3832 44.7481 11.6057 44.5106L32.6057 22.0106C32.7732 21.8309 32.894 21.6127 32.9574 21.3754C33.0208 21.138 33.025 20.8887 32.9695 20.6494ZM13.0157 38.6175L14.9788 28.7962C15.0491 28.4479 14.9934 28.086 14.8217 27.7749C14.6501 27.4638 14.3735 27.2237 14.0413 27.0975L4.13385 23.3756L20.0001 6.37686L18.0389 16.1981C17.9686 16.5464 18.0243 16.9084 18.196 17.2195C18.3676 17.5306 18.6442 17.7706 18.9764 17.8969L28.8764 21.6094L13.0157 38.6175Z" fill="#3A1912" />
                  </svg>
                  <h5 className="mb-2">Escalation Workflow Trigger</h5>
                  <p className="text-secondary small mb-0">
                    Automatically escalate unresolved accounts to higher review levels for faster resolution.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-3">
                <div className="feature-card p-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="45" viewBox="0 0 33 45" fill="none">
                    <path d="M32.9695 20.6494C32.9127 20.4089 32.7974 20.1863 32.6338 20.0011C32.4703 19.816 32.2635 19.6741 32.032 19.5881L21.2301 15.5362L23.9788 1.78686C24.0411 1.4674 23.9977 1.13636 23.8553 0.843702C23.7129 0.551041 23.4792 0.312636 23.1894 0.164464C22.8996 0.0162916 22.5695 -0.0336087 22.2489 0.0222931C21.9283 0.0781949 21.6345 0.236865 21.412 0.474361L0.411976 22.9744C0.241416 23.1541 0.118031 23.3733 0.0528448 23.6123C-0.0123418 23.8513 -0.0173002 24.1028 0.0384131 24.3442C0.0941264 24.5856 0.208776 24.8095 0.372119 24.9958C0.535461 25.1821 0.742411 25.3251 0.974476 25.4119L11.7801 29.4637L9.03885 43.1981C8.97661 43.5176 9.01996 43.8486 9.16236 44.1413C9.30476 44.4339 9.53849 44.6723 9.82828 44.8205C10.1181 44.9687 10.4482 45.0186 10.7688 44.9627C11.0894 44.9068 11.3832 44.7481 11.6057 44.5106L32.6057 22.0106C32.7732 21.8309 32.894 21.6127 32.9574 21.3754C33.0208 21.138 33.025 20.8887 32.9695 20.6494ZM13.0157 38.6175L14.9788 28.7962C15.0491 28.4479 14.9934 28.086 14.8217 27.7749C14.6501 27.4638 14.3735 27.2237 14.0413 27.0975L4.13385 23.3756L20.0001 6.37686L18.0389 16.1981C17.9686 16.5464 18.0243 16.9084 18.196 17.2195C18.3676 17.5306 18.6442 17.7706 18.9764 17.8969L28.8764 21.6094L13.0157 38.6175Z" fill="#3A1912" />
                  </svg>
                  <h5 className="mb-2">Payment Promise Tracking</h5>
                  <p className="text-secondary small mb-0">
                    Track payer commitments and enforce timely remittance to prevent extended delays. </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-3">
                <div className="feature-card p-4 h-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="45" viewBox="0 0 33 45" fill="none">
                    <path d="M32.9695 20.6494C32.9127 20.4089 32.7974 20.1863 32.6338 20.0011C32.4703 19.816 32.2635 19.6741 32.032 19.5881L21.2301 15.5362L23.9788 1.78686C24.0411 1.4674 23.9977 1.13636 23.8553 0.843702C23.7129 0.551041 23.4792 0.312636 23.1894 0.164464C22.8996 0.0162916 22.5695 -0.0336087 22.2489 0.0222931C21.9283 0.0781949 21.6345 0.236865 21.412 0.474361L0.411976 22.9744C0.241416 23.1541 0.118031 23.3733 0.0528448 23.6123C-0.0123418 23.8513 -0.0173002 24.1028 0.0384131 24.3442C0.0941264 24.5856 0.208776 24.8095 0.372119 24.9958C0.535461 25.1821 0.742411 25.3251 0.974476 25.4119L11.7801 29.4637L9.03885 43.1981C8.97661 43.5176 9.01996 43.8486 9.16236 44.1413C9.30476 44.4339 9.53849 44.6723 9.82828 44.8205C10.1181 44.9687 10.4482 45.0186 10.7688 44.9627C11.0894 44.9068 11.3832 44.7481 11.6057 44.5106L32.6057 22.0106C32.7732 21.8309 32.894 21.6127 32.9574 21.3754C33.0208 21.138 33.025 20.8887 32.9695 20.6494ZM13.0157 38.6175L14.9788 28.7962C15.0491 28.4479 14.9934 28.086 14.8217 27.7749C14.6501 27.4638 14.3735 27.2237 14.0413 27.0975L4.13385 23.3756L20.0001 6.37686L18.0389 16.1981C17.9686 16.5464 18.0243 16.9084 18.196 17.2195C18.3676 17.5306 18.6442 17.7706 18.9764 17.8969L28.8764 21.6094L13.0157 38.6175Z" fill="#3A1912" />
                  </svg>
                  <h5 className="mb-2">Denial & AR Routing</h5>
                  <p className="text-secondary small mb-0">
                    Combine denial and AR management to route issues to the right team promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------- */}
        {/* Expertise Section */}
        <section className="text-center py-5 ">
          <div className="container">

            {/* Top Icon & Title */}
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" width="54" height="64" viewBox="0 0 54 64" fill="none">
              <path d="M27 0L0 9.81958V31.645C0 56.3071 26.2002 63.0154 26.4639 63.0813L27 63.2109L27.5361 63.0813C27.7998 63.0154 54 56.3071 54 31.645V9.81958L27 0ZM49.5 31.645C49.5 51.1721 30.5793 57.5354 27.0088 58.5615C23.5657 57.542 4.5 51.0051 4.5 31.645V12.9705L27 4.79004L49.5 12.9705V31.645Z" fill="#005892" />
              <path d="M15.0908 30.0543L11.9092 33.2359L22.5 43.8267L42.0908 24.2359L38.9092 21.0543L22.5 37.4635L15.0908 30.0543Z" fill="#005892" />
            </svg>
            <h2 className="col-md-6 mx-auto mb-5">
              Expertise Across Accounts Receivable Follow Up Services
            </h2>

            {/* Custom 5x2 Grid */}
            <div className="row expertise-grid mb-4">
              {[
                "Cardiology",
                "Family medicine",
                "Durable medical equipment",
                "Gastroenterology",
                "Home Health",
                "Orthopedics",
                "Primary Care",
                "Emergency Medicine",
                "Pediatrics",
                "Behavioral Health",
              ].map((speciality, i) => (
                <div key={i} className="expertise-card p-4 col-12 col-sm-6 col-md-4 col-lg-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect width="48" height="48" rx="8" fill="#005892" />
                    <path d="M38.4 19.2571C38.4 23.0861 35.6735 26.2958 33.6227 28.3771C33.4087 28.5944 33.1261 28.7031 32.8435 28.7031C32.5662 28.7031 32.2891 28.5984 32.0759 28.3885C31.6457 27.9644 31.6405 27.2719 32.0646 26.8418C34.8944 23.9699 36.2125 21.5598 36.2125 19.2571C36.2125 15.8674 34.0086 13.5 30.8531 13.5C28.8013 13.5 27.2863 14.2718 26.35 15.7943C25.607 17.0028 25.4912 18.2606 25.4901 18.2732C25.4463 18.8429 24.9712 19.2804 24.3998 19.2804C23.8283 19.2804 23.3532 18.838 23.3095 18.2683C23.3088 18.2606 23.193 17.0028 22.4498 15.7943C21.5137 14.2718 19.9987 13.5 17.9469 13.5C14.7915 13.5 12.5875 15.8674 12.5875 19.2571C12.5875 20.7858 13.1675 22.3577 14.3584 24.0547H16.9546L18.7691 20.3473C18.9558 19.9659 19.3478 19.7256 19.771 19.7346C20.1957 19.7421 20.5774 19.9948 20.7505 20.3825L22.9852 25.3915L24.4083 22.5768C24.5931 22.2115 24.9663 21.98 25.3756 21.9766H25.3846C25.7905 21.9766 26.163 22.2013 26.3523 22.561L27.1384 24.0547H29.5953C30.1994 24.0547 30.6891 24.5443 30.6891 25.1484C30.6891 25.7526 30.1994 26.2422 29.5953 26.2422H26.4781C26.072 26.2422 25.6995 26.0172 25.5102 25.6579L25.4038 25.4556L23.8995 28.431C23.7132 28.7997 23.3353 29.0312 22.9237 29.0312C22.9147 29.0312 22.9059 29.031 22.8969 29.0308C22.475 29.0208 22.0967 28.7685 21.9245 28.3831L19.7056 23.4098L18.6194 25.6293C18.4359 26.0044 18.0545 26.2422 17.6369 26.2422H11.4938C10.8896 26.2422 10.4 25.7526 10.4 25.1484C10.4 24.5443 10.8896 24.0547 11.4938 24.0547H11.771C10.8507 22.4269 10.4 20.8452 10.4 19.2571C10.4 16.9342 11.1626 14.9341 12.6057 13.4729C13.9812 12.0796 15.8782 11.3125 17.9469 11.3125C21.5637 11.3125 23.4338 13.1736 24.3656 14.7347C24.3771 14.754 24.3887 14.7734 24.4 14.7928C24.4113 14.7734 24.4229 14.754 24.4344 14.7347C25.3662 13.1736 27.2363 11.3125 30.8531 11.3125C32.9219 11.3125 34.8188 12.0796 36.1943 13.4729C37.6374 14.9341 38.4 16.9342 38.4 19.2571ZM28.2177 30.3837L28.1927 30.4057C26.8024 31.6253 25.4735 32.7923 24.4 33.9354C23.3265 32.7921 21.9974 31.6253 20.6071 30.4055C19.8667 29.7561 19.1011 29.0844 18.359 28.4021C17.9142 27.9933 17.2223 28.0223 16.8136 28.4671C16.4047 28.9116 16.4338 29.6035 16.8785 30.0124C17.6395 30.712 18.4147 31.3922 19.1645 32.05C20.8778 33.553 22.4962 34.9727 23.5481 36.2795C23.5491 36.281 23.5504 36.2823 23.5515 36.2838C23.5564 36.2897 23.5615 36.2955 23.5667 36.3013C23.5863 36.3246 23.6066 36.347 23.628 36.3683C23.6292 36.3696 23.6303 36.3709 23.6314 36.372C23.6572 36.3976 23.6842 36.4213 23.7119 36.4438C23.7128 36.4444 23.7134 36.445 23.7143 36.4457C23.7147 36.4463 23.7153 36.4465 23.7158 36.447C23.7399 36.4664 23.7647 36.4846 23.7903 36.5016C23.7918 36.5027 23.7935 36.5038 23.795 36.5049C23.8192 36.5209 23.8439 36.536 23.8691 36.5499C23.8709 36.551 23.8726 36.5521 23.8745 36.5529C23.8988 36.5664 23.9236 36.5786 23.949 36.5901C23.9552 36.5929 23.9616 36.5954 23.9678 36.5982C23.9883 36.607 24.0091 36.6153 24.03 36.6228C24.0356 36.6247 24.0411 36.627 24.0465 36.629C24.07 36.6369 24.0937 36.6437 24.1176 36.6501C24.127 36.6527 24.1362 36.6548 24.1456 36.6572C24.165 36.6619 24.1847 36.6659 24.2045 36.6696C24.2122 36.6708 24.2199 36.6723 24.2276 36.6736C24.2507 36.6772 24.274 36.68 24.297 36.6824C24.3054 36.683 24.3135 36.6837 24.3218 36.6843C24.3468 36.6862 24.3718 36.6873 24.3968 36.6873C24.3977 36.6873 24.3987 36.6875 24.3996 36.6875H24.4002H24.4009C24.4017 36.6875 24.4026 36.6873 24.4034 36.6873C24.4286 36.6873 24.4534 36.686 24.4784 36.6843C24.4867 36.6837 24.4951 36.683 24.5032 36.6824C24.5265 36.68 24.5493 36.6775 24.5724 36.6736C24.5803 36.6725 24.5882 36.6708 24.5963 36.6696C24.6158 36.6659 24.6352 36.6619 24.6546 36.6572C24.664 36.655 24.6734 36.6527 24.6828 36.6501C24.7066 36.6437 24.7303 36.6369 24.7535 36.629C24.7593 36.627 24.7651 36.6247 24.7709 36.6226C24.7914 36.6153 24.8119 36.6072 24.8319 36.5984C24.8386 36.5956 24.8452 36.5929 24.8516 36.5899C24.8766 36.5786 24.9014 36.5664 24.9255 36.5531C24.9277 36.5521 24.9298 36.5508 24.9319 36.5495C24.9567 36.5358 24.9808 36.5209 25.0048 36.5051C25.0067 36.504 25.0086 36.5027 25.0103 36.5014C25.0357 36.4846 25.0603 36.4664 25.0844 36.447C25.0849 36.4465 25.0855 36.4463 25.0862 36.4457C25.087 36.445 25.0877 36.4444 25.0885 36.4435C25.1161 36.4211 25.143 36.3974 25.1688 36.372C25.1701 36.3709 25.1712 36.3694 25.1725 36.3681C25.1936 36.347 25.2141 36.3246 25.2338 36.3013C25.2387 36.2955 25.2438 36.2897 25.2487 36.2838C25.2498 36.2823 25.2511 36.281 25.2524 36.2795C26.304 34.9727 27.9222 33.553 29.6355 32.0502L29.6607 32.028C30.1146 31.6298 30.1599 30.9387 29.7615 30.4845C29.3629 30.0306 28.6718 29.9853 28.2177 30.3837Z" fill="white" />
                  </svg>
                  <h6 className="mb-1">{speciality}</h6>
                  <p className="small mb-0">
                    {speciality}.
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Button */}
            <button className="btn expert-btn vept ps-3 py-1 rounded-pill pe-1">
              View all our experts
              <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="1.74846e-06" y="40" width="40" height="40" rx="20" transform="rotate(-90 1.74846e-06 40)" fill="white" />
                <path d="M15.4697 24.5303C15.1768 24.2374 15.1768 23.7626 15.4697 23.4697L23.9698 14.9697C24.2627 14.6768 24.7375 14.6768 25.0304 14.9697C25.3233 15.2626 25.3233 15.7375 25.0304 16.0304L16.5304 24.5303C16.2375 24.8232 15.7626 24.8232 15.4697 24.5303Z" fill="black" />
                <path d="M14.75 15.5C14.75 15.0858 15.0858 14.75 15.5 14.75L24.5 14.75C24.9142 14.75 25.25 15.0858 25.25 15.5L25.25 24.5C25.25 24.9142 24.9142 25.25 24.5 25.25C24.0857 25.25 23.75 24.9142 23.75 24.5L23.75 16.25L15.5 16.25C15.0858 16.25 14.75 15.9143 14.75 15.5Z" fill="black" />
              </svg>
            </button>
          </div>
        </section>
        {/* ---------------- */}
        {/* Insights Section */}
        <section className="insights-section py-5">
          <div className="container">

            {/* Section Title */}
            <h2 className=" mx-auto text-center col-md-8  mb-5 ">
              Insights to Strengthen Your Medical Billing Collections Support
            </h2>

            {/* Insights Row */}
            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-md-4">
                <div className="insight-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className=" mb-3">
                      You’re invited! Join us for Radar: The Analytics details of our journey.
                    </h5>
                  </div>
                  <div className="d-flex align-items-center mt-3 pt-3 border-top">
                    <img
                      src="/Images/author.png"
                      alt="Rohit Kadam"
                      className="author-img border-0 me-3"
                    />
                    <div className="text-start d-flex align-items-center">
                      <h6 className="mb-0 small fw-semibold">Rohit Kadam</h6>
                      <span className="text-secondary small ps-3">13th Jan 2020</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="insight-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className=" mb-3">
                      You’re invited! Join us for Radar: The Analytics details of our journey.
                    </h5>
                  </div>
                  <div className="d-flex align-items-center mt-3 pt-3 border-top">
                    <img
                      src="/Images/author.png"
                      alt="Rohit Kadam"
                      className="author-img border-0 me-3"
                    />
                    <div className="text-start d-flex align-items-center">
                      <h6 className="mb-0 small fw-semibold">Rohit Kadam</h6>
                      <span className="text-secondary small ps-3">13th Jan 2020</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="insight-card p-4 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h5 className=" mb-3">
                      You’re invited! Join us for Radar: The Analytics details of our journey.
                    </h5>
                  </div>
                  <div className="d-flex align-items-center mt-3 pt-3 border-top">
                    <img
                      src="/Images/author.png"
                      alt="Rohit Kadam"
                      className="author-img border-0 me-3"
                    />
                    <div className="text-start d-flex align-items-center">
                      <h6 className="mb-0 small fw-semibold">Rohit Kadam</h6>
                      <span className="text-secondary small ps-3">13th Jan 2020</span>
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
            <h2 className=" mx-auto col-md-8 mb-3 ">
              Real Results Reflected Through AR Performance Metrics in Healthcare
            </h2>
            <p className="text-secondary mb-5">
              Our clients share how AR management in medical billing helped them recover faster and stress less.
            </p>

            {/* Testimonials Grid */}
            <div className="row g-4">

              {[
                { name: "John Doe", role: "CEO at Digital Services", img: "/Images/client1.png" },
                { name: "Sara Smith", role: "COO at MediConnect", img: "/Images/client2.png" },
                { name: "Michael Anderson", role: "Head of Finance at HealthCore", img: "/Images/client3.png" },
                { name: "John Doe", role: "CEO at Digital Services", img: "/Images/client1.png" },
                { name: "Michael Brown", role: "VP at CareWave Systems", img: "/Images/client2.png" },
                { name: "Priya Patel", role: "CFO at Nexa Healthcare", img: "/Images/client3.png" },
              ].map((client, index) => (
                <div key={index} className="col-md-4">
                  <div className="testimonial-card h-100 d-flex flex-column justify-content-between">
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
                        <h6 className="mb-0 small text-white">{client.name}</h6>
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
            <h2 className="text-center  mb-5">
              Frequently Asked Questions
            </h2>

            <div className="faq-list mx-auto" style={{ maxWidth: "800px" }}>
              {[
                {
                  q: "How does Qualigenix handle complex outstanding claims follow up?",
                  a: "How does Qualigenix handle complex outstanding claims follow up?",
                },
                {
                  q: "What makes unpaid claim resolution faster with Qualigenix?",
                  a: "What makes unpaid claim resolution faster with Qualigenix?",
                },
                {
                  q: "How do AR performance metrics healthcare improve collections?",
                  a: "How do AR performance metrics healthcare improve collections?",
                },
                {
                  q: "How do you ensure transparency during A/R recovery?",
                  a: "How do you ensure transparency during A/R recovery?",
                },
                {
                  q: "What long-term value do your A/R services provide?",
                  a: "What long-term value do your A/R services provide?",
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

