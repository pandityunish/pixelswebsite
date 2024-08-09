import ContactInfo from '@/components/ConactComponent/ContactInfo'
import GoogleMap from '@/components/ConactComponent/GoogleMap'
import ImageSection from '@/components/ExperienceComponent/ImageSection'
import OurFooter from '@/components/Footer'
import React from 'react'

export default function ContactUs() {
  return (
    <div className='mt-10'>
        <ImageSection image='/aboutus.jpg' subtitle='Home/contact-us' title='Contact Us'/>
<ContactInfo/>
<GoogleMap/>
<OurFooter/>

    </div>
  )
}
