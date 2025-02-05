// app/about/page.tsx
import Header from "@/components/ui/header";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About | Leonel Penaloza",
  description: "Building scalable applications with AI integration",
};

const ProfileImage = () => {
  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      <Image
        src="/images/profile/profile.jpg"
        width={280}
        height={280}
        alt="Leonel Penaloza"
        className="rounded-full shadow-lg object-cover"
        priority
      />
    </div>
  );
};

const SkillSection = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div>
    <h3 className="font-semibold text-slate-300 mb-3">{title}</h3>
    <ul className="space-y-1 text-slate-400">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className="text-indigo-400">•</span>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function About() {
  return (
    <>
      <Header />
      <main className="relative bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4 text-white">About Me</h1>
              <p className="text-xl text-slate-400">
                Building efficient systems with modern tech and AI integration
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                <div className="w-full md:w-1/3 flex justify-center md:block">
                  <ProfileImage />
                </div>

                <div className="md:w-2/3">
                  <div className="space-y-8">
                    <p className="text-lg text-slate-400">
                      Focused on building scalable applications and integrating
                      AI solutions. Experienced in optimizing system performance
                      and automating workflows.
                    </p>

                    <div>
                      <h2 className="h3 text-white mb-6">Core Focus</h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <SkillSection
                          title="Development"
                          skills={[
                            "React & Next.js",
                            "Node.js",
                            "AWS Cloud",
                            "AI/LLM Integration",
                          ]}
                        />
                        <SkillSection
                          title="Systems"
                          skills={[
                            "Performance Optimization",
                            "Scalable Architecture",
                            "API Design",
                            "Workflow Automation",
                          ]}
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="h3 text-white mb-4">Education</h2>
                      <div className="space-y-4 text-slate-400">
                        <div>
                          <h3 className="text-slate-300">
                            Computer Science, A.A.S.
                          </h3>
                          <p>Chaffey College | 2020 - 2022</p>
                        </div>
                        <div>
                          <h3 className="text-slate-300">
                            Advanced Development Concepts
                          </h3>
                          <p>Zero To Mastery Academy | 2022 - 2024</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link
                        href="/contact"
                        className="btn text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600 w-full sm:w-auto shadow-sm"
                      >
                        Let's Connect
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
