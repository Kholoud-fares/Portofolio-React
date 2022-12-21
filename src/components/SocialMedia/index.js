import { useState, useEffect} from 'react'
import axios from 'axios'
import {SocialSection, Social, SocialIcon, Paragraph, Span, SpanInfo} from './style.js'

const SocialMedia = () =>{

    const [ social , setSocial]= useState([]);
    useEffect( () => {
        axios.get('js/data.json').then(res => {setSocial(res.data.social)})
    },[])

    const SocialData = social.map( (socialItem) => {
         return(
            <Social item={socialItem.id} key={socialItem.id}>
                <SocialIcon className={socialItem.icon}></SocialIcon>
                <Paragraph>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </Paragraph>
            </Social>
         )
    })

    return(
        <SocialSection>
          {SocialData}
        </SocialSection>

    )
}

export default SocialMedia