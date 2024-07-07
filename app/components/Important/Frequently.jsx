// Super important section, update the array to change q and a
const Frequently = () => {
  const Questions = [
    {
      Question: "What is the Indie Hacker Kit?",
      Answer:
        "The Indie Hacker Kit is a combination of a code boilerplate with auth/payments/DB already set up along with a resource sheet and a Notion template with clear instructions to help you launch a product today.",
    },
    {
      Question: "What if I cannot code?",
      Answer:
        "While this kit is for coders only, you can reach out to me, and I can build a SaaS for you.",
    },
    {
      Question: "If I can build it, why should I buy it?",
      Answer:
        "In the words of the great Marc Louvion (father of Boilerplates), 'Others are launching while you're building.'",
    },
    {
      Question: "How do I get started?",
      Answer:
        "Buy through Gumroad, download the files, choose a theme, follow the instructions, and launch!",
    },
    {
      Question: "Can I use this as a junior dev?",
      Answer:
        "Yes, you can, provided you've already worked with JS, Tailwind CSS, and Next.js. The instructions make it easy to use and launch.",
    },
    {
      Question: "What if my question is not listed here?",
      Answer:
        "Not a problem, reach out to me via email, Twitter, or LinkedIn, and I'll be very happy to answer. Links are in the footer.",
    },
    {
      Question: "Can you build it for me?",
      Answer:
        "Yes, I am open to taking clients to build software for them. Let's talk; links to book a meeting can be found in the banner and the footer.",
    },
  ];

  return (
    <section className="bg-gray-900 py-12 lg:py-32">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6" id="faq-section">
        <div className="flex justify-center">
          <div className="max-w-screen-md mb-8 lg:mb-16 p-2">
            <h2 class="text-3xl text-center mb-2 lg:text-4xl font-semibold text-white sm:leading-[55px] sm:tracking-tight">
              FAQ
            </h2>
            <p className="text-gray-300 mt-4 text-lg text-center">
              Discover more about Indie Hacker Kit
            </p>
          </div>
        </div>

        {/* Collection */}
        <div className="text-gray-300">
          {/* FAQ begins here */}
          <div className="max-w-screen-xl mx-auto px-5 bg-gray-900 flex justify-center">
            <div className="grid divide-y divide-neutral-200 w-full mx-auto mt-8">
              {Questions.map((que) => (
                <div className="py-5">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span> {que.Question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-300 mt-3 group-open:animate-fadeIn">
                      {que.Answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
