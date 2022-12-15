import { useEffect, useState } from "react";
import "./App.css";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
  const apiKey = "04e7fdcb16ef29efab6fb4baecb1f6e3";

  const [city, setCity] = useState([""]);
  const [weather, setWeather] = useState([{}]);
  const [toggle, setToggle] = useState(false);
  const [toggleEmo, setToggleEmo] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
    setToggleEmo((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=cambodia&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
    };
    fetchData();
  }, []);

  const fetchWeather = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
    setCity("");
  };

  return (
    <div
      className={`relative min-h-screen App flex flex-col justify-start items-center gap-10 font-Inco ${
        toggle ? "light" : "dark"
      }`}
    >
      <div className="absolute  top-2 right-2 p-1 bg-violet-400 rounded-full">
        <button type="button" onClick={handleToggle}>
          {toggleEmo ? "🌞" : "🌑"}
        </button>
      </div>

      <form onSubmit={fetchWeather}>
        <div className="flex justify-center items-center p-2 max-w-[350px] mx-auto">
          <div className="flex p-3 pl-6 justify-between w-full border border-gray-600 mt-[-10px] rounded-t-md shadow-10xl rounded-bl-md">
            <div className="mr-5">
              <input
                className="bg-transparent focus:outline-none text-black dark:text-white"
                type="text"
                placeholder="Weather City..."
                onChange={(event) => setCity(event.target.value)}
                value={city}
              />
            </div>
            <button className="">
              <BsSearch size={20} />
            </button>
          </div>
        </div>
      </form>
      {/* weather */}
      <Weather data={weather} />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
