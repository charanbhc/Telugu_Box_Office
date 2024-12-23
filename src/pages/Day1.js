import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Day1.css";

function Day1() {
  const [selectedMovie, setSelectedMovie] = useState(""); // Default selection

  const movieCollections = {
    RRR: [
        { region: "Nizam", collections: "23.35Cr (35.80Cr Gross)" },
        { region: "Ceeded", collections: "17Cr (4.27Cr hires) (21Cr Gross)" },
        { region: "UA", collections: "7.42Cr" },
        { region: "East", collections: "5.39Cr (2.65Cr Hires)" },
        { region: "West", collections: "5.93Cr (3.20Cr Hires)" },
        { region: "Guntur", collections: "7.80Cr (3.90Cr Hires)" },
        { region: "Krishna", collections: "4.21Cr (81L Hires)" },
        { region: "Nellore", collections: "3.01Cr (61L Hires)" },
        { region: "AP-TG Total", collections: "74.11CR (105CR Gross) (15.44Cr Hires)" },
        { region: "KA", collections: "8.15Cr (85L Hires) (16.10Cr Gross)" },
        { region: "Tamilnadu", collections: "4.95Cr (10.10Cr Gross)" },
        { region: "Kerala", collections: "1.74Cr (3.85Cr Gross)" },
        { region: "Hindi", collections: "9.25Cr (23.50Cr Gross)" },
        { region: "ROI", collections: "2.80Cr (6Cr Gross)" },
        { region: "OS", collections: "34Cr (69Cr Gross)" },
        { region: "Total WW Collections", collections: "135.00CR (Gross - 235CR+)" }
      ],
    Devara: [
      { region: "Nizam", collections: "22.64Cr (inc Special Shows and hires)" },
      { region: "Ceeded", collections: "10.37Cr (1.95Cr~ hires)" },
      { region: "UA", collections: "6.45Cr" },
      { region: "East", collections: "4.73Cr (96L~ Hires)" },
      { region: "West", collections: "4.20Cr (1.21Cr~ Hires)" },
      { region: "Guntur", collections: "7.24Cr (4Cr~ Hires, Mgs)" },
      { region: "Krishna", collections: "3.53Cr (91L~ Hires)" },
      { region: "Nellore", collections: "2.49Cr (95L~ Hires)" },
      { region: "AP-TG Total", collections: "61.65Cr (82.20Cr~ Gross) (11.23Cr Hires, Mgs, SGs)" },
      { region: "KA", collections: "6.40Cr (11.70Cr Gross)" },
      { region: "Tamilnadu", collections: "1.05Cr (2.45Cr~ Gross)" },
      { region: "Kerala", collections: "25L~ (61L~ Gross)" },
      { region: "Hindi+ROI", collections: "4.55Cr (11.4Cr~ Gross)" },
      { region: "OS", collections: "24.70Cr (48.7Cr~ Gross)****approx" },
      { region: "Total WW Collections", collections: "98.60Cr (Gross - 157.00Cr~)" }
    ],
    "Guntur Kaaram": [
      { region: "Nizam", collections: "16.45Cr (inc Hires, special shows)" },
      { region: "Ceeded", collections: "3.31Cr" },
      { region: "UA", collections: "4.05Cr" },
      { region: "East", collections: "4.01Cr (1.38Cr~ hires)" },
      { region: "West", collections: "2.60Cr (1.41Cr~ Hires)" },
      { region: "Guntur", collections: "4.36Cr (1.36Cr Hires,mgs)" },
      { region: "Krishna", collections: "2.56Cr (60L hires)" },
      { region: "Nellore", collections: "1.54Cr (68L hires)" },
      { region: "AP-TG Total", collections: "38.88CR (52.50CR~ Gross)(6.78Cr Hires,mgs)" },
      { region: "KA+ROI", collections: "2.55Cr" },
      { region: "OS", collections: "10.60Cr***" },
      { region: "Total WW Collections", collections: "52.03CR (79.30CR~ Gross)" }
    ],
    Salaar: [
      { region: "Nizam", collections: "22.55Cr" },
      { region: "Ceeded", collections: "6.45CR" },
      { region: "UA", collections: "4.72Cr" },
      { region: "East", collections: "4.70Cr" },
      { region: "West", collections: "3.10Cr (80L Hires)" },
      { region: "Guntur", collections: "4.50Cr (1.60Cr Hires)" },
      { region: "Krishna", collections: "2.42Cr" },
      { region: "Nellore", collections: "1.85Cr (51L Hires)" },
      { region: "AP-TG Total", collections: "50.29CR (71CR~ Gross)(3.96Cr Hires)" },
      { region: "KA", collections: "6.00Cr (11.60Cr Gross)" },
      { region: "Tamilnadu", collections: "2.85Cr (6.25Cr~ Gross)" },
      { region: "Kerala", collections: "2.10Cr (4.75Cr~ Gross)" },
      { region: "Hindi+ROI", collections: "9.45Cr (20Cr~ Gross)" },
      { region: "OS", collections: "26.80Cr (53.50Cr~ Gross)" },
      { region: "Total WW Collections", collections: "97.49CR (Gross- 167CR+)" }
    ],
    Kalki: [
      { region: "Nizam", collections: "19.60Cr" },
      { region: "Ceeded", collections: "5.12CR" },
      { region: "UA", collections: "5.48Cr" },
      { region: "East", collections: "3.95Cr" },
      { region: "West", collections: "2.91Cr" },
      { region: "Guntur", collections: "3.24CR" },
      { region: "Krishna", collections: "2.85Cr" },
      { region: "Nellore", collections: "1.71Cr" },
      { region: "AP-TG Total", collections: "44.86CR (70.20CR~ Gross)" },
      { region: "KA", collections: "5.75Cr (12.10Cr Gross)" },
      { region: "Tamilnadu", collections: "2.35Cr (5.50Cr~ Gross)" },
      { region: "Kerala", collections: "1.35Cr (2.90Cr~ Gross)" },
      { region: "Hindi+ROI", collections: "12.85Cr (30Cr~ Gross)" },
      { region: "OS", collections: "29Cr (62.50Cr~ Gross)" },
      { region: "Total WW Collections", collections: "96.16CR (Gross- 183.20CR~)" }
    ],
    "Pushpa 2": [
      { region: "Nizam", collections: "25.60Cr (INC Hires, Premieres)" },
      { region: "Ceeded", collections: "12.48Cr (3.38Cr Hires)" },
      { region: "UA", collections: "7.70Cr (Inc Hires)" },
      { region: "East", collections: "4.90Cr (2.10Cr Hires)" },
      { region: "West", collections: "4.45Cr (1.85Cr Hires)" },
      { region: "Guntur", collections: "7.60Cr (3Cr Hires)" },
      { region: "Krishna", collections: "5.20Cr (1.84Cr~ Hires)" },
      { region: "Nellore", collections: "2.88Cr (1.05Cr Hires)" },
      { region: "AP-TG Total", collections: "70.81CR (97.50CR~ Gross)(15.27Cr~ Hires)" },
      { region: "KA", collections: "12.05Cr (22Cr Gross)" },
      { region: "Tamilnadu", collections: "5.90Cr (11.05Cr~ Gross)" },
      { region: "Kerala", collections: "2.85Cr (6.35Cr~ Gross)" },
      { region: "Hindi+ROI", collections: "36.40Cr (81.60Cr~ Gross)" },
      { region: "OS", collections: "32.00Cr (67.05Cr~ Gross)***Approx" },
      { region: "Total WW Collections", collections: "160.01CR (Gross- 285.55CR~)" }
    ]
  };

  const handleSelection = (event) => {
    setSelectedMovie(event.target.value);
  };

  return (

<div>
  
  <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="movie-select" className="dropdown-label">
            Select a movie:
          </label>
          <select
            id="movie-select"
            className="dropdown-select"
            value={selectedMovie}
            onChange={handleSelection}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {Object.keys(movieCollections).map((movie) => (
              <option key={movie} value={movie}>
                {movie}
              </option>
            ))}
          </select>
        </div>

        {selectedMovie && (
          <div className="records-table">
            <h2>{selectedMovie}</h2>
            <p>ATR Day1 records are displayed below.</p>
            <table>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Collections</th>
                </tr>
              </thead>
              <tbody>
                {movieCollections[selectedMovie].map((record, index) => (
                  <tr key={index}>
                    <td
                      style={
                        record.region === "AP-TG Total" || record.region === "Total WW Collections"
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.region}
                    </td>
                    <td
                      style={
                        record.region === "AP-TG Total" || record.region === "Total WW Collections"
                          ? { fontWeight: "bold", fontSize: "1.4em" }
                          : {}
                      }
                    >
                      {record.collections}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Day1;