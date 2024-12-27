import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./APTG.css";

function APTG() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  const categories = {
    "Macherla 1st Week Gross ATRs Since 2005":
    [
      "Samba 2004 2.55L",
      "Gudumba Shankar 2004 2.61L",
      "Shankar Dada MBBS 2004 3.15L",
      "Stalin 2006 3.37L",
      "Annavaram 2006 3.22L",
      "Yamadonga 2007 3.54L",
      "Chirutha 2007 4.61",
      "Jalsa 2008 4.81L",
      "Magadheera 2009 7.5L",
      "Businessman 2012 9.21L",
      "Racha 2012 9.53L",
      "Naayak 2013 11L",
      "Yevadu 2014 12.5L",
      "Baahubali: The Beginning 2015 16.6L",
      "Baahubali: The Conclusion 2017 22L",
      "Sarileru Neekevvaru 2020 22.18L",
      "RRR 2022 35.93L"
    ],
    "Khammam City All time day1 records from 2011":[
      "Dookudu 2011 6.85L",
      "Oosaravelli 2011 8.90L",
      "Businessman 2012 9.21L",
      "Dhammu 2012 11L",
      "Baadshah 2013 13.96L",
      "Baahubali: The Beginning 2015 16.6L",
      "Nannaku Prematho 2016 18.01L",
      "Janatha Garage 2016 20.02L",
      "Baahubali 2: The Conclusion 2017 22.28L",
      "Vakeel Saab 2021 30.3L",
      "Bheemla Nayak 2022 49.9L",
      "RRR 2022 89.96L"
    ],
    "Nellore Area All Time Top 10 Share Movies": [
      "Baahubali 2 – 8.07Cr",
      "Ala Vaikunthapurramuloo – 4.72Cr",
      "Saaho – 4.45Cr",
      "Baahubali 1 – 4.34Cr",
      "Sye Raa Narasimha Reddy – 4.34Cr",
      "Sarileru Neekevvaru – 4.07Cr",
      "Khaidino150 – 3.57Cr",
      "Rangasthalam – 3.56Cr",
      "Magadheera – 3.30Cr",
      "Vinaya Vidheya Rama – 2.90Cr",
      "Maharshi – 2.79Cr",
      "Aravindha Sametha – 2.79Cr",
      "Sarrainodu – 2.47Cr",
      "Bharat Ane Nenu – 2.76Cr",
      "Attarintiki Daredi – 2.72Cr",
      "JaiLavaKusa – 2.70Cr",
      "DJ – 2.40Cr",
      "Janatha Garage – 2.37Cr",
      "Srimanthudu – 2.19Cr",
      "F2 – 2.10Cr",
      "KatamaRayudu – 2.08Cr"
    ],
    "Guntur Area All Time Top 10 Share Movies": [
      "Baahubali 2 – 18.05Cr",
      "Ala Vaikunthapurramuloo – 11.18Cr",
      "Sarileru Neekevvaru – 10.03Cr",
      "Sye Raa Narasimha Reddy – 9.63Cr",
      "Baahubali 1 – 9.52Cr",
      "Rangasthalam – 8.90Cr",
      "Bharat Ane Nenu – 8.36Cr",
      "Aravindha Sametha – 8.02Cr",
      "Saaho – 7.98Cr",
      "Maharshi – 7.80Cr",
      "Khaidino150 – 7.41Cr",
      "Vinaya Vidheya Rama – 6.56Cr",
      "JaiLavaKusa – 6.36Cr",
      "Janatha Garage – 6.15Cr",
      "Srimanthudu – 5.75Cr",
      "Sarrainodu – 5.60Cr",
      "F2 – 5.70Cr",
      "DJ – 5.45Cr",
      "Magadheera – 5.12Cr",
      "KatamaRayudu – 4.95Cr"
    ],
    "Krishna Area All Time Top 10 Share Movies": [
      "Baahubali 2 – 14.10Cr",
      "Ala Vaikunthapurramuloo – 10.79Cr",
      "Sarileru Neekevvaru – 8.96Cr",
      "Sye Raa Narasimha Reddy – 7.48Cr",
      "Rangasthalam – 7.30Cr",
      "Baahubali 1 – 6.88Cr",
      "Bharat Ane Nenu – 5.87Cr",
      "Khaidino150 – 5.78Cr",
      "Maharshi – 5.70Cr",
      "F2 – 5.30Cr",
      "Saaho – 5.30Cr",
      "JaiLavaKusa – 4.95Cr",
      "Aravindha Sametha – 4.93Cr",
      "Sarrainodu – 4.72Cr",
      "Janatha Garage – 4.43Cr",
      "Srimanthudu – 4.40Cr",
      "DJ – 4.06Cr",
      "Vinaya Vidheya Rama – 3.80Cr",
      "KatamaRayudu – 3.70Cr",
      "Magadheera – 3.63Cr"
    ],
    "West All Time Top 10 Share Movies": [
      "Baahubali 2 – 12.38Cr",
      "Ala Vaikunthapurramuloo – 8.96Cr",
      "Sarileru Neekevvaru – 7.47Cr",
      "Baahubali 1 – 7.16Cr",
      "Sye Raa Narasimha Reddy – 7.14Cr",
      "Rangasthalam – 6.80Cr",
      "Khaidino150 – 6.11Cr",
      "Maharshi – 5.96Cr",
      "Saaho – 5.92Cr",
      "Aravindha Sametha – 4.82Cr",
      "Agnyaathavaasi – 4.76Cr",
      "Sarrainodu – 4.72Cr",
      "F2 – 4.57Cr",
      "Vinaya Vidheya Rama – 4.48Cr",
      "Bharat Ane Nenu – 4.46Cr",
      "Srimanthudu – 4.39Cr",
      "Janatha Garage – 4.35Cr",
      "KatamaRayudu – 4.23Cr",
      "Magadheera – 4.13Cr",
      "JaiLavaKusa – 4.06Cr",
      "DJ – 4.05Cr"
    ],
    "East All Time Top 10 Share Movies": [
      "Baahubali 2 – 17.10Cr",
      "Ala Vaikunthapurramuloo – 11.44Cr",
      "Sarileru Neekevvaru – 11.40Cr",
      "Baahubali 1 – 9.53Cr",
      "Sye Raa Narasimha Reddy – 9.50Cr",
      "Rangasthalam – 9.31Cr",
      "Khaidino150 – 8.18Cr",
      "Maharshi – 7.49Cr",
      "F2 – 7.28Cr",
      "Saaho – 7.27Cr",
      "Bharat Ane Nenu – 7.25Cr",
      "Srimanthudu – 6.18Cr",
      "JaiLavaKusa – 5.96Cr",
      "Aravindha Sametha – 5.52Cr",
      "Vinaya Vidheya Rama – 5.51Cr",
      "Sarrainodu – 5.36Cr",
      "KatamaRayudu – 5.35Cr",
      "Janatha Garage – 5.02Cr",
      "DJ – 4.85Cr"
    ],
    "Vizag/Uttarandhra All Time Top 10 Share Movies": [
      "Baahubali 2 – 26.55Cr",
      "Ala Vaikunthapurramuloo – 19.93Cr",
      "Sarileru Neekevvaru – 19.92Cr",
      "Sye Raa Narasimha Reddy – 16.69Cr",
      "Rangasthalam – 13.8Cr",
      "Khaidino150 – 13.10Cr",
      "Maharshi – 12.48Cr",
      "F2 – 10.6Cr",
      "Saaho – 10.19Cr",
      "Baahubali 1 – 9.78Cr",
      "Bharat Ane Nenu – 9.3Cr",
      "Aravindha Sametha – 8.62Cr",
      "Vinaya Vidheya Rama – 8.33Cr",
      "Sarrainodu – 8.22Cr",
      "Janatha Garage – 7.62Cr",
      "DJ – 7.45Cr"
    ]
    
    
    
    
    
    
  

  };

  const handleSelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="movies-container">
        <div className="dropdown-container">
          <label htmlFor="category-select" className="dropdown-label">
            Select a category:
          </label>
          <select
            id="category-select"
            className="dropdown-select"
            value={selectedCategory}
            onChange={handleSelection}
          >
            <option value="" disabled>
              -- Choose an option --
            </option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="records-table">
            <h2>{selectedCategory}</h2>
            <p>Box Office data is compiled from various sources.</p>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Movie</th>
                  <th>Year</th>
                  <th>Collection</th>
                </tr>
              </thead>
              <tbody>
                {categories[selectedCategory].map((movie, index) => {
                  const parts = movie.split(" "); // Splitting movie details
                  const title = parts.slice(0, -2).join(" "); // Extracting title
                  const year = parts[parts.length - 2]; // Extracting year
                  const collection = parts[parts.length - 1]; // Extracting collection

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="multi-line-content">
                          {title}
                        </div>
                      </td>
                      <td>{year}</td>
                      <td>{collection}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default APTG;