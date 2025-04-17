import MemoryIcon from "./assets/images/icon-memory.svg";
import VerbalIcon from "./assets/images/icon-verbal.svg";
import VisualIcon from "./assets/images/icon-visual.svg";
import ReactionIcon from "./assets/images/icon-reaction.svg";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl flex flex-col md:flex-row shadow-2xl rounded-3xl bg-white">
        {/* Total Score and Message Card */}
        <div
          className="relative bg-gradient-to-b from-Lightslateblue to-Lightroyalblue p-6 text-center
  rounded-3xl md:rounded-l-3xl md:rounded-3x1
  mb-2 md:mb-0"
        >
          <h2 className="text-lg font-semibold text-white mb-3">Your Result</h2>
          <div className="bg-Violetblue rounded-full w-36 h-36 items-center justify-center mx-auto">
            <div className="text-6xl pt-8 pb-2 font-bold text-white">76</div>
            <span className="text-lg font-semibold text-gray-400">of 100</span>
          </div>
          <div className="text-xl font-semibold text-white mt-6 pb-4">
            Great
          </div>
          <p className="text-gray-300 mb-2 text-sm-14 px-2 rounded-lg">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* Summary Card */}
        <div
          className="bg-white p-6 
  rounded-b-3xl md:rounded-r-3xl pt-2 md:pt-6"
        >
          <h2 className="text-md font-semibold mb-6 mt-2">Summary</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-red-50">
              <div className="flex items-center gap-2 text-Lightred">
                <img
                  src={ReactionIcon}
                  alt="Reaction Icon"
                  className="w-5 h-5"
                />
                <span>Reaction</span>
              </div>
              <div className="font-semibold">
                80 <span className="text-gray-400">/ 100</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 rounded-lg bg-yellow-50">
              <div className="flex items-center gap-2 text-Orangeyyellow">
                <img src={MemoryIcon} alt="Reaction Icon" className="w-5 h-5" />
                <span>Memory</span>
              </div>
              <div className="font-semibold">
                92 <span className="text-gray-400">/ 100</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-green-50">
              <div className="flex items-center gap-2 text-Greenteal">
                <img src={VerbalIcon} alt="Reaction Icon" className="w-5 h-5" />
                <span>Verbal</span>
              </div>
              <div className="font-semibold">
                61 <span className="text-gray-400">/ 100</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-blue-50">
              <div className="flex items-center gap-2 text-Cobaltblue">
                <img src={VisualIcon} alt="Reaction Icon" className="w-5 h-5" />
                <span>Visual</span>
              </div>
              <div className="font-semibold">
                73 <span className="text-gray-400">/ 100</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-slate-700 w-96 text-white py-4 mt-6 rounded-full hover:bg-Cobaltblue">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
