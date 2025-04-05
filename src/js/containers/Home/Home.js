// src/js/containers/Home/Home.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStethoscope, FaUserMd, FaLock, FaMapMarkedAlt } from "react-icons/fa";
import css from "./Home.scss";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  const doctors = [
    { id: 1, name: "Dr. Ahmed", specialty: "Cardiologist", experience: "10 years", image: "https://picsum.photos/200" },
    { id: 2, name: "Dr. Sofia", specialty: "Dermatologist", experience: "8 years", image: "https://picsum.photos/2001" },
    { id: 3, name: "Dr. Raj", specialty: "Pediatrician", experience: "6 years", image: "https://picsum.photos/2002" },
    { id: 4, name: "Dr. Jithu", specialty: "Nfrology", experience: "2 years", image: "https://picsum.photos/2003" },
  ];

  const features = [
    { icon: <FaStethoscope size={24} />, title: "Easy Scheduling", desc: "Book available slots instantly." },
    { icon: <FaUserMd size={24} />, title: "Verified Doctors", desc: "Connect with licensed professionals." },
    { icon: <FaLock size={24} />, title: "Secure Data", desc: "We prioritize your privacy and security." },
    { icon: <FaMapMarkedAlt size={24} />, title: "Nearby Services", desc: "Find health services around you." },
  ];

  return (
    <div className={css.app}>
      <section className={css.hero}>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={css.heroContent}
        >
          <h1 className={css.heroTitle}>Book Your Medical Appointments Easily</h1>
          <p className={css.heroDesc}>Find trusted doctors and health services near you with just a few clicks.</p>
          <button onClick={() => navigate("/form")} className={css.getStartedBtn}>
            Get Started
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={css.heroImageContainer}
        >
          <img
            src="https://img.freepik.com/free-vector/medical-appointment-booking-abstract-concept_335657-5653.jpg"
            alt="doctor illustration"
            className={css.heroImage}
          />
        </motion.div>
      </section>

      <section className={css.featuresSection}>
        <h2 className={css.sectionTitle}>Why Choose MedBook?</h2>
        <div className={css.featuresGrid}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={css.featureCard}
            >
              <div className={css.featureIcon}>{feature.icon}</div>
              <h3 className={css.featureTitle}>{feature.title}</h3>
              <p className={css.featureDesc}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={css.doctorsSection}>
        <h2 className={css.sectionTitle}>Available Doctors</h2>
        <div className={css.doctorsGrid}>
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={css.doctorCard}
            >
              <img src={doc.image} alt={`${doc.name} - ${doc.specialty}`} className={css.doctorImage} />
              <h4 className={css.doctorName}>{doc.name}</h4>
              <p className={css.doctorSpecialty}>{doc.specialty}</p>
              <p className={css.doctorExperience}>{doc.experience}</p>
              <button
                onClick={() => navigate(`/book`)} //${doc.id}
                className={css.bookNowBtn}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
