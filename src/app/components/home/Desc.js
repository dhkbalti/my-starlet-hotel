import './home.css'
import './responsive.css'

function Desc() {
  return (
    <>
      <section className='whyUs'>
            <div className='heading'>
              <h1>Why Choose Al Noor Starlet Hotel?</h1>
            </div>
            
            <div className="about">
              <div className='about-box'>
                <div className='box' >
                  <h2 >Stunning Views</h2>
                  <p>Enjoy breathtaking views from our rooms and common areas. whether it's a cityscape,garden,or scenic landscape, the picturesque vistas add a touch of tranquility to your stay.</p>
                </div>
      
                <div  className='box-img'>
                  <img src='/images/lown.jpg'/>
                </div>
              </div>
              
              <div className='about-box'>   
                <div  className='box-img'>
                  <img src='/images/reseption.jpg'/>
                </div>
                
                <div className='box' >
                  <h2 >Exceptional Staff and <br/> Reception</h2>
                  <p>From the moment you step into Al Noor Starlet Hotel, you'll be greeted by our friendly and professional reception team. Our staff is available 24/7 to assist with check-ins, travel arrangements, and any special requests. ensuring your stay is as comfortbable and hassle-free as possible.</p>
                </div>
              </div>
              
              <div className='about-box'>
                <div className='box' >
                  <h2 >Luxurious Rooms</h2>
                  <p>Experience exceptional comfort in our elegantly designed rooms, featuring plush bedding and modern amenities to ensure a restful stay. Choose from a variety of room types, each offering unique features to suit your needs, from spacious suites to cozy single rooms</p>
                </div>
      
                <div  className='box-img'>
                  <img src='/images/mainSuite.jpg'/>
                </div>
              </div>
            </div>
            
          
        </section>
    </>
  )
}

export default Desc