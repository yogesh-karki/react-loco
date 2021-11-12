import React from 'react';

import "./style.scss"

export default function Featured() {
    return(
        <section className="featured-section" data-scroll-section>
            <div className="featured-row-layout">
                <h6>Green</h6>
                <img src="https://images.unsplash.com/photo-1598838073192-05c942ede858?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=100" alt="" data-scroll >

                </img>
            </div>

            <div className="featured-column-layout">
                <h6>Lily</h6>
                <img src="https://images.unsplash.com/photo-1552248524-10d9a7e4841c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=881&amp;q=100" alt="" data-scroll ></img>
            </div>
        </section>
    )
}