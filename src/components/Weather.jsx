import React from "react";

const Weather = ({ data }) => {
  if (data.cod === "404") {
    return <div>{data.message}!</div>;
  } else {
    return (
      <div>
        <div>
          {typeof data.main === "undefined" ? (
            <></>
          ) : (
            <div className=" flex justify-center items-center flex-col gap-5">
              <p className="px-5 py-2 border rounded-xl bg-black/50">
                🌐 {data.name}
              </p>
              <h4 className="flex flex-col-reverse justify-around items-center border border-gray-400 p-3  bg-black/40 bg-cover rounded-md">
                <p>{data.main.temp}°C</p>
                {data.weather[0].main}
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt="icon"
                  className="mt-[-10px] text-white"
                />
              </h4>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Weather;
