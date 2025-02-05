import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/images/hero-image.png";

export default function Hero() {
  return (
    <section className="relative" aria-label="hero section">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              Leonel Penaloza
            </h1>

            <div
              className="mb-6 space-y-2"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <div className="text-2xl text-indigo-500 font-semibold">
                Software Engineer
              </div>
              <div className="text-lg text-slate-400">
                Streamlining Education & Productivity with JavaScript/Python
              </div>
              <div className="text-lg text-slate-400">
                React & AWS Solutions
              </div>
            </div>

            <div
              className="flex flex-wrap justify-center gap-3 mb-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="px-4 py-2 bg-indigo-900/30 rounded-full text-indigo-300 font-medium">
                <span className="text-indigo-400">⚡</span> JavaScript
              </span>
              <span className="px-4 py-2 bg-blue-900/30 rounded-full text-blue-300 font-medium">
                <span className="text-blue-400">🐍</span> Python
              </span>
              <span className="px-4 py-2 bg-cyan-900/30 rounded-full text-cyan-300 font-medium">
                <span className="text-cyan-400">⚛️</span> React
              </span>
              <span className="px-4 py-2 bg-orange-900/30 rounded-full text-orange-300 font-medium">
                <span className="text-orange-400">☁️</span> AWS
              </span>
            </div>

            <p
              className="text-lg text-slate-400 mb-10"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Building scalable solutions that transform educational experiences
              and enhance productivity through modern web technologies and cloud
              architecture.
            </p>

            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link
                  className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm group transition-colors duration-300"
                  href="/projects"
                  aria-label="Explore my projects"
                >
                  Explore My Projects{" "}
                  <span
                    className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    aria-hidden="true"
                  >
                    -&gt;
                  </span>
                </Link>
              </div>

              <div>
                <Link
                  className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full shadow-sm transition-colors duration-300"
                  href="/contact"
                  aria-label="Get in touch with me"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div
              className="flex flex-wrap justify-center gap-3 mt-8"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <span className="px-3 py-1 text-sm text-slate-400 bg-slate-800 rounded-full">
                Full Stack Development
              </span>
              <span className="px-3 py-1 text-sm text-slate-400 bg-slate-800 rounded-full">
                Cloud Architecture
              </span>
              <span className="px-3 py-1 text-sm text-slate-400 bg-slate-800 rounded-full">
                Education Tech
              </span>
              <span className="px-3 py-1 text-sm text-slate-400 bg-slate-800 rounded-full">
                Productivity Tools
              </span>
            </div>

            <p
              className="text-sm text-slate-400 mt-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              A new Next.js version of this portfolio is in the works and will
              be released soon. Stay tuned!
              <br />
              <span className="font-semibold mt-2 inline-block">
                (Now, updated using the Next.js framework)
              </span>
            </p>
          </div>

          {/* Hero image */}
          <div
            className="pt-16 md:pt-20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              className="mx-auto rounded-lg shadow-xl"
              src={HeroImage}
              width={920}
              height={518}
              alt="Portfolio preview showcasing software development projects focused on education and productivity"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
