import { getBlogs } from "../api.js";
import Blog from "../components/Blog.js";
const Home = {
 render: async()=> {
   const blogs = await getBlogs();
  return `<div>
   <div class="blog-layout container">
        ${blogs.map((blog) => `${Blog.render(blog)}`).join("\n")}
        </div>
        <div class="load-btn">
          <button class="load" id="load">load more</button>
        </div>
  </div>`
 },
 after_render: ()=> {},
}

export default Home;