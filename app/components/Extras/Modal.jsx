"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalText = {
    header: "Focus on the important stuff",
    body: [
      "From figuring out the codebase to tackling unexpected challenges, the journey can be overwhelming and filled with headaches.",
      "You have two options: spend countless hours trying to piece everything together on your own, or you can hire me, the creator of this boilerplate, to build your SaaS for you",
      "I offer a comprehensive service where I not only develop your SaaS but also help you find users, set everything up, and start generating Monthly Recurring Revenue (MRR) quickly and efficiently.",
    ],
    footer: {
      accept: "Lets get it done",
      decline: "No, I'll figure it out",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 18 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Main modal */}
      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {modalText.header}
                </h3>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                {modalText.body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <Link
                  //   onClick={closeModal}
                  href="https://kadianventures.com"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {modalText.footer.accept}
                </Link>
                <button
                  onClick={closeModal}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {modalText.footer.decline}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
