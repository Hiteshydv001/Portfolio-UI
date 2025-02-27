"use client"; // Marks this as a Client Component

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import { FlipWords } from "@/components/common/FlipWords";
import socialLinks from "@/data/socialLinks";
import TalkButton from "./ui/TalkButton";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  // Google Drive URLs
  const resumePreviewUrl = "https://drive.google.com/file/d/1qiyK_03KktLCPsV62tSHi6jEgi_Vf8Yv/preview?usp=sharing";
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1qiyK_03KktLCPsV62tSHi6jEgi_Vf8Yv";

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 mt-40 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <div className="inline-flex items-center pt-8">
            {" "}
            {/* Added pt-8 for padding-top */}
            <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
              Hi there, I am
            </p>
            <FlipWords
              words={["Hitesh Kumar.", "a Data Scientist.", "AI/ML Enthusiast"]}
              className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--primaryColor)] text-[var(--primaryColor)] font-bold text-center"
            />
          </div>
          <p className="text-sm/normal md:text-base/normal dark:text-[var(--textColorLight)] text-[var(--textColorLight)]">
            Data Scientist 📊 AI/ML Engineer 🤖 GenAI Enthusiast 🚀
          </p>

          <div className="gap-4 mt-12 lg:mt-16 flex flex-col md:flex-row">
            <TalkButton />
            <Link
              href={resumeDownloadUrl}
              target="_blank"
              className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)] flex items-center justify-center"
              aria-label="Download Resume"
            >
              <span className="text-base/6 text-[var(--whiteColor)]">
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </Link>
          </div>

          {/* Resume Preview Section */}
          <div className="mt-12 w-full flex flex-col items-center">
            <p className="text-base/6 font-medium">Preview My Resume</p>
            <div className="mt-4 w-full max-w-3xl">
              <iframe
                src={resumePreviewUrl}
                width="100%"
                height="500px"
                className="border rounded-md"
                title="Resume Preview"
                sandbox="allow-same-origin allow-scripts"
                onError={(e) => console.error("Iframe loading error:", e)}
              />
              <p className="text-sm/normal text-[var(--textColorLight)] mt-2 text-center">
                Trouble viewing?{" "}
                <Link
                  href={resumeDownloadUrl}
                  target="_blank"
                  className="underline text-[var(--primaryColor)]"
                >
                  Download it here
                </Link>{" "}
                or view it on{" "}
                <Link
                  href="https://drive.google.com/file/d/1qiyK_03KktLCPsV62tSHi6jEgi_Vf8Yv/view?usp=sharing"
                  target="_blank"
                  className="underline text-[var(--primaryColor)]"
                >
                  Google Drive
                </Link>.
              </p>
            </div>
            <Link
              href={resumeDownloadUrl}
              target="_blank"
              className="mt-4 app__outlined_btn !rounded-md !px-4 !py-2 !border-[var(--primaryColor)] flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              <span>Download Resume</span>
            </Link>
          </div>
        </Column>

        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            {socialLinks.map((link, index) => {
              return (
                <Link
                  key={`social-link-${index}`}
                  href={link.url}
                  target="_blank"
                  className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                  aria-label={`${link.name}`}
                >
                  <span className="text-base/6 text-[var(--whiteColor)]">
                    {typeof link.icon === "string" ? null : (
                      <FontAwesomeIcon icon={link.icon} />
                    )}
                  </span>
                </Link>
              );
            })}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;