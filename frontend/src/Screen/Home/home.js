import React from 'react'
import Footer from '../../Components/Footer/footer'

import img1 from '../../image/Image 1.png'
import img2 from '../../image/Image 2.png'
import img3 from '../../image/Image 3.png'
import Navbar from '../../Components/Navbar/navbar'
import heroImage from '../../image/yummy-pizza-min.png'
import './home.css'

const Home = () => {

    const productCard = (name,img,desc,price) => (
        <div className='product-card'>
            <img src={img} alt='product-image' className='product-image' />
            <h6 className='product-name'>{name}</h6>
            <p className='product-description'>{desc}</p>
            <button className='product-button'>
                <h6>Add to cart</h6>
                <h6>₹{price}</h6>
            </button>
        </div>
    )

    const customerReviewCarousel = () => (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="mt-5 carousel-inner">
        
        <div className='carousel-item active'>
            <>
            <h6 className='review-text text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium blandit 
            nullam sit neque lobortis lectus tempor. Sit quisque eget neque, ullamcorper 
            non elementum id vel. Sollicitudin diam aliquam quam libero elit arcu. Aliquet.
            </h6>
            <div className='customer-info'>
                <img src='https://images.unsplash.com/photo-1548142813-c348350df52b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21pbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt='customer-image' className='review-customer_img' />
                <div>
                <h6 className='customer-name'>Hinata</h6>
                <p className='customer-membership'>customer</p>
                </div>
            </div>
            </>
        </div>

        <div className='carousel-item'>
            <h6 className='review-text text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium blandit 
            nullam sit neque lobortis lectus tempor. Sit quisque eget neque, ullamcorper 
            non elementum id vel. Sollicitudin diam aliquam quam libero elit arcu. Aliquet.
            </h6>
            <div className='customer-info'>
                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21pbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt='customer-image' className='review-customer_img' />
                <div>
                <h6 className='customer-name'>Sakura</h6>
                <p className='customer-membership'>customer</p>
                </div>
            </div>
        </div>

        <div className='carousel-item'>
            <h6 className='review-text text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget pretium blandit 
            nullam sit neque lobortis lectus tempor. Sit quisque eget neque, ullamcorper 
            non elementum id vel. Sollicitudin diam aliquam quam libero elit arcu. Aliquet.
            </h6>
            <div className='customer-info'>
                <img src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt='customer-image' className='review-customer_img' />
                <div>
                <h6 className='customer-name'>Naruto</h6>
                <p className='customer-membership'>customer</p>
                </div>
            </div>
        </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
        </div>
    )

    return (
        <div>
            <Navbar />
            <header className='padding hero-container'>
                <div className='hero-info_container'>
                <h1 className='hero-title'>Less waiting</h1>
                <h1 className='hero-title'>More eating</h1>
                <p className='hero-subtitle'>
                We deliver yummy pizza’s at your doorsteps within 20-30 minutes.
                </p>
                <button className='button'>
                    ORDER NOW
                </button>
                </div>
                <div className='hero-image_container'>
                <img src={heroImage} alt='hero-image' className='hero-image' />
                </div>
            </header>

            <section id='popular-pizzas' className='padding'>
                <h2 className='heading'>Popular Pizzas</h2>
                <div className='popular-pizzas_container'>
                {productCard('Margherita',
                            'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                            'A hugely popular margherita, with a deliciously tangy single cheese topping',
                            '199'
                )}
                {productCard('Farmhouse',
                            'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                            'Delightful combination of onion, capsicum, tomato & grilled mushroom',
                            '399'
                )}
                {productCard('Chicken Sausage',
                            'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBpenphfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                            'American classic! Spicy, herbed chicken sausage on pizza',
                            '309'
                )}
                {productCard('Cheese n Corn',
                            'https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                            'A delectable combination of sweet & juicy golden corn',
                            '309'
                )}
                </div>
            </section>

            <section id='customer-review'>
                <h2 className='heading text-center mb-5'>What our customer say about us</h2>
                {customerReviewCarousel()}
            </section>

            <section id='booking-container' className='padding'>
            <div className='booking-container'>
                <div className='booking-info_container'>
                    <h6 className='booking-text'>
                    Celebrate the joy of birthday with fresh & hot Pizza’s Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi orci pellentesque pretium, orci vel ultricies 
                    </h6>
                    <button className='booking-button'>Book now</button>
                </div>
                <div className='booking-img_container'>
                    <div className='booking-img_set-1'>
                        <img src={img1} alt='img1' className='img1'/>
                        <img src={img2} alt='img2' className='img2'/>
                    </div>
                    <img src={img3} alt='img3' className='img3' />
                </div>
            </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
