const Middle = () => {
  return (
    <div className="container">
      <h5><img src="/images/Add.png"></img>Add Your Listing</h5>
      <div className="boxes1">
        <div className="box1">
          <div className="imgstyle">
            <img src="/images/people.png" />
            People
          </div>
          <div className="text">
            <p>An Individual or Organization.
              Teacher, Coach, Professional or Online Seller.  Company, Business or Association.</p>
          </div>
          <button className="btn add-heading">Add New</button>
        </div>

        <div className="box2">
          <div className="imgstyle">
            <img src="/images/place.png"></img>Place
          </div>
          <div className="text">
            <p>An Address.  
            Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.</p>
          </div>
          <button className="btn add-heading">Add New</button>
        </div>
      </div>
      <div className="boxes2">
        <div className="box3">
          <div className="imgstyle">
            <img src="/images/product.png"></img>Product
          </div>
          <div className="text">
            <p>An Item that you can Book, 
                Buy or Rent.  Appointment, Ticket, or Voucher.  Equipment, Instrument or Activity Kit.</p>
          </div>
          <button className="btn add-heading">Add New</button>
        </div>

        <div className="box4">
          <div className="imgstyle">
            <img src="/images/program.png"></img>Programs
          </div>
          <div className="text">
            <p>An Event with Venue and Date.  Meetup, Workshop or Webinar. 
             Exhibition, Performance or Competition.</p>
          </div>
          <button className="btn add-heading">Add New</button>
        </div>
      </div>
    </div>
  );
};
export default Middle;
