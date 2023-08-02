const skillElement = document.getElementById("card-skill");
const placeElement = document.getElementById("card-place");
const opactElement = document.getElementById("contact-opact1");
const techElement = document.getElementById("tech");
const homeElement = document.getElementById("ihome");
const home2Element = document.getElementById("ihome2");

function linkPages(name1){

    name1.addEventListener('click',e => {
        e.preventDefault();
       opactElement.classList.add('opacity-25');
       placeElement.innerHTML = `
       <div id="contact-email" class=" card w-96 bg-base-100 shadow-xl absolute top-10 inset-x-10 sm:inset-x-1/3 ml-5">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Contact" /></figure>
        <div class="card-body">
          <h2 class="card-title">E-Mail</h2>
          <p>solydenis38@gmail.com</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary"><a href=${name1.href}>Back</a></button>
          </div>
        </div>
      </div> 
       `;
    })   
}

function techList(name1){

    name1.addEventListener('click',e => {
        e.preventDefault();
       opactElement.classList.add('opacity-25');
       skillElement.innerHTML = `
       <div id="contact-email" class="fixed card w-96 bg-base-100 shadow-xl absolute top-10 inset-x-10 sm:inset-x-1/3 ml-5">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Tech List" /></figure>
        <div class="card-body">
        <div class="overflow-x-auto h-96 hover">
        <table class="table table-pin-rows ">
        <thead>
          <tr class=" hover ">
            <th>Web Developement</th>
          </tr>
        </thead>
        <tbody>
          <tr class=" hover "><td>HTML</td></tr>
          <tr class=" hover "><td>CSS</td></tr>
          <tr class=" hover "><td>TailwindCSS</td></tr>
          <tr class=" hover "><td>DaisyUI</td></tr>
          <tr class=" hover "><td>Figma</td></tr>
          <tr class=" hover "><td>JavaScript</td></tr>
          <tr class=" hover "><td>React.js</td></tr>
          <tr class=" hover "><td>Node.js</td></tr>
          <tr class=" hover "><td>PostgreSQL</td></tr>
          <tr class=" hover "><td>Supabase</td></tr>
          <tr class=" hover "><td>OpenAI</td></tr>
          <tr class=" hover "><td>REST API</td></tr>
          <tr class=" hover "><td>slacks</td></tr>
          <tr class=" hover "><td>github</td></tr>
          <tr class=" hover "><td>git bash</td></tr>
          <tr class=" hover "><td>zenhub</td></tr>
          <tr class=" hover "><td>jsitor</td></tr>
          <tr class=" hover "><td>sandbox</td></tr>
          <tr class=" hover "><td>D.O.M.</td></tr>
          <tr class=" hover "><td>UI/UX Design</td></tr>
          <tr class=" hover "><td>Around</td></tr>
          <tr class=" hover "><td>Python</td></tr>
        </tbody>
        </table>
        </div>         
          <div class="card-actions justify-end">
            <button class="btn btn-primary"><a href=${name1.href}>Back</a></button>
          </div>
        </div>
      </div> 
       `;
    })    
}
 
linkPages(homeElement);
linkPages(home2Element);
techList(techElement);


