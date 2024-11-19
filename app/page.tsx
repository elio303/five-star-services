'use client';

import React from 'react';

const FiveStarServices: React.FC = () => {
  return (
    <div style={styles.page}>
      {/* Header Section */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Five Star Services</h1>
          <p style={styles.headerSubtitle}>Reliable. Efficient. Trusted.</p>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <section style={styles.about}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.text}>
            At Five Star Services, we specialize in delivering small packages,
            handling US customs documentation, providing checks for payment to airlines,
            and other services requiring advance payments. We are committed to
            providing reliable, efficient, and trustworthy services to meet your needs.
          </p>
        </section>

        <section style={styles.services}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <ul style={styles.list}>
            <li>Delivery of small packages</li>
            <li>US customs documentation</li>
            <li>Checks for payment to airlines</li>
            <li>Other services requiring advance payments</li>
          </ul>
        </section>

        {/* Contact Us Section */}
        <section style={styles.contactUs}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <p style={styles.text}>
            Have questions or need our services? You can reach us using the contact
            details below. We’re here to help!
          </p>
          <div style={styles.contactDetails}>
            <div style={styles.contactText}>
              <strong>Email:</strong> mostero@aol.com
            </div>
            <div style={styles.contactText}>
              <strong>Phone:</strong> 323-884-2524
            </div>
            <div style={styles.contactText}>
              <strong>Address:</strong> 1500 Rosecrans Avenue, Manhattan Beach, CA, 90266
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          &copy; 2024 Five Star Services | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

// Styles
const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: '#333',
    backgroundColor: '#f4f4f4', // Light grey background
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#222', // Dark grey background for the header
    color: '#fff',
    padding: '20px 30px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    borderBottom: '4px solid #444', // Slightly lighter grey for the border
    flexShrink: 0, // Prevent shrinking of header
  },
  headerContent: {
    maxWidth: '950px',
    margin: '0 auto',
  },
  headerTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    margin: '0',
    lineHeight: 1.3,
  },
  headerSubtitle: {
    fontSize: '1.1rem',
    marginTop: '5px',
    fontWeight: 'lighter',
  },
  main: {
    padding: '20px 30px',
    backgroundColor: '#f4f4f4',
    overflowY: 'auto', // Ensure content doesn't overflow
    flex: 1, // Allow content to fill available space
  },
  about: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  },
  services: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  },
  contactUs: {
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.7rem',
    color: '#222',
    marginBottom: '12px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#666',
    margin: '8px 0',
  },
  list: {
    paddingLeft: '20px',
    fontSize: '1rem',
    color: '#666',
  },
  contactDetails: {
    marginTop: '10px',
  },
  contactText: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '10px',
  },
  footer: {
    textAlign: 'center',
    backgroundColor: '#222', // Dark grey footer
    color: '#fff',
    padding: '12px',
    fontSize: '0.9rem',
  },
  footerText: {
    margin: 0,
  },
};

export default FiveStarServices;
