const innerHTML = `  
<div class="col">
    <img class="logo" src="img/logo.png" alt="Logo">
    <h4>Contact</h4>
    <p><strong>Address:</strong> Delhi Public School, Kolar Road, Bhopal, Madhya Pradesh</p>
    <p><strong>Phone:</strong> +91 9301161940</p>
    <p><strong>Hours:</strong> 08:30 - 12:30, Monday - Friday</p>
    
    <div class="follow">
        <h4>Follow us</h4>
        <div class="icon">
            <a href="https://www.facebook.com/dpskolar/" target="__blank__"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/c/DelhiPublicSchoolKolarRoadBhopal/featured" target="__blank__"><i class="fab fa-youtube"></i></a>
        </div>
    </div>
</div>

<div class="col">
    <h4>About</h4>
    <a href="about.html">About us</a>
    <a href="cart.html">Your Cart</a>
    <a href="contact.html">Contact</a>
</div>

<div class="copyright">
    <p>© 2022 VenDraw, Inc. All Rights Reserved</p>
</div>
`

const footer = document.createElement('footer');
footer.className = "section-p1";
footer.innerHTML = innerHTML;

document.querySelector('body').appendChild(footer);