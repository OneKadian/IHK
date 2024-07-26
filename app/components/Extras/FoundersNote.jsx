import Image from "next/image";
import AnirudhKadian from "../../Images/AnirudhKadianProfile.jpeg";
import Link from "next/link";

const textContent = {
  authorName: "Anirudh Kadian",
  authorRole: "Creator of Indie Hacker Kit",
  articleTitle: "Developers Who Build From Scratch Almost Never Launch",
  introParagraph:
    "And I'm one of them too. I have always had ideas, but when it came to building them, I would flop.",
  problemsIntro: "Most indie hackers suffer from these two problems:",
  problem1: "1. Trying to build everything from scratch",
  problem2:
    "2. Searching like crazy to find customers and scale, eventually burning out.",
  solutionIntro:
    "That's why I built the Indie Hacker Kit—to help people like you build and launch fast.",
  kitDetails:
    "This will not only save you time but also increase your chances of success.",
  conclusion:
    "Finally, if you are serious about launching a SaaS, I am open to taking clients at the moment. Let the creator of this whole kit build and scale your idea for you!",
};

const FoundersNote = () => {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 flex justify flex-col">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-300">
                <Image
                  className="mr-4 w-16 h-16 rounded-full"
                  src={AnirudhKadian}
                  alt="Anirudh Kadian"
                  height={64}
                  width={64}
                />
                <div>
                  <Link
                    href="#"
                    rel="author"
                    className="text-xl font-blid text-white"
                  >
                    {textContent.authorName}
                  </Link>
                  <p className="text-base text-gray-500 ">
                    {textContent.authorRole}
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-2xl font-semibold leading-tight text-gray-300 lg:mb-6 lg:text-3xl ">
              {textContent.articleTitle}
            </h1>
          </header>
          <p className="lead text-gray-400">
            {textContent.introParagraph}
            <p className="lead text-gray-400 mt-2">
              {textContent.problemsIntro}
              <ol className="lead text-gray-400 mt-2">
                <li>{textContent.problem1}</li>
                <li>{textContent.problem2}</li>
              </ol>
              <p className="lead text-gray-400 mt-2">
                {textContent.solutionIntro}
              </p>
            </p>
          </p>
          <p className="text-gray-400 pt-2">
            {/* {textContent.kitDetails} */}
            <p className="text-gray-400 pt-2">{textContent.conclusion}</p>
          </p>
        </article>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="cal.com/onekadian/30min"
          className="rounded-md flex justify-center items-center bg-blue-600 px-4 py-2 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
        >
          Yes, I am serious
        </Link>
      </div>
    </div>
  );
};

export default FoundersNote;
