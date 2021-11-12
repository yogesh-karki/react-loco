import React from 'react';

import SectionHeader from "../SectionHeader"
import "./style.scss"

export default function Footer() {
    return(
        <section className="footer" data-scroll-section>
            <SectionHeader title="Made in" />
            <h1 className='location' id='location-text'>
                Rio de Janerio
            </h1>
        </section>
    )
}