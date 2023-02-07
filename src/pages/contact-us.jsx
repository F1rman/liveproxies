import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import $ from 'jquery';
export default function ContactUs() {
    useEffect(()=>{
            $('.faqs_languages_dropdown >   .faqs_languages_caption').on('click', function() {
               $(this).parent().toggleClass('open');
             });
   
             $('.faqs_languages_dropdown > .faqs_languages_list >   .faqs_languages_item').on('click', function() {
               $('.faqs_languages_dropdown > .faqs_languages_list >   .faqs_languages_item').removeClass('selected');
               $(this).addClass('selected').parent().parent().removeClass  ('open').children('.faqs_languages_caption').text(   $(this).text() );
             });
   
             $(document).on('keyup', function(evt) {
               if ( (evt.keyCode || evt.which) === 27 ) {
                 $('.faqs_languages_dropdown').removeClass('open');
               }
             });
   
             $(document).on('click', function(evt) {
               if ( $(evt.target).closest(".faqs_languages_dropdown >   .faqs_languages_caption").length === 0 ) {
                 $('.faqs_languages_dropdown').removeClass('open');
               }
             });
   
      },[])
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
    <div className="contact_us_page_wrapper">
        <Header />
      <section className="">
     <div className="container contact_us_con">		 
		 <div className="col-lg-6 col-md-12 col-sm-12  col-xs-12 contact_us_sub_con1">			 
		   <h2>Contact</h2> 
		   
			 <h4>Need to get in touch with us?</h4>
			 <h3>Please fill out the form below with your inquiry or email us at  <Link href="/#!">team@liveproxies.io</Link></h3>
	       <form>
              <div>				
                <input id="myInput" type="email" placeholder="Full name*" required />				  
				<br />				  
  		          <div className="creatfaqs_languages dropdown">
                     <div className="faqs_languages container">
                       <div className={"faqs_languages_dropdown"}> 
                         <div  className="faqs_languages_caption">Choose an issue or case*</div>
				         <img src="/images/contact-us-arrow-down-icon.svg" />
                         <div className={"faqs_languages_list"}>
                           <div  className="faqs_languages_item">Case/Issue 1</div>
                           <div  className="faqs_languages_item">Case/Issue 2</div>
                           <div  className="faqs_languages_item">Case/Issue 3</div>
                           <div  className="faqs_languages_item">Case/Issue 4</div>
                           <div className="faqs_languages_item">Case/Issue 5</div>
                         </div>
                       </div>
                     </div>
                  </div>
				<br />
                <input id="myInput" type="email" placeholder="Company name (Optional)" required /> 
				<br />				
                <input id="myInput" type="email" placeholder="Email address*" required />				  
				<br />				
                <textarea placeholder="Leave a message*" required></textarea>				  
              </div>			   
             <button type="submit" className="contact_us_send_btn">Get in touch</button>
           </form>			 
		 </div>		 
		 <div className="col-lg-6 col-md-12 col-sm-12  col-xs-12 contact_us_sub_con2 text-left"> 			 
		    <h2>Support</h2> 			 
			<h3>Check our comprehensive <Link href="/custom-pricing.html">Help Center & FAQ</Link> to find the answers of your questions or create a ticket.</h3>					 
			<h5>Join us on our <Link href="/#!">Discord server</Link>. The best way for us to provide our users with instant support would be through Discord. You can open a ticket, follow the announcements, chat with the other users, participate in giveaways and enjoy the privileged discount codes.</h5>			 			 
		 </div>
     </div>
  </section>
  </div>
  <Footer />

    </>
  );
}