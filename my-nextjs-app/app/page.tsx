'use client';

import React from 'react';
import Link from 'next/link';
import styles from './home.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            {/* Navigation */}
            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>💻</span>
                        <span className={styles.logoText}>TechVision</span>
                    </div>
                    <ul className={styles.navLinks}>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><Link href="/login" className={styles.loginBtn}>Login</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Innovate. Build. Transform.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Cutting-edge software solutions that drive your business forward
                    </p>
                    <div className={styles.heroCTA}>
                        <button className={styles.ctaPrimary}>Get Started</button>
                        <button className={styles.ctaSecondary}>Learn More</button>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className={styles.codeBlock}>
                        <div className={styles.codeLine}>&lt; Code /&gt;</div>
                        <div className={styles.codeLine}>✨ Quality ✨</div>
                        <div className={styles.codeLine}>&lt; / &gt;</div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={styles.services}>
                <div className={styles.sectionHeader}>
                    <h2>Our Services</h2>
                    <p>Comprehensive solutions for every need</p>
                </div>
                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>🎨</div>
                        <h3>Web Design</h3>
                        <p>Beautiful and responsive designs that engage users and drive conversions</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>⚙️</div>
                        <h3>Development</h3>
                        <p>Full-stack development using latest technologies and best practices</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>🔒</div>
                        <h3>Security</h3>
                        <p>Enterprise-grade security solutions to protect your data and systems</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>☁️</div>
                        <h3>Cloud Solutions</h3>
                        <p>Scalable cloud infrastructure for optimal performance and reliability</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>📊</div>
                        <h3>Analytics</h3>
                        <p>Data-driven insights to inform your business decisions</p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}>🚀</div>
                        <h3>Consulting</h3>
                        <p>Expert guidance to accelerate your digital transformation journey</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className={styles.features}>
                <div className={styles.sectionHeader}>
                    <h2>Why Choose Us</h2>
                    <p>Industry-leading expertise and commitment to excellence</p>
                </div>
                <div className={styles.featuresList}>
                    <div className={styles.feature}>
                        <div className={styles.featureCheckmark}>✓</div>
                        <div>
                            <h4>Expert Team</h4>
                            <p>50+ experienced developers and designers</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureCheckmark}>✓</div>
                        <div>
                            <h4>24/7 Support</h4>
                            <p>Round-the-clock customer support and maintenance</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureCheckmark}>✓</div>
                        <div>
                            <h4>Proven Track Record</h4>
                            <p>500+ successful projects across various industries</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureCheckmark}>✓</div>
                        <div>
                            <h4>Latest Technology</h4>
                            <p>Always using cutting-edge tools and frameworks</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={styles.statItem}>
                    <h3>500+</h3>
                    <p>Projects Completed</p>
                </div>
                <div className={styles.statItem}>
                    <h3>50+</h3>
                    <p>Team Members</p>
                </div>
                <div className={styles.statItem}>
                    <h3>98%</h3>
                    <p>Client Satisfaction</p>
                </div>
                <div className={styles.statItem}>
                    <h3>15+</h3>
                    <p>Years Experience</p>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={styles.about}>
                <div className={styles.aboutContent}>
                    <h2>About TechVision</h2>
                    <p>
                        We are a leading software development company dedicated to transforming
                        businesses through innovative technology solutions. With over 15 years of
                        experience, we've helped hundreds of companies achieve their digital goals.
                    </p>
                    <p>
                        Our mission is to deliver exceptional software solutions that exceed
                        expectations and drive measurable business results.
                    </p>
                    <div className={styles.aboutTechs}>
                        <span>React</span>
                        <span>Next.js</span>
                        <span>Node.js</span>
                        <span>TypeScript</span>
                        <span>AWS</span>
                        <span>Docker</span>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contact}>
                <div className={styles.contactContent}>
                    <h2>Get In Touch</h2>
                    <p>Ready to start your next project? Let's talk!</p>
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows={5} required></textarea>
                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>&copy; 2024 TechVision. All rights reserved.</p>
                    <div className={styles.socialLinks}>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;