import React from 'react'
import './footer.css'

const Footer = () => {

    const footerComponent = (title,subtitles) => (
        <div className='footer-normal_component'>
            <h6 className='footer-title'>{title}</h6>
            {subtitles.map((p,i) =>(
                <div key={i}>
                    <p className='footer-subtitle'>{p}</p>
                </div>
            ))}
        </div>
    )

    const footerResponsive = (title,subtitles,ids) => (
        <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${ids}`} aria-expanded="false" aria-controls="flush-collapseOne">
        {title}
        </button>
        </h2>
        <div id={ids} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent={`#${ids}`}>
        <div class="accordion-body">
        {subtitles.map((p,i) =>(
                <div key={i}>
                    <p className='footer-subtitle'>{p}</p>
                </div>
            ))}
        </div>
        </div>
        </div>
    )

    const company = ['Overview','Features','Pricing','Coupon']
    const about = ['Gift Card','Card Balance Enquiry','FAQ']
    const legal = ['Disclaimer','Terms & Conditions','Privacy Policy']

    return (
        <>
        <footer className='footer-container padding'>
            <div className='footer-padding '>
            <div className='footer-component_container'>
                <div>
                <h6 className='footer-logo'>Yummy Pizza</h6>
                <p className='footer-logo_subtitle'>We deliver you Yummy Pizza's at your doorsteps within 20-30 minutes.</p>
                </div>
                <div className='footer-inner_component-container'>
                {footerComponent('Company', company)}
                {footerComponent('About', about)}
                {footerComponent('Legal', legal)}
                </div>
                <div className='footer-responsive_components'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                {footerResponsive('Company', company,'c')}
                {footerResponsive('About', about,'a')}
                {footerResponsive('Legal', legal,'l')}
                </div>
                </div>
            </div>

          
            </div>
        </footer>
        <div className='footer-bottom padding'>
                <p className='footer_bottom-text'>Copyright &copy; Yummy Pizza</p>
                <div className='footer-social_container'>
                <a href='https://www.instagram.com/jaisriram_r/'><i class="fab fa-instagram"></i></a>

                <a href='https://www.behance.net/jaisriram-r/'><i class="fab fa-behance"></i></a>
                </div>
            </div>
            </>
    )
}

export default Footer
