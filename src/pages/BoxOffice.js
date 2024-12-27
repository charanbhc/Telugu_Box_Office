import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./BoxOffice.css";

function BoxOffice() {
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category

  const categories = {
    "APTG Day 1 Since 2011": [
      "DOOKUDU 2011 --cr",
      "OOSARAVALLI 2011 --cr",
      "BUSINESSMAN 2012 --cr",
      "RACHA 2012 --cr",
      "DAMMU 2012 --cr",
      "GABBAR SINGH 2012 --cr",
      "CAMERAMAN GANGATHO RAMBABU 2012 --cr",
      "BADSHAH 2013 --cr",
      "ATTARINTIKI DAREDI 2013 --cr",
      "AAGADU 2014 --cr",
      "BAAHUBALI 2015 22cr",
      "SRIMANTUDU * 2015 --cr",
      "SARDAR GABBAR SINGH * 2016 21cr",
      "KAIDHI 150 * 2017 23cr",
      "JAI LAVA KUSA * GST issue 2017 22cr",
      "BAAHUBALI 2 2017 43cr",
      "AGNATHAVASI * 2018 26.4cr",
      "ARAVINDA SAMETHA * 2018 26.6cr",
      "SAAHO * 2019 36cr",
      "SYE RAA * 2019 38cr",
      "RRR 2022 74cr",
      "SALAAR * 2023 50cr",
      "DEVARA * 2024 61cr",
      "PUSHPA 2 * 2024 69cr",
    ],
    "APTG Day 1 All Time Top Share Movies": [ 
      "RRR 2022 74cr",
      "Pushpa 2 The Rule 2024 70.81CR",
      "Devara 2024 61.65CR",
      "SALAAR 2024 50.49CR",
      "Kalki 2898 AD 2024 44.86CR",
      "Baahubali2 2017 43CR",
      "Guntur Kaaram 2024 38.88CR",
      "Sye Raa Narasimha Reddy 2019 38.75Cr",
      "Saaho 2019 36.52Cr",
      "Sarkaru Vaari Paata 2022 36.01CR",
      "Adi Purush 2023 32.84Cr",
      "Sarileru Neekevvaru 2020 32.77Cr",
      "VakeelSaab 2021 32.24Cr",
      "Acharya 2022 29.50Cr",
      "Aravindha Sametha 2018 26.64Cr",
      "Bheemla Nayak 2022 26.42CR",
      "Agnyaathavaasi 2018 26.40Cr",
      "Vinaya Vidheya Rama 2019 25.99Cr",
      "Ala Vaikunthapurramuloo 2020 25.93Cr",
      "Radhe Shyam 2022 25.49Cr",
      "Veera Simha Reddy 2023 25.35CR",
      "Pushpa 2021 24.90Cr",
      "Maharshi 2019 24.68Cr",
      "BRO The Avatar 2023 23.61CR",
      "Bharat Ane Nenu 2018 23.52C",
      "Khaidi No 150 2017 23.25C",
      "Waltair Veerayya 2023 22.90CR",
      "Baahubali 2015 22.4Cr",
      "Katamarayudu 2017 22.27C",
      "Jai Lavakusa 2017 21.81Cr",
      "Sardar Gabbar Singh 2016 21.70Cr",
      "Janatha Garage 2016 20.50C"],
      
    "APTG Highest Gross Movies": [
      "RRR 2022 415.00CR",
      "Baahubali2 2017 330Cr",
      "Pushpa2TheRule 2024 319.55CR",
      "Kalki2898AD 2024 296.30CR",
      "Salaar 2023 234.05CR",
      "Devara Part 1 2024 237.55CR",
      "AlaVaikunthapurramuloo 2020 203Cr",
      "WaltairVeerayya 2023 186.65CR",
      "SarileruNeekevvaru 2020 177.10Cr",
      "Baahubali 2015 175.40Cr",
      "SyeRaa 2019 168Cr",
      "Rangasthalam 2018 160Cr",
      "HanuMan 2022 149.00CR~",
      "GunturKaaram 2024 139.80Cr",
      "AdiPurush 2023 138.55Cr",
      "KGFChapter2 (Dub) 2022 136.85CR",
      "SarkaruVaariPaata 2022 136.05Cr",
      "Maharshi 2019 131.60Cr",
      "Pushpa 2021 131.50Cr",
      "Saaho 2019 126.50Cr",
      "VakeelSaab 2021 121.65Cr",
      "BheemlaNayak 2022 117.85Cr",
      "Khaidino150 2017 112.50Cr",
      "AravindhaSametha 2018 112Cr"
    ],

    "Ceeded All Time Highest Share": [
      "RRRMovie 2022 51.04CR",
      "Baahubali2 2017 34.75CR",
      "Pushpa2TheRule 2024 31.95CR",
      "Devara Part 1 2024 31.85CR",
      "Salaar 2023 22.75CR",
      "Baahubali 2015 21.8CR",
      "Kalki2898AD 2024 21.80CR",
      "SyeRaa 2019 19.11Cr",
      "WaltairVeerayya 2023 18.35Cr",
      "AlaVaikunthaPurramuloo 2020 18.27Cr",
      "Rangasthalam 2018 17.70CR",
      "AravindhaSametha 2018 17.64CR",
      "VeeraSimhaReddy 2023 16.52CR",
      "Akhanda 2021 16.05Cr",
      "SarileruNeekevvaru 2020 15.68Cr",
      "Khaidino150 2017 15.3CR",
      "Pushpa 2021 15.17Cr",
      "BhagavanthKesari 2022 14.45Cr",
      "Magadheera 2009 13C",
      "VakeelSaab 2021 12.92Cr",
      "JaiLavaKusa 2017 12.35CR",
      "JanathaGarage 2016 12.03CR",
      "KGFChapter2 2022 12.03CR",
      "Saaho 2019 11.82CR",
      "SarkaruVaariPaata 2022 11.67CR",
      "VinayaVidheyaRama 2019 11.65Cr",
      "HanuMan 2022 11.62Cr",
      "BheemlaNayak 2022 11.22Cr",
      "Sarrainodu 2016 10.85Cr",
      "AdiPurush 2023 10.78Cr",
      "AttarintikiDaredi 2013 10.52Cr",
      "BharatAneNenu 2018 10.5Cr",
      "Maharshi 2019 10.4Cr"
    ],
 
    "Nizam Area All Time Share Movies": [
      "RRRMovie   111.85CR",
      "Pushpa2TheRule   93.20CR",
      "Kalki2898AD   92.80Cr",
      "Salaar   71.40CR",
      "Baahubali2   68Cr",
      "Devara Part 1  62.90CR",
      "AlaVaikunthaPurramuloo  44.88Cr",
      "Baahubali   43Cr",
      "KGFChapter2  42.93CR",
      "Pushpa  40.74Cr",
      "SarileruNeekevvaru  39.97Cr",
      "Hanuman   39.25CR",
      "AdiPurush   39.20CR",
      "WaltairVeerayya   36.25CR",
      "BheemlaNayak  35.02Cr",
      "GunturKaaram  33.85Cr",
      "SarkaruVaariPaata  33.64CR",
      "SyeRaa  32.51Cr",
      "Maharshi   30.86Cr",
      "Saaho   29.58Cr",
      "Rangasthalam  28.9Cr",
      "TilluSquare  26.55CR",
      "Dasara  25.96CR",
      "VakeelSaab  25.02Cr",
      "RadheShyam   24.80Cr",
      "AttarintikiDaredi  23.7Cr",
      "F2  23.5Cr",
      "2Point0   23.45Cr",
      "Magadheera  22.65cr~",
      "Srimanthudu   22.45Cr",
      "Jailer  22.90Cr",
      "AravindhaSametha   21.7Cr",
      "BharatAneNenu   21.42Cr~",
      "Akhanda   21.17Cr",
      "DJ  20.35Cr~",
      "GeethaGovindam  20.2Cr",
      "KhaidiNo150   19.60Cr"
    ],

    "WW Day 1 Top Shares":[
        "Pushpa 2 The Rule 2024 160.01CR",
        "RRR 2022 135CR",
        "Baahubali2 2017 123C",
        "Devara Part 1 2024 98.60CR",
        "SALAAR 2024 97.49CR",
        "Kalki 2898 AD 2024 96.16CR",
        "Saaho 2019 73.64CR",
        "Adi Purush 2023 70.11CR",
        "Sye Raa Narasimha Reddy 2019 53.72CR",
        "Guntur Kaaram 2024 52.03CR",
        "Baahubali 2015 46C",
        "Sarkaru Vaari Paata 2022 45.21CR",
        "Sarileru Neekevvaru 2020 43.16CR",
        "Radhe Shyam 2022 39.37CR",
        "Agnyaathavaasi 2018 39.30C",
        "Pushpa 2021 38.49CR",
        "Aravindha Sametha 2018 37.20C",
        "Ala Vaikunthapurramuloo 2020 36.83CR",
        "Vakeel Saab 2021 36.46CR",
        "Bheemla Nayak 2022 36.37CR",
        "Khaidi No 150 2017 35.22C",
        "Bharat Ane Nenu 2018 35.20C",
        "Acharya 2022 35.05CR",
        "Maharshi 2019 32.2CR",
        "Vinaya Vidheya Rama 2019 31.31C",
        "Veera Simha Reddy 2023 31.05CR",
        "Rangasthalam 2018 30.02CR",
        "BRO The Avatar 2023 30.01CR",
        "Jai Lava Kusa 2017 29.40CR",
        "Waltair Veerayya 2023 29.30CR",
        "Janatha Garage 2016 28.70CR",
        "Sardar Gabbar Singh 2016 28.40CR",
        "Katamarayudu 2017 27.80C"
    ],
    "WW Day 1 Grossers": [
      "Pushpa 2 The Rule 2024 285.55CR",
      "RRR 2022 235CR",
      "Baahubali2 2017 215CR",
      "Kalki 2898 AD 2024 183.20CR",
      "Salaar 2024 167CR",
      "Devara Part 1 2024 157CR",
      "Adi Purush 2023 137CR",
      "Saaho 2019 126CR",
      "Sye Raa Narasimha Reddy 2019 85CR",
      "Guntur Kaaram 2024 79.30CR",
      "Baahubali 2015 73C",
      "Sarkaru Vaari Paata 2022 70CR",
      "Sarileru Neekevvaru 2020 67CR",
      "Radhe Shyam 2022 67CR",
      "Pushpa 2021 63CR",
      "Agnyaathavaasi 2018 60.50C",
      "Aravindha Sametha 2018 58C",
      "Bheemla Nayak 2022 56.50CR",
      "Bharat Ane Nenu 2018 55C",
      "Ala Vaikunthapurramuloo 2020 55CR",
      "Vakeel Saab 2021 52.40CR",
      "Acharya 2022 52CR",
      "Khaidi No 150 2017 50.50C",
      "Veera Simha Reddy 2023 50.10CR",
      "Waltair Veerayya 2023 49.10CR",
      "BRO The Avatar 2023 48.50CR",
      "Maharshi 2019 48.2CR",
      "Jai Lava Kusa 2017 46.80CR",
      "Rangasthalam 2018 45.1CR",
      "Vinaya Vidheya Rama 2019 42.3C",
      "SPYder 2017 41.30CR",
      "Janatha Garage 2016 41.2CR",
      "Sardar Gabbar Singh 2016 41CR",
      "Katamarayudu 2017 39.30C",
      "Dasara 2023 38.40C"
    ],
     
    "WW South Day 1 Top Grossers": [
      "Pushpa 2 The Rule 2024 285.55CR",
      "RRR 2022 235CR",
      "Baahubali2 2017 215CR",
      "Kalki 2898 AD 2024 183.20CR",
      "Salaar 2024 167CR",
      "KGF Chapter 2 2022 164.20CR",
      "Devara Part 1 2024 157CR",
      "LEO Movie 2023 146.15CR",
      "Adi Purush 2023 137CR",
      "Saaho 2019 126CR",
      "The Greatest Of All Time 2024 104.75CR",
      "2Point0 2018 95CR",
      "Jailer 2023 91.10CR",
      "Kabali 2016 87.5CR",
      "Beast 2022 86.15CR",
      "Sye Raa Narasimha Reddy 2019 85CR",
      "Ponniyin Selvan1 2022 82.30CR",
      "Guntur Kaaram 2024 79.30CR",
      "Baahubali 2015 73.40CR",
      "Sarkaru Vaari Paata 2022 70CR",
      "Vettaiyan 2023 68.35CR",
      "Sarkar 2018 67CR",
      "Sarileru Neekevvaru 2020 67CR",
      "Radhe Shyam 2022 67CR",
      "Pushpa 2021 63CR",
      "Bigil 2019 62.85CR",
      "Vikram Hit List 2022 61.13CR",
      "Agnyaathavaasi 2018 60.50CR",
      "Ponniyin Selvan2 2023 59.12CR",
      "Aravindha Sametha 2018 58CR",
      "Bheemla Nayak 2022 56.50CR",
      "Bharat Ane Nenu 2018 55CR",
      "Ala Vaikunthapurramuloo 2020 55CR",
      "Vakeel Saab 2021 52.4CR",
      "Darbar 2020 52CR",
      "Acharya 2022 52CR",
      "Annaatthe 2021 50.85CR",
      "Khaidi No 150 2017 50.50CR",
      "Valimai 2022 50.20CR",
      "Veera Simha Reddy 2023 50.10CR",
      "Master 2021 50.02CR",
      "Waltair Veerayya 2023 49.10CR",
      "BRO The Avatar 2023 48.50CR",
      "Maharshi 2019 48.2CR",
      "Varisu 2023 47.52CR",
      "Mersal 2017 47.15CR",
      "Jai Lava Kusa 2017 46.80CR",
      "Rangasthalam 2018 45.10CR"
    ],
    "WW Highest Share Movies (Telugu Version)": [
      "RRRMovie 2022 371.41CR",
      "Baahubali2 2017 320Cr",
      "Pushpa2TheRule 2024 305.63CR",
      "Kalki2898AD 2024 302.52CR",
      "Salaar 2023 217.13CR",
      "Devara Part 1 2024 214.00CR",
      "Baahubali 2015 194Cr",
      "AlaVaikunthapurramuloo 2020 159.2Cr",
      "SarileruNeekevvaru 2020 138.78Cr",
      "WaltairVeerayya 2023 135.80Cr",
      "SyeRaa 2019 128Cr~",
      "Rangasthalam 2018 127.52Cr",
      "HanuMan 2022 127.10CR~",
      "Saaho 2019 112.73Cr",
      "GunturKaaram 2024 111.81Cr",
      "SarkaruVaariPaata 2022 110.12CR",
      "Pushpa 2021 110.08Cr",
      "AdiPurush 2023 109.50Cr",
      "KhaidiNo150 2017 104.60Cr",
      "Maharshi 2019 104.58Cr",
      "KGFChapter2 2022 103CR",
      "BharathAneNenu 2018 101Cr"
    ],

    "WW Highest Grossers (Telugu Version)": [
      "RRRMovie 2022 600CR",
      "Baahubali2 2017 560CR~",
      "Kalki2898AD 2024 530CR",
      "Pushpa2TheRule 2024 512.55CR",
      "Salaar 2023 368.50CR",
      "Devara Part 1 2024 340CR",
      "Baahubali 2015 332CR~",
      "AlaVaikunthapurramuloo 2020 256.36Cr",
      "WaltairVeerayya 2023 231Cr~",
      "SarileruNeekevvaru 2020 223.05CR",
      "HanuMan 2022 222CR~",
      "SyeRaa 2019 201CR",
      "Rangasthalam 2018 216.7Cr",
      "Saaho 2019 188.30Cr~",
      "AdiPurush 2023 187.00Cr",
      "PushpaTheRise 2021 185CR",
      "GunturKaaram 2024 184.05Cr",
      "SarkaruVaariPaata 2022 180Cr",
      "Maharshi 2019 175Cr",
      "KGFChapter2 (Dub) 2022 175Cr",
      "BharatAneNenu 2018 170Cr",
      "AravindhaSametha 2018 165Cr",
      "Khaidino150 2017 164.2Cr",
      "Bheemla Nayak 2022 159.10CR"
    ],
    "WW Highest Share (Including All)": [
      "Baahubali2 2017 860CR",
      "Pushpa2TheRule 2024 767.29CR~",
      "RRRMovie 2022 614.06CR",
      "Kalki2898AD 2024 539.25CR",
      "Salaar 2023 337.43CR",
      "Baahubali 2015 304CR",
      "Devara Part 1 2024 256.85CR",
      "Saaho 2019 218.45CR",
      "AdiPurush 2023 197.10Cr",
      "Pushpa 2021 184.62Cr",
      "AlaVaikunthapurramuloo 2020 160.37Cr",
      "HanuMan 2022 157.60CR~",
      "SyeRaa 2019 143.80Cr~",
      "SarileruNeekevvaru 2020 139.16Cr",
      "WaltairVeerayya 2023 136.55Cr",
      "Rangasthalam 2018 127.52Cr",
      "GunturKaaram 2024 111.81Cr",
      "SarkaruVaariPaata 2022 110.12CR",
      "KhaidiNo150 2017 104.60Cr",
      "Maharshi 2019 104.58Cr",
      "KGFChapter2 (Dub) 2022 103CR",
      "BharathAneNenu 2018 101Cr"
    ],
    "WW Highest Grossers (Including All)": [
      "Baahubali2 2017 1810CR",
      "Pushpa2TheRule 2024 1596+CR~",
      "RRRMovie 2022 1295.00CR",
      "Kalki2898AD 2024 1061.50CR",
      "Salaar 2023 630.15CR",
      "Baahubali 2015 605CR",
      "Devara Part 1 2024 450.05CR",
      "Saaho 2019 435CR",
      "AdiPurush 2023 397Cr",
      "Pushpa 2021 360CR",
      "HanuMan 2022 296.50CR+",
      "AlaVaikunthapurramuloo 2020 256.35Cr",
      "SyeRaa 2019 236.40Cr",
      "WaltairVeerayya 2023 233.70Cr",
      "SarileruNeekevvaru 2020 223.05Cr",
      "Rangasthalam 2018 216.70CR",
      "GunturKaaram 2024 184.05Cr",
      "SarkaruVaariPaata 2022 180CR",
      "Maharshi 2019 175Cr",
      "KGFChapter2 2022 175Cr",
      "BharathAneNenu 2018 170Cr",
      "AravindhaSametha 2018 165Cr",
      "KhaidiNo150 2017 164.2Cr",
      "BheemlaNayak 2022 159.10CR"
    ],
  
    "Pre Release Business Movies": [
      "Pushpa 2 The Rule 2024 617CR",
      "RRR Movie 2022 451Cr",
      "Kalki2898AD 2024 370CR",
      "Baahubali2 2017 352cr",
      "Salaar 2023 345CR",
      "Saaho 2019 270cr",
      "ADI PURUSH 2023 240CR",
      "Radhe Shyam 2022 202.80Cr",
      "SyeRaa Narasimha Reddy 2019 187.25Cr",
      "Devara Part 1 2024 182.55CR",
      "Pushpa Part 1 2021 144.9CR",
      "GunturKaaram 2024 132.00CR",
      "Acharya 2022 131.20CR",
      "SPYder 2017 124.3cr+",
      "Agnyaathavaasi 2018 123.6cr",
      "Sarkaru Vaari Paata 2022 120CR",
      "Baahubali1 2015 118cr",
      "Bheemla Nayak 2022 106.75Cr",
      "Maharshi 2018 100CR",
      "BharatAneNenu 2018 100cr",
      "Sarileru Neekevvaru 2020 99.30Cr",
      "BRO THE MOVIE 2021 97.50CR",
      "Aravindha Sametha 2018 91cr",
      "God Father 2022 91CR/73Cr(Team)",
      "Vinaya Vidheya Rama 2019 90cr",
      "VakeelSaab 2021 89.35Cr",
      "KhaidiNo150 2017 89Cr",
      "LIGER 2022 88.40CR",
      "Waltair Veerayya 2023 88CR",
      "Sardar Gabbar Singh 2016 87.7cr",
      "JaiLavaKusa 2017 86Cr",
      "KaatamaRayudu 2018 84.5cr",
      "Ala Vaikunthapurramuloo 2020 84.34Cr",
      "Rangasthalam 2018 80Cr",
      "Bhola Shankar 2023 79.60Cr",
      "DJ- Duvvada Jagannatham 2017 79Cr+",
      "Veera Simha Reddy 2023 73CR"
    ],
    " Pre Release Business APTG": [
      "Pushpa2TheRule 2024 213CR",
      "RRRMovie 2022 191CR",
      "KALKI2898AD 2024 168CR",
      "Salaar 2023 145Cr",
      "Baahubali2 2017 122Cr",
      "Saaho 2019 121.6Cr",
      "AdiPurush 2023 120CR",
      "Devara Part 1 2024 112.55CR",
      "Acharya 2022 107.50CR",
      "SyeRaa 2019 106.8Cr",
      "RadheShyam 2022 105.20Cr",
      "GunturKaaram 2024 102.00CR",
      "Pushpa1 2021 101.75CR",
      "SarkaruVaariPaata 2022 97.50CR",
      "Agnyaathavaasi 2018 91.80CR",
      "BheemlaNayak 2022 88.75CR",
      "BROTheAvatar 2023 80.50CR",
      "VakeelSaab 2021 74.35CR"
    ],
    " Pre Release Business Nizam": [
      "Pushpa2TheRule 2024 100CR",
      "RRRMovie 2022 70CR",
      "KALKI2898AD 2024 65CR",
      "Salaar 2023 60CR",
      "AdiPurush 2023 50CR",
      "Devara Part 1 2024 44.00CR",
      "GunturKaaram 2024 42.00CR",
      "Baahubali2 2017 40CR",
      "Saaho 2019 40CR",
      "Acharya 2022 38CR",
      "RadheShyam 2022 36.50CR",
      "Pushpa 2021 36CR",
      "SarkaruVaariPaata 2022 36CR",
      "BheemlaNayak 2022 35CR",
      "BROTheAvatar 2023 30Cr",
      "Agnyaathavaasi 2018 29.50CR",
      "SyeRaa 2019 28CR"
    ],
    "Overseas Premier Highest Grossers": [
      "Kalki 2898 AD 2024 $3.90M($33~)",
      "RRR 2022 $3.46M($28)",
      "Pushpa 2 The Rule 2024 $3.34M($30~)",
      "Devara Part 1 2024 $2.83M($30~)",
      "Salaar 2024 $2.60M($25)",
      "Baahubali2 2017 $2.45M($28)",
      "Agnyaathavaasi 2018 $1.52M($25)",
      "Guntur Kaaram 2024 $1.4M($20~)",
      "Baahubali 2015 $1.36M($25)",
      "Khaidi No 150 2017 $1.29M($25)",
      "Spyder 2017 $1.1M($25)",
      "Sarkaru Vaari Paata 2022 $952K($25)",
      "Saaho 2019 $923K($28)",
      "Bheemla Nayak 2022 $875K($25)",
      "Radhe Shyam 2022 $875K($25)",
      "Bharat Ane Nenu 2018 $850K($20)",
      "Sye Raa Narasimha Reddy 2019 $857K($27)",
      "Adi Purush 2023 $825K($22)",
      "Ala Vaikunthapurramuloo 2020 $806K($14)",
      "Aravindha Sametha 2018 $798K($20)",
      "Sarileru Neekevvaru 2020 $760K($20)",
      "Veera Simha Reddy 2023 $708K($20)",
      "Rangasthalam 2018 $700K($20)",
      "Waltair Veerayya 2023 $679K($20)",
      "Acharya 2022 $650K($20)",
      "BRO The Avatar 2023 $647K($20)",
      "Sardar Gabbar Singh 2016 $610K($25)",
      "Jai Lava Kusa 2017 $590K($18)"
    ], 
    "Re-Release Total Collections": [
      "Ghilli4K   32.50CR~",
      "Murari4K   8.90Cr",
      "GabbarSingh4K  8.01CR~",
      "Kushi  7.46CR~",
      "BusinessMan4K  5.85Cr~",
      "Devadoothan (Malayalam)  5.3CR+",
      "Spadikam (Malayalam)  4.90CR~",
      "Simhadri4K   4.60CR",
      "EeNagaranikiEmaindi  3.52CR~",
      "SuryaSonOfKrishnan   3.40Cr~",
      "Indra4K  3.38CR",
      "Orange4K   3.36Cr",
      "Jalsa  3.20Cr",
      "Manichitrathazhu (Malayalam)   3CR~",
      "Okkadu4K   2.54CR",
      "3Movie4K   2.35CR~",
      "7/GBrindavanaColony  1.90CR~",
      "OYE4K   1.78CR~",
      "Pokiri   1.73Cr",
      "Desamuduru  1.65CR",
      "TholiPrema4K   1.52CR~",
      "ChennakeshavaReddy   1.10Cr",
      "Billa  1.05Cr"
    ],
    "Re-Release Day 1 World Wide": [
      "Ghilli4K  7.92CR",
      "GabbarSingh4K   7.53CR(Premieres)",
      "Murari4K   5.41Cr",
      "BusinessMan4K   5.27Cr",
      "Kushi   4.15CR",
      "Simhadri4K   4.01CR",
      "Jalsa  3.20Cr",
      "Indra4K  3.05CR",
      "Okkadu  2.05CR",
      "EeNagaranikiEmaindi   1.78CR~",
      "Pokiri  1.73Cr",
      "Orange  1.53CR(Premieres)",
      "Desamuduru  1.50CR",
      "3Movie4K  1.48CR",
      "OYE4K   1.45CR~",
      "SuryaSonOfKrishnan   1.45Cr~",
      "Spadikam (Malayalam)  1.20CR~",
      "ChennakeshavaReddy   1.10Cr",
      "Billa   1.05Cr",
      "7/G Brindavana Colony   1.05CR~",
      "Venky4K   90L+",
      "TholiPrema4K   80L~"
    ],
    "Re-Release Day 1 APTG": [
      "GabbarSingh4K   5.95CR(Premieres)",
      "Murari4K  4.40Cr~",
      "BusinessMan4K   4.37Cr~",
      "Kushi   3.62CR",
      "Simhadri4K  2.90CR",
      "Jalsa       2.57Cr",
      "Indra4K   1.92CR",
      "Okkadu  1.90CR~",
      "EeNagaranikiEmaindi   1.69CR~",
      "Pokiri  1.52Cr",
      "3Movie4K  1.48CR",
      "Desamuduru  1.46CR",
      "Orange  1.42CR(Premieres)",
      "SuryaSonOfKrishnan  1.40Cr~",
      "OYE4K   1.20CR~",
      "7/G Brindavana Colony   90L",
      "Billa   85L",
      "Venky4K   78L+",
      "TholiPrema4K  76L~",
      "ChennakeshavaReddy  64L"
    ],
    "Re-Release Day 1 Nizam": [
      "Murari4K  2.93Cr~",
      "GabbarSingh4K   2.52CR~",
      "BusinessMan4K   2.46Cr",
      "Kushi  1.65CR",
      "Jalsa   1.26Cr",
      "Indra4K  1.08CR",
      "Simhadri4K  1.06Cr",
      "Okkadu  90L",
      "EeNagaranikiEmaindi  81L~",
      "Orange  75L~",
      "OYE4K   75L~",
      "Pokiri  69L",
      "Desamuduru  68L~",
      "3Movie4K  64L~",
      "Billa   51L",
      "SuryaSonOfKrishnan  50L~",
      "7/G Brindavana Colony   46L~",
      "TholiPrema4K   41L",
      "ChennakeshavaReddy  21L"
    ],
    "Re-Release Day 1 Ceeded": [
      "GabbarSingh4K   81L~",
      "Simhadri4K   76L",
      "Kushi4K  45L",
      "Jalsa   39L",
      "Businessman4K  35L",
      "Murari4K  32L",
      "Indra4K  30L~"
    ],
   
    "South India's All Time Highest Grossers": [
      "Baahubali2  1810CR",
      "Pushpa2TheRule  1301CR",
      "RRRMovie   1290CR",
      "KGFChapter2   1233CR",
      "Kalki2898AD  1061.50CR",
      "2Point0  709Cr",
      "Salaar   630.15CR",
      "Jailer   606.30CR",
      "Baahubali   605CR",
      "LeoMovie  600.60CR",
      "PonniyanSelvan1  487.50CR",
      "TheGreatestOfAllTime  454.05CR",
      "Devara Part 1   450.05CR",
      "SAAHO   435CR",
      "Vikram  417.10Cr",
      "Kantara   401.05CR",
      "AdiPurush   397CR+",
      "Pushpa  360CR",
      "PonniyanSelvan2   338.85CR",
      "Amaran  330CR",
      "Bigil   300CR~",
      "Varisu  301.4CR~",
      "HanuMan   296.50Cr",
      "Kabali  294Cr",
      "Robot   292Cr",
      "Sarkar  260CR~",
      "AlaVaikunthapurramuloo   256.35Cr",
      "Vettaiyan   253.15Cr",
      "Mersal  245Cr",
      "KGFChapter1   242Cr",
      "I(Manoharudu)   240Cr",
      "SyeRaa  236.40C",
      "Waltair Veerayya  236.15Cr",
      "Master  236Cr",
      "Beast   235.05Cr",
      "Petta   228Cr",
      "SarileruNeekevvaru   223.05Cr",
      "Rangasthalam   216.70C",
      "Darbar  205Cr",
      "Thunivu   200.02Cr"
    ],
    "India's All Time Highest Grossers": [
      "Dangal  1958CR",
      "Baahubali2  1810CR",
      "Pushpa2TheRule  1301CR",
      "RRRMovie  1290.00CR",
      "KGFChapter2   1233CR",
      "JAWAN  1160Cr~",
      "KALKI2898AD   1061.50CR",
      "PATHAAN   1051CR",
      "ANIMAL  913Cr",
      "BhajrangiBhaijaan  870CR",
      "Stree2  870CR~",
      "SecretSuperstar  831cr",
      "PK  741CR",
      "2Point0  709Cr",
      "Gadar2  686CR+",
      "Salaar  630.15CR",
      "Sulthan  615Cr",
      "Jailer   606.30CR",
      "Baahubali  605CR",
      "LeoMovie  600.60CR",
      "Sanju   580Cr",
      "TigerZindahai   562CR",
      "Padmaavat  560CR",
      "Dhoom3   545Cr",
      "PonniyanSelvan1  487.50CR",
      "Tiger3  465CR",
      "War   460Cr",
      "Dunki  455CR",
      "TheGreatestOfAllTime  454.05CR",
      "Devara Part 1   450.05CR",
      "SAAHO  435CR",
      "Brahmastra Part1Shiva   432CR",
      "Vikram  417.10Cr",
      "BhoolBhulaiyaa3   416.60CR~",
      "Andhadhun   410Cr",
      "Kantara   401.05CR",
      "HappyNewYear  397CR",
      "AdiPurush  397CR+",
      "3Idots  396Cr",
      "ChennaiExpress   392Cr",
      "SinghamAgain  386Cr~",
      "Simmba  385Cr",
      "Kick  378CR",
      "Krrish3   376CR",
      "KabirSingh   375Cr",
      "Dilwale   371Cr",
      "Tanhaji The Unsung Warrior     366CR~",
      "Fighter   364CR",
      "BajiraoMastani  362CR",
      "Pushpa   360CR",
      "Drishyam2  344Cr",
      "URI The Surgical Strike   342",
      "TheKashmirFiles   342CR~",
      "BangBang   341CR",
      "PonniyanSelvan2   338.85CR",
      "RockyAurRaniKiPremKahani  335.00CR",
      "Amaran  328CR",
      "Thugs Of Hindostan  328CR",
      "EkThaTiger  321CR",
      "Bharat  321CR",
      "YehJawaaniHaiDeewani  319CR",
      "ToiletEkPremKatha  317CR~",
      "GoodNewwz   316CR",
      "GolmaalAgain  309CR",
      "TheKeralaStory  302CR",
      "Race3   300CR~"
    ],
    "Tollywood All Time Highest Theatre Count": [
      "Pushpa2TheRule (2024) 10,410+",
      "RRRMovie (2022) 10,200+",
      "Baahubali2 (2017) 8500-9000",
      "KALKI2898AD (2023) 8400-8500",
      "Saaho (2019) 7978",
      "DevaraPart1 (2024) 7100-7250",
      "RadheShyam (2022) 7010+",
      "AdiPurush (2023) 7000+",
      "SalaarPart1 (2023) 6200+",
      "SyeRaaNarasimhaReddy (2019) 4632",
      "Baahubali (2015) 4000",
      "PushpaPart1 (2021) 3000+",
      "LIGER (2022) 3000+",
      "Agnyaathavaasi (2018) 2800",
      "DASARA (2023) 2710~",
      "SardaarGabbarSingh (2017) 2600~",
      "Spyder (2017) 2400",
      "BharatAneNenu (2018) 2400",
      "AravindhaSametha (2018) 2300",
      "GunturKaaram (2023) 2210",
      "VakeelSaab (2021) 2174",
      "SarkaruVaariPaata (2022) 2150",
      "Acharya (2022) 2000",
      "Katamarayudu (2017) 2000",
      "Maharshi (2018) 1900+",
      "BheemlaNayak (2022) 1875",
      "Khaidino150 (2017) 1850",
      "Oosaravelli (2011) 1800~",
      "JaiLavaKusa (2017) 1800",
      "GodFather (2022) 1705+",
      "Rangasthalam (2018) 1650",
      "SarileruNeekevvaru (2020) 1640~",
      "Khiladi (2022) 1600",
      "WaltairVeerayya (2023) 1575+",
      "Akhanda (2021) 1550",
      "NaaPeruSurya (2018) 1550",
      "BROTheAvatar (2023) 1550",
      "DearComrade (2019) 1500~",
      "BholaShankar (2023) 1500~",
      "HanuMan (2024) 1500"
    ],
    

    "Bollywood Highest Day 1":[
      "Pushpa: The Rule - Part 2 2024 70.3CR",
"Jawan 2023 65.5CR",
"Pathaan 2023 55CR",
"Animal 2023 54.75CR",
"KGF Chapter 2 2022 53.95CR",
"Stree 2 2024 51.8CR",
"War 2019 51.6CR",
"Thugs Of Hindostan 2018 50.75CR",
"Singham Again 2024 43.5CR",
"Tiger 3 2023 43CR",
"Happy New Year 2014 42.62CR",
"Bharat 2019 42.3CR",
"Baahubali 2 The Conclusion 2017 41CR",
"Prem Ratan Dhan Payo 2015 40.35CR",
"Gadar 2 2023 40.1CR",
"Adipurush 2023 37.25CR",
"Sultan 2016 36.54CR",
"Bhool Bhulaiyaa 3 2024 35.5CR",
"Sanju 2018 34.75CR",
"Tiger Zinda Hai 2017 34.1CR",
"Dhoom 3 2013 33.42CR",
"Chennai Express 2013 33.12CR",
"Ek Tha Tiger 2012 32.93CR",
"Singham Returns 2014 32.1CR",
"Brahmastra Part One: Shiva 2022 32CR",
"Golmaal Again 2017 30.14CR",
"Dunki 2023 29.2CR",
"Dangal 2016 29.19CR",
"Race 3 2018 29.17CR",
"Mission Mangal 2019 29.16CR",
"Bajrangi Bhaijaan 2015 27.25CR",
"PK 2014 26.63CR",
"Kick 2014 26.4CR",
"Sooryavanshi 2021 26.29CR",
"Bang Bang! 2014 26.25CR",
"Gold 2018 25.25CR",
"Baaghi 2 2018 25.1CR",
"Saaho 2019 24.4CR",
"Krrish 3 2013 24CR",
"Dabangg 3 2019 23CR",
"Agneepath 2012 22.8CR",
"Fighter 2024 22.5CR",
"Kalki 2898 AD 2024 22.5CR",
"Bodyguard 2011 21.6CR",
"Kalank 2019 21.6CR",
"Besharam 2013 21.55CR",
"M.S. Dhoni: The Untold Story 2016 21.4CR",
"Tubelight 2017 21.15CR",
"Dabangg 2 2012 21.1CR",
"Kesari 2019 21.06CR",

    ],
    "Hollywood Highest Openings India": [
      "AvengersEndgame   62.2crGross",
      "Avatar2   52.55CRGross",
      "SpiderManNoWayHome    41.5CrGross",
      "AvengersInfinityWar   40.5CrGross",
      "DoctorStrange2   36.5CrGross",
      "Deadpool & Wolverine   26CrGross",
      "ThorLoveAndThunder   18.20Cr",
      "Oppenheimer  14.45Cr",
      "FastandFurious:Hobbs & Shaw  13.15Cr",
      "Captain Marvel   12.75Cr",
      "Godzilla x Kong: The New Empire  12.60CR",
      "Black Panther: Wakanda Forever  12.50Cr",
      "Mission: Impossible  Dead Reckoning Part 1    12.27CR",
      "Furious 7  12.05Cr",
      "Batman vs Superman: Dawn of Justice  12Cr",
      "Fast X   11.90CR"
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

export default BoxOffice;