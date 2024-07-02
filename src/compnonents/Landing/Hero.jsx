import React, { useEffect } from 'react';
import './Hero.css'
import img1 from '../Images/1.png'
import img2 from '../Images/2.png'
import img3 from '../Images/3.png'
import img4 from '../Images/4.png'


export default function Hero() {
    useEffect(() => {
        //step 1: get DOM
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');
        
        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.list');
        let thumbnailBorderDom = document.querySelector('.thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 3000;
        let timeAutoNext = 7000;
        
        nextDom.onclick = function(){
            showSlider('next');    
        }
        
        prevDom.onclick = function(){
            showSlider('prev');    
        }
        
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
        
        function showSlider(type){
            let SliderItemsDom = SliderDom.querySelectorAll('.item');
            let thumbnailItemsDom = document.querySelectorAll('.thumbnail .item');
            
            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);
            
            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        }
      }, []);
  return (
    <div className="carousel">
        <div className="list">
            <div className="item">
                <img src={img1} alt="" />
                {/* <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div> */}
            </div>
            <div className="item">
                <img src={img2} alt="" />
                
            </div>
            <div className="item">
            <img src={img3} alt="" />
                
            </div>
            <div className="item">
                <img src={img4} alt="" />
                
            </div>
        </div>
        <div className="thumbnail">
            <div className="item">
                <img src={img1} alt="" />
                
            </div>
            <div className="item">
                <img src={img2} alt="" />
                
            </div>
            <div className="item">
                <img src={img3} alt="" />
                
            </div>
            <div className="item">
                <img src={img4} alt="" />
                
            </div>
        </div>

        <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
        </div>
        <div className="time"></div>
    </div>     
  )
}

