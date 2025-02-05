// app/contact/page.tsx
import Header from "@/components/ui/header";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Removed FaEnvelope

export const metadata = {
  title: "Contact | Leonel Penaloza",
  description:
    "Get in touch with Leonel Penaloza for collaboration opportunities.",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="relative bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4 text-white">Get in Touch</h1>
              <p className="text-xl text-slate-400">
                Interested in collaboration? Let's build something amazing
                together.
              </p>
            </div>

            {/* Contact form */}
            <div className="max-w-lg mx-auto">
              {/* Bot prevention notice */}
              <div className="mb-8 p-4 bg-gray-800 border border-gray-700 rounded-lg text-center">
                <p className="text-slate-300">
                  Contact form is temporarily disabled to prevent AI bot spam.
                  Please use the social links below to reach out.
                </p>
              </div>

              <form className="space-y-6 opacity-50 pointer-events-none">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-1">
                    <label
                      className="block text-sm font-medium text-slate-300 mb-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="form-input w-full bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block text-sm font-medium text-slate-300 mb-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="form-input w-full bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-300 mb-1"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="form-input w-full bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-300 mb-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="form-textarea w-full bg-gray-800 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full sm:w-auto px-8 py-3 rounded-md transition-colors duration-150 ease-in-out"
                  >
                    Send Message
                  </button>
                </div>
              </form>

              {/* Social links */}
              <div className="mt-12 text-center">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Connect with me on
                </h2>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/lpenaloza16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leo-penaloza-78645a133/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
