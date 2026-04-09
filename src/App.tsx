/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Metrics from "./components/sections/Metrics";
import Curriculum from "./components/sections/Curriculum";
import Quote from "./components/sections/Quote";
import Testimonials from "./components/sections/Testimonials";
import CallToAction from "./components/sections/CallToAction";

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-black selection:text-white">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Metrics Section */}
        <Metrics />

        {/* Curriculum Bento Grid */}
        <Curriculum />

        {/* Quote Section */}
        <Quote />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA Section */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
