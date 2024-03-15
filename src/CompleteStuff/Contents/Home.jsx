import React, { useState } from 'react'
import './Style.css'
import Search from '../Assets/search-line.png'
import Cart from '../Assets/shopping-cart-line.png'
import Account from '../Assets/account-circle-line.png'
import Menu from '../Assets/menu.png'
import Star from '../Assets/star-line.png'
import Bill from '../Assets/Bill_Gates.jpg'
import BL1 from '../Assets/bl-1.png'
import BL2 from '../Assets/bl-2.png'
import BL3 from '../Assets/bl-3.png'
import Insta from '../Assets/instagram-line.png'
import Whatsapp from '../Assets/whatsapp-line.png'
import Linkedin from '../Assets/linkedin.png'
import Git from '../Assets/github.png'
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img4 from '../Assets/4.jpg'
import img5 from '../Assets/5.jpg'
import img6 from '../Assets/6.jpg'
import img7 from '../Assets/7.jpg'
import img8 from '../Assets/8.jpg'


function Home() {
    const[icon, setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
    const closeSideDrawer = () => {
        setIcon(false)
    }
  return (
    
    <div>
        <header>
        <h2>Wee-Wee</h2>
        
        <ul className={icon ? 'nav-menu active' : 'nav-menu'}>
            <li><a href="#Home" onClick={closeSideDrawer}>Home</a></li>
            <li><a href="#Shopping" onClick={closeSideDrawer}>Shop</a></li>
            <li><a href="#Reviews" onClick={closeSideDrawer}>Review</a></li>
            <li><a href="#Update" onClick={closeSideDrawer}>Update</a></li>
            <li><a href="#Contact" onClick={closeSideDrawer}>Contact</a></li>
        </ul>
        <div className="icons">
            <img src={Search} alt='No img'/>
            <img src={Cart} alt='No img'/>
            <img src={Account} alt='No img'/>
        </div>
        <div className='bc bx-menu' id="menu-icon" onClick={handleClick}>
            <img src={Menu} alt='no img'/> 
        </div>
    </header>

    <section class="homepage">
        <div class="main text">
            <h2>Winter Collections</h2>
            <h5>New Winter <br/> Collection</h5>
            <p>There's nothing like trend</p>
        </div>
    </section>

    <section className="products-page">
        <div className="products">
            <div className="detail">
                <div className="row">
                    <img src={img1} alt='img'/>
                </div>
                <div className="stars">
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div class="price">
                    <h2>Beach Dress</h2>
                    <p>$13 - $15</p>
                </div>
            </div>


            <div className="detail">
                <div class="row">
                    <img src={img2} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div class="price">
                    <h2>Travel Dress</h2>
                    <p>$14 - $18</p>
                </div>
            </div>


            <div className="detail">
                <div className="row">
                    <img src={img3} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div class="price">
                    <h2>Indoor Clothes</h2>
                    <p>$12 - $13</p>
                </div>
            </div>


            <div className="detail">
                <div className="row">
                    <img src={img4} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div class="price">
                    <h2>Summer suit</h2>
                    <p>$12 - $13</p>
                   
                </div>
            </div>


            <div className="detail">
                <div className="row">
                    <img src={img5} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div className="price">
                    <h2>Casual Dress</h2>
                    <p>$10 - $11</p>
                </div>
            </div>


            <div className="detail">
                <div className="row">
                    <img src={img6} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div className="price">
                    <h2>Office suit</h2>
                    <p>$20 - $21</p>
                </div>
            </div>

            <div className="detail">
                <div className="row">
                    <img src={img7} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div className="price">
                    <h2>Outing Dress</h2>
                    <p>$5 - $9</p>
                </div>
            </div>

            <div className="detail">
                <div className="row">
                    <img src={img8} alt='img'/>
                </div>
                <div className="stars">
                <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                    <img src={Star} alt='img'/>
                </div>
                <div className="price">
                    <h2>Part Dress</h2>
                    <p>$12 - $13</p>
                </div>
            </div>

        </div>
    </section>

    

    <section className="review-section">
        <div className="reviews">
            <h3>Client Reviews</h3>
            <img src={Bill} alt='img'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut incidunt quod molestiae eum sapiente
                saepe, non dignissimos tempore similique?</p>

            <h2>Bill Gates</h2>
            <p>CEO of Microsoft</p>
        </div>

    </section>

    <section className="update-news">
        <div className="up-center-text">
            <h2>New Updates</h2>
        </div>

        <div className="update-cart">
            <div className="cart">
                <img src={BL1} alt='img'/>
                <h5>26 jan 2024</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid et saepe quia, alias error impedit
                    animi fugit. Sequi nisi ex ut aperiam natus. Voluptatum quisquam harum beatae neque quia
                    dignissimos!</p>
            </div>

            <div className="cart">
                <img src={BL2} alt='img'/>
                <h5>26 jan 2024</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid et saepe quia, alias error impedit
                    animi fugit. Sequi nisi ex ut aperiam natus. Voluptatum quisquam harum beatae neque quia
                    dignissimos!</p>
            </div>

            <div className="cart">
                <img src={BL3} alt='img'/>
                <h5>26 jan 2024</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid et saepe quia, alias error impedit
                    animi fugit. Sequi nisi ex ut aperiam natus. Voluptatum quisquam harum beatae neque quia
                    dignissimos!</p>
            </div>
        </div>
    </section>



    <section className="contact">
        <div className="contact-info">
            <div className="first-info">
                <h2>Wee-Wee</h2>
                    <p>31, Long view Road, Coimbatore</p>
                    <p>6379170347</p>
                    <p>karthickprakash.info@gmail.com</p>

                    <div className="social-icons">
                        <img src={Insta} alt='img'/>
                        <img src={Whatsapp} alt='img'/>
                        <img src={Linkedin} alt='img'/>
                        <img src={Git} alt='img'/>
                    </div>
                </div>
                    <div class="second-info">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>About page</p>
                        <p>Size guide</p>
                        <p>Shopping & Returns</p>
                        <p>Privacy</p>
                    </div>

                    <div class="third-info">
                        <h4>Shop</h4>
                        <p>Men's Shopping</p>
                        <p>Women's Shopping</p>
                        <p>Kid's Shopping</p>
                        <p>Furniture</p>
                        <p>Discounts</p>
                    </div>

                    <div class="fourth-info">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Affiliate</p>
                        <p>Login</p>
                    </div>

            
        </div>
    </section>

    </div>
    
  )
}



export default Home