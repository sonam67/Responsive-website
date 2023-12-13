const Landing_page = () => {
  return (
    <div className="landing-page-content">
      <div className="left-content">
        <div className="heading">
          <p>
            <span className="black">Explore your </span>
            <span className="skyblue">hobby</span>
            <span className="black"> or </span>
            <span className="purpul">passion</span>
          </p>
        </div>
        <div className="text1">
          <p>
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p>
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
        </div>
        <div className="group-img">
          <img src="/images/group.png"></img>
        </div>
      </div>
      <div className="right-content">
        <ul>
          <button id="sign-btn" type="submit">Sign In</button>
          <button id="sign-btn" type="submit">Join In</button>
        </ul>
       
        <button id="btn2"> <img id="contect-img" src="/images/Google.png"></img>Continue With Google</button>
        
            <button id="btn2"><img  id="contect-img" src="/images/Facebook.png"></img>Continue With Facebook</button>
        <p className="pera">or connect with</p>
        
            <input  id="btn1" type="email" name="email" placeholder="Email"></input>
          
            <input id="btn1" type="password" name="password" placeholder="Password"></input><br/>
            <input id="checkbox" type="checkbox"></input><label>Remember Me</label>
            <button id="btn2" type="submit">Continue</button>
        
      </div>
    </div>
  );
};

export default Landing_page;
