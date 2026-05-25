import React,{useEffect} from 'react'
import labo from '../assets/subservices/labo.png'
import imag from '../assets/subservices/imag.png'
import cover from '../assets/subservices/cover.png'
import recoveryservice from '../assets/subservices/recoveryservice.png'
import surg from '../assets/subservices/surg.png'
import medb from '../assets/subservices/medb.png'
import phs from '../assets/subservices/phs.png'
import city from '../assets/subservices/city.png'
import './s5.css'


export default function CarousalServices() {
useEffect(() => {
    const nexButton = document.getElementById('nex');
    const preButton = document.getElementById('pre');
    const carou = document.querySelector('.carou');
    const listHTML = document.querySelector('.carou .list'); // Updated selector
    // const seeMoreButtons = document.querySelectorAll('.seeMore');

    let unAcceppClick;
    const showSlider = (type) => {
      nexButton.style.pointerEvents = 'none';
      preButton.style.pointerEvents = 'none';

      carou.classList.remove('nex', 'pre');
      let items = document.querySelectorAll('.carou .list .item'); // Updated selector
      if (type === 'nex') {
        listHTML.appendChild(items[0]);
        carou.classList.add('nex');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carou.classList.add('pre');
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nexButton.style.pointerEvents = 'auto';
        preButton.style.pointerEvents = 'auto';
      }, 2000);
    };

    nexButton.onclick = function () {
      showSlider('nex');
    };
    preButton.onclick = function () {
      showSlider('pre');
    };

    // seeMoreButtons.forEach((button) => {
    //   button.onclick = function () {
    //     carou.classList.remove('nex', 'pre');
    //     carou.classList.add('showDetail');
    //   };
    // });

    // backButton.onclick = function () {
    //   carou.classList.remove('showDetail');
    // };

    return () => {
      nexButton.onclick = null;
      preButton.onclick = null;
    //   seeMoreButtons.forEach((button) => {
    //     button.onclick = null;
    //   });
    //   backButton.onclick = null;
    };
  }, []);


const items=[
    {
        image:city,
        title:'Hospital Billing Services',
        desc:'Our Hospital Billing Services ensure accurate and timely claim submissions, optimizing revenue cycle management for healthcare institutions.', 
    },
    {
        image:phs,
        title:'Physician Billing Services',
        desc:'Our Physician Billing Services streamline the billing process, ensuring faster reimbursements and reducing administrative burdens for medical practices.', 
    },
    {
        image:labo,
        title:'Laboratory Billing Services',
        desc:'Our Laboratory Billing Services streamline the billing process, ensuring precise claims management and faster reimbursements for diagnostic labs.', 
    },
    {
        image:imag,
        title:'Imaging Center Services',
        desc:'Our Imaging Center Services streamline billing and coding processes, ensuring fast reimbursements and compliance with industry standards for radiology centers.', 
    },
    {
        image:cover,
        title:'Coverage Discovery',
        desc:'Our Coverage Discovery service identifies overlooked insurance coverage, ensuring maximum reimbursement and minimizing patient out-of-pocket expenses.', 
    },
    {
        image:recoveryservice,
        title:'AR Recovery Services',
        desc:'Our A/R Recovery Services are designed to quickly recover outstanding payments, reducing aged receivables and improving your cash flow.', 
    },
    {
        image:surg,
        title:'Ambulatory Surgery Billing',
        desc:'Our Ambulatory Surgery Billing streamlines the billing process, ensuring fast reimbursements and reducing claim denials for outpatient surgical centers.', 
    },
    {
        image:medb,
        title:'Medical Billing Services',
        desc:'Our comprehensive Medical Billing Services streamline the revenue cycle, reduce errors, and maximize reimbursements for healthcare providers.', 
    },
]


  return (
    <div class="carou">
        <div class="list">
            {
                items.map((itemservice)=>{
                    return(
                        <div class="item">
                        <img src={itemservice.image} alt={itemservice.title} />
                        <div class="introduce">
                            <div class="title text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-700 bg-clip-text text-transparent  mb-4  ">{itemservice.title}</div>
                            {/* <div class="topic">{itemservice.title}</div> */}
                            <div class="des text-md lg:text-xl text-gray-700">{itemservice.desc}</div>
                            {/* <button class="seeMore">SEE MORE &#8599;</button> */}
                        </div>
                    </div>
                    )
                })
            }
           
        </div>
        <div class="arrowss">
            <button id="pre">&#60;</button>
            <button id="nex">&#62;</button>
            {/* <button id="back">See All  &#8599;</button> */}
        </div>
    </div>
  )
}


