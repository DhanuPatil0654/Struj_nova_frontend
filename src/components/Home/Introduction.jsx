import React from 'react'
import '../../css/Introduction/intro.css'
import company_overview_img from '../../assets/Home/scrroter.png'
function Introduction() {
    return (
        <>
            <div className='container mt-3'>
                <div className='start-intro'>
                    <p className='intro_name'>| Company Overview - </p>
                </div>
                <div class="row">
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="card card-about mt-3">
                            <div class="card-body">
                                <p className='about_company_intro '>
                                    Struj Nova is a forward-thinking electric vehicle company dedicated to driving the future of clean, sustainable transportation. Our mission is to revolutionize mobility by combining cutting-edge technology, eco-friendly design, and reliable performance. We believe in empowering communities with innovative electric vehicles that reduce emissions and promote a greener planet.
                                </p>
                            </div>
                        </div>
                        <div class="card card-about mt-3">
                            <div class="card-body">
                                <p className='about_company_intro '>
                                    At Struj Nova, we are committed to pushing the boundaries of electric vehicle technology and expanding the adoption of EVs worldwide, contributing to a cleaner, smarter, and more sustainable future
                                </p>
                            </div>
                        </div>
                        <button type="button" class="btn custome_btn_read_more mt-3">
                            Read More <span class="arrow">→</span>
                        </button>

                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <img src={company_overview_img} class="img-fluid mt-3" alt="..." />
                    </div>
                </div>






            </div>


        </>
    )
}

export default Introduction
