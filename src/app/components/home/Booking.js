import React from 'react'
import Link from 'next/link'

function Booking() {
  return (
    <>
    <section id="booking" className='booking'>
        <div className='stay_detail'>
            <div className='in_out'>
                <label >Check In <br/><input type="date"/></label>
                <label >Check out <br/><input type="date"/></label>
                <label className='guest-no' >Guests <br/> 
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </label>
                <button  className='btn'>
                  <Link className='btn-link' href='/components/booking'>Check Availability</Link>
                </button>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Booking