import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import ContactImage from '../../../assets/contact/banner.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Contact = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro | Contact</title>
            </Helmet>
            <Cover img={ContactImage} title='CONTACT US' subTitle='Would You Like To Try To Dish ?'></Cover>
             <SectionTitle heading='OUR LOCATION' subHeading='Visit Us'></SectionTitle>
            
        </div>
    );
};

export default Contact;