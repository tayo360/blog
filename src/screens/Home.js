const Home = {
 render: ()=> {
  return `<div>
   <div class="blog-layout container">
          <div class="blog">
            <div class="blog-img">
              <a href="/#/"><img src="wp-images/Gallery 1.jpg" alt="" /></a>
            </div>
            <div class="blog-text">
              <h2>
                <a href="/#/">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
              </h2>
              <div class="d-flex">
                <div class="category">App Design</div>
                <div class="date">26th August 2021</div>
              </div>
              <div class="author d-flex">
                <div class="author-image">
                  <img src="wp-images/profile.jpg" alt="" />
                </div>
                <div class="author-name">tayo</div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-img">
              <a href="/#/"><img src="wp-images/Gallery 3.jpg" alt="" /></a>
            </div>
            <div class="blog-text">
              <h2>
                <a href="/#/">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
              </h2>
              <div class="d-flex">
                <div class="category">App Design</div>
                <div class="date">26th August 2021</div>
              </div>
              <div class="author d-flex">
                <div class="author-image">
                  <img src="wp-images/profile.jpg" alt="" />
                </div>
                <div class="author-name">tayo</div>
              </div>
            </div>
          </div>
          <div class="blog">
            <div class="blog-img">
              <a href="/#/"><img src="wp-images/Gallery 6.jpg" alt="" /></a>
            </div>
            <div class="blog-text">
              <h2>
                <a href="/#/">Lorem ipsum dolor sit amet consectetur adipisicing.</a>
              </h2>
              <div class="d-flex">
                <div class="category">App Design</div>
                <div class="date">26th August 2021</div>
              </div>
              <div class="author d-flex">
                <div class="author-image">
                  <img src="wp-images/profile.jpg" alt="" />
                </div>
                <div class="author-name">tayo</div>
              </div>
            </div>
          </div>
        </div>
        <div class="load-btn">
          <button class="load" id="load">load more</button>
        </div>
  </div>`
 },
 after_render: ()=> {},
}

export default Home;