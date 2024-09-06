'use client'
import { useState, useEffect } from "react";
import CustomRangeInput from "@/components/Slider";


export default function Home() {
  const [followers, setFollowers] = useState(500);
  const [products, setProducts] = useState(25);
  const [monthlyEarning, setMonthlyEarning] = useState(12000);
  const [yearlyEarning, setYearlyEarning] = useState(144000);

  const faqs = [
    { question: "How much does it cost to set up a store?", answer: "Answer to the question" },
    { question: "What kind of digital products can I sell?", answer: "Answer to the question" },
    { question: "Do I need technical skills to use the platform?", answer: "Answer to the question" },
    { question: "Is there a limit to the number of products I can list?", answer: "Answer to the question" },
    { question: "How do I receive payments for my sales?", answer: "Answer to the question" },
    { question: "Can I sell internationally on this marketplace?", answer: "Answer to the question" },
    { question: "What support and resources are available for sellers?", answer: "Answer to the question" },
    { question: "Is there a review process for uploaded products?", answer: "Answer to the question" }
  ];

  const [showAnswers, setShowAnswers] = useState(Array(faqs.length).fill(false));

  const toggleAnswer = (index) => {
    const updatedShowAnswers = [...showAnswers];
    updatedShowAnswers[index] = !updatedShowAnswers[index];
    setShowAnswers(updatedShowAnswers);
  };

  useEffect(() => {
    setMonthlyEarning(Math.floor(followers / 10) * products * 1000)
    setYearlyEarning(Math.floor(followers / 10) * products * 12000)
  }, [products, followers, setFollowers, setProducts])



  return (
    <div className="flex flex-col items-center">
      <main className="w-full flex flex-col items-center h-screen mt-24">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto"
        >
          <source src="/assets/videos/mainVid.mp4" />
          Your browser doesn't support video tag try updating your browser or switch to latest firefox browser
        </video>
        <section className="features w-full p-4 flex flex-row justify-center">
          <ul className="flex flex-row px-12 items-center justify-between w-4/5 py-4 rounded-2xl shadow-xl shadow-gray-300 max-w-[1000px]">
            <li className="w-[15%] flex flex-col items-center text-center">
              <img
                src="/assets/images/travelWorld.png"
                alt="travelWorld picture"
                className="w-[70%]"
              />
              <span className="font-bold text-lg mt-3">Travel Itinerary</span>
            </li>

            <hr className="h-16 w-[1px] bg-[#838383]" />

            <li className="w-[15%] flex flex-col items-center text-center">
              <img
                src="/assets/images/merch.png"
                alt="merchandise picture"
                className="w-[70%]"
              />
              <span className="font-bold text-lg mt-3">Custom Merchandise</span>
            </li>

            <hr className="h-16 w-[1px] bg-[#838383]" />

            <li className="w-[15%] flex flex-col items-center text-center">
              <img
                src="/assets/images/digitalContent.png"
                alt=" cinema camera picture"
                className="w-[70%]"
              />
              <span className="font-bold text-lg mt-3">Digital Content</span>
            </li>

            <hr className="h-16 w-[1px] bg-[#838383]" />

            <li className="w-[15%] flex flex-col items-center text-center">
              <img
                src="/assets/images/fashion.png"
                alt="fashion women picture"
                className="w-[70%]"
              />
              <span className="font-bold text-lg mt-3">Fashion Brands</span>
            </li>
          </ul>
        </section>

        <section className="section2 h-4/5 w-full flex flex-col items-center p-[4%] max-p-[100px] bg-[#e5f0f1] mt-16 pb-[80px]">
          <div className=" w-full flex flex-row justify-between">
            <h2 className="text-3xl font-bold">Products</h2>
            <div>
              <button>
                <img src="/assets/images/Frame 1025.png" />
              </button>
            </div>
          </div>
          <div className=" flex flex-row items-center justify-center gap-5 mt-16">
            <img src="/assets/images/leftArrow.png" />
            <div className="flex flex-row items-center justify-between gap-5">
              <div className="w-3/5 flex flex-col ">
                <h2 className="text-3xl font-bold">Delhi Itinerary</h2>
                <p className="mt-3 text-lg lg:text-xl lg:font-medium">
                  Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.
                </p>
                <button className="mt-4">
                  <img src="/assets/images/sec2Pricing.png"
                    className="w-2/5 max-w-[200px]"
                  />
                </button>

              </div>
              <div className="w-2/5">
                <img src="/assets/images/destinations.png" />
              </div>
            </div>
            <img src="/assets/images/rightArrow.png" />
          </div>
        </section>

        <section className="md:p-14 lg:p-28 w-full max-w-[1500px] flex flex-row md:gap-2 lg:gap-5 relative">
          <div className="w-[50%] min-w-[350px] ">
            <div className="text-white h-auto bg-[#003c3c] rounded-2xl p-3 sticky top-4 mt-32 flex flex-col">
              <h2 className="text-2xl font-bold">Start Vybing with us!</h2>
              <p className="mt-3 mb-7">
                "We help influencers make money by monetizing their travel plans, merchandise, and digital goods and many more."
              </p>
              <button className="pb-1">
                <img src="/assets/images/sec3Button.png"
                  className="h-12"
                />
              </button>
            </div>
          </div>
          <div>
            <img src="/assets/images/seperator.png"
              className="w-[150px] h-[2600px]"
            />
          </div>
          <div className=" w-auto max-w-[700px]">
            <div className="w-full rounded-2xl md:p-4 lg:p-8 bg-[#e5f0f1] flex flex-col items-center ">
              <p className="font-bold md:text-lg lg:text-2xl mb-5">
                Sign Up and create your own store hassle-free.
              </p>
              <p className="mb-5 lg:text-xl">
                Join us via google signin and verify your influencer status by entering you social media Id and unlock your store @ zero cost.
              </p>
              <img src="/assets/images/sec3Mp1.png"
                className="w-full max-w-[260px] h-[550px]"
              />
            </div>

            <div className="mt-24 w-full rounded-2xl md:p-4 lg:p-8 bg-[#e5f0f1] flex flex-col items-center ">
              <p className="font-bold md:text-lg lg:text-2xl mb-5">
                Build & customize your store front.
              </p>
              <p className="mb-5 lg:text-xl">
                Simply fill in the details to build your digital store. Once done, start selling your products to your audience.
              </p>
              <img src="/assets/images/sec3Mp2.png"
                className="w-full max-w-[260px] h-[550px]"
              />
            </div>

            <div className="mt-28 w-full rounded-2xl md:p-4 lg:p-8 bg-[#e5f0f1] flex flex-col items-center ">
              <p className="font-bold md:text-lg lg:text-2xl mb-5">
                Call audience to your store. Easily integrate links into content.
              </p>
              <p className="mb-5 lg:text-xl">
                After setting up your products, its time to go public. Put your store link in insta bio and lets make first post together !
              </p>
              <img src="/assets/images/sec3Mp3.png"
                className="w-full max-w-[260px] h-[550px]"
              />
            </div>

            <div className="mt-32 w-full rounded-2xl md:p-4 lg:p-8 bg-[#e5f0f1] flex flex-col items-center ">
              <p className="font-bold md:text-lg lg:text-2xl mb-5">
                "Monetize your influencer status: Earn money adding real value to your true followers!"
              </p>
              <p className="mb-5 lg:text-xl">
                Let VYB the money now !! Its here and widthdraw it periodically.
              </p>
              <img src="/assets/images/sec3Mp4.png"
                className="w-full max-w-[260px] h-[550px]"
              />
            </div>
          </div>
        </section>

        <section className="section2 h-4/5 w-full flex flex-col items-center p-[4%] max-p-[100px] bg-[#e5f0f1] mt-16 pb-[80px]">
          <h2 className="text-3xl font-bold">ESTIMATE EARNING POTENTIAL</h2>
          <form className=" flex flex-row gap-4 w-4/5 max-w-[1150px] p-5">
            <div className="w-3/5 flex flex-col gap-4">
              <p className="font-semibold lg:text-xl">What kind of influencer are you?</p>
              <select className="p-2 rounded-xl bg-white">
                <option>
                  Select influencer type
                </option>
              </select>
              <label className="font-semibold lg:text-xl flex flex-col w-4/5 gap-2">
                How Many followers you have?
                <CustomRangeInput
                  min={0}
                  max={3000}
                  value={followers}
                  onChange={(e) => {
                    setFollowers(e.target.value)

                  }}
                />
                <p className="p-2 text-center">
                  <span className="rounded-xl bg-white p-2 px-4">
                    {followers}k
                  </span>
                </p>

              </label>

              <label className="font-semibold lg:text-xl flex flex-col w-4/5 gap-2">
                How many products do you list monthly?
                <CustomRangeInput
                  min={0}
                  max={50}
                  value={products}
                  onChange={(e) => {
                    setProducts(e.target.value)

                  }}
                />
                <p className="p-2 text-center">
                  <span className="rounded-xl bg-white p-2 px-4">
                    {products}
                  </span>
                </p>

              </label>
            </div>
            <div className="w-2/5 ml-10 flex flex-col items-center justify-center gap-2">
              <h2 className="text-xl font-bold">Monthly Earning</h2>
              <p className="mb-5 text-[#003c3c] font-bold text-2xl">
                ₹{monthlyEarning}
              </p>
              <h2 className="text-xl font-bold">Yearly Earning</h2>
              <p className="mb-5 text-[#003c3c] font-bold text-2xl">
                ₹{yearlyEarning}
              </p>
            </div>
          </form>
          <button>
            <img src="/assets/images/calculateBtn.png" />
          </button>
        </section>

        <section className="section2 h-4/5 w-full flex flex-col items-center p-[4%] max-p-[100px] mt-16 pb-[80px]">
          <h2 className="text-2xl font-bold text-[#003c3c]">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="mt-3 text-center lg:text-lg ">Quick answers to questions you may have. Can’t find what you're looking for?<br />
            Check out our full documentation</p>

          <div className="w-4/5 max-w-[800px] mt-5">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="mt-3 flex flex-row justify-between items-center w-full p-2 bg-[#e5f0f1] rounded-xl px-4 text-[#003c3c] font-semibold hover:bg-[#d8ebec]"
                  onClick={() => toggleAnswer(index)}
                >
                  {showAnswers[index] ? faq.answer : faq.question}
                  <img
                    className=""
                    src={`/assets/images/${showAnswers[index] ? "shrink" : "expand"}.png`}
                    alt={showAnswers[index] ? "shrink" : "expand"}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
