import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="shared-container mt-5 py-5 p-5 ">
           <div className="ml-5">
           <div className="container row ml-5">
               <div className="col-md-6 section-header">
               <h1 style={{fontWeight: 'bold'}}>Let us handle your <br/> project, professionally. </h1>
                    <p className="text-secondary">Our target is to satisfy our clients with professionalism, dedication, sincerity, flexibility and on-time delivery.</p>
                    
               </div>
               <div className="col-md-6 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / company's name *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-brand"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
           </div>
       </section>
            
        </div>
    );
};

export default Contact;