import React from "react";
export default function Contact() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact</h2>
        <p className="text-slate-600 mb-4">
          Feel free to reach out via email or connect with me on social media!
        </p>
        <a
          href="mailto:yourname@example.com"
          className="inline-block bg-sky-500 text-white px-6 py-3 rounded hover:bg-sky-600 transition"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
