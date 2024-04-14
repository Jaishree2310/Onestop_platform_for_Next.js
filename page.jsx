// pages/page.jsx

import React from 'react';
import Head from 'next/head';

const Page = () => {
  return (
    <div className="container">
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description goes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">LOGO</div>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to our Website</h1>
          <p>Learn More</p>
        </section>
        <section className="content">
          <h2>Main Content</h2>
          <p>This is the main content area.</p>
        </section>
      </main>

      <footer className="footer">
        <p>Footer</p>
      </footer>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #f5f5f5;
        }
        .header {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .navbar ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
        }
        .navbar li {
          margin-left: 1rem;
        }
        .navbar a {
          text-decoration: none;
          color: #fff;
        }
        .main {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }
        .hero {
          background-color: #007bff;
          color: #fff;
          padding: 2rem;
          border-radius: 10px;
          margin-bottom: 2rem;
        }
        .hero h1 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }
        .content {
          background-color: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        .footer {
          background-color: #333;
          color: #fff;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Page;
