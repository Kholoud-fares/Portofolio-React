import { useState, useEffect} from 'react'
import axios from 'axios'
import {PortofolioSection, PortofolioTitle, Span, PortofolioList, PortofolioItem, ImageWrapper, Image, OverLay, OverLaySpan} from  './style.js'

const Portofolio = () =>{

    const [ images , setImages]= useState([]);
    useEffect( () => {
        axios.get('js/data.json').then(res => {setImages(res.data.portfolio)})
    },[])

    const PortofolioImages = images.map( (imageItem) => {
         return(
            <ImageWrapper key={imageItem.id}>
            <Image src={imageItem.image} alt="" />
            <OverLay>
                <OverLaySpan>
                    Show Image
                </OverLaySpan>
            </OverLay>
        </ImageWrapper>
         )
    })
    return(
        <PortofolioSection>
            <PortofolioTitle><Span>My</Span> Portfolio</PortofolioTitle>
            <PortofolioList>
                <PortofolioItem active>All</PortofolioItem>
                <PortofolioItem>HTML</PortofolioItem>
                <PortofolioItem>Photoshop</PortofolioItem>
                <PortofolioItem>Wordpress</PortofolioItem>
                <PortofolioItem>Mobile</PortofolioItem>
            </PortofolioList>
            
            <div>
                {PortofolioImages}  
            </div>
            
        </PortofolioSection>

    )
}

export default Portofolio