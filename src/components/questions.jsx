import Link from "next/link";
import { useState } from "react";

export default function Questions() {
    const [open,setOpen] = useState(0);
    function collapse(e,i){
        console.log(e,i)
        e.preventDefault()
        if (open==i){
            setOpen(0)
        }
        else{
            setOpen(i)
        }
    }
  
  return (
    <section>
   <div className="live_proxies_faqs_main_con">     
     <div className="container live_proxies_faqs_con">
      <h2>Frequently asked <span>questions</span></h2>
      <h6>Please visit our <Link href="https://helpcenter.liveproxies.io/hc/en-us" target="_blank">Help Center</Link> if you have questions that are not listed below</h6>
       <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
         <div className="panel panel-default">
           <div className={open == 1 ? "panel-heading active":"panel-heading "}  role="tab" id="headingTwo">
             <h4 className="panel-title">
               <a className="collapsed" onClick={(e)=>{
                collapse(e,1)
               }} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">What are the PRIVATE Live Proxies?
               </a>
             </h4>
           </div>
           <div id="collapseTwo" className={open == 1 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingTwo">
             <div className="panel-body">Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</div>
           </div>
         </div> 
           <div className="panel panel-default">
             <div className={open == 2 ? "panel-heading active":"panel-heading "} role="tab" id="headingFour">
               <h4 className="panel-title">
                 <a className="collapsed" onClick={(e)=>{
                collapse(e,2)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">How can I join the Live Proxies Discord server?
                 </a>
               </h4>
             </div>
             <div id="collapseFour" className={open == 2 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingFour">
		        <div className="panel-body"><span>Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</span>
                </div>
             </div>
           </div>
           <div className="panel panel-default">
             <div className={open == 3 ? "panel-heading active":"panel-heading "} role="tab" id="headingFive">
               <h4 className="panel-title">
                 <a className="collapsed"  onClick={(e)=>{
                collapse(e,3)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseThree">Do you guys offer no data-limited plans?</a>
               </h4>
             </div>
             <div id="collapseFive" className={open == 3 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingFive">
              <div className="panel-body">Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</div>
             </div>
          </div>
         <div className="panel panel-default">
           <div className={open == 4 ? "panel-heading active":"panel-heading "} role="tab" id="headingThree">
             <h4 className="panel-title">
               <a className="collapsed"  onClick={(e)=>{
                collapse(e,4)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">Do you ever plan on making ISP or DC proxies?
               </a>
             </h4>
           </div>
           <div id="collapseSeven" className={open == 4 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingThree">
             <div className="panel-body">Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</div>
             </div>
           </div>
           <div className="panel panel-default">
             <div className={open == 5 ? "panel-heading active":"panel-heading "} role="tab" id="headingEight">
               <h4 className="panel-title">
                 <a className="collapsed"  onClick={(e)=>{
                collapse(e,5)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEight" aria-expanded="false" aria-controls="collapseThree">Are those residential proxies only?
                 </a>
               </h4>
             </div>
             <div id="collapseEight" className={open == 5 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingEight">
		         <div className="panel-body"><span>Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</span>
                 </div>
             </div>
           </div>
           <div className="panel panel-default">
             <div className={open == 6 ? "panel-heading active":"panel-heading "} role="tab" id="headingNine">
               <h4 className="panel-title">
                 <a className="collapsed"  onClick={(e)=>{
                collapse(e,6)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseNine" aria-expanded="false" aria-controls="collapseThree">Can I filter the proxies by state, city, and ISP carrier?</a>
               </h4>
             </div>
             <div id="collapseNine" className={open == 6 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingNine">
		         <div className="panel-body">Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</div>
             </div>
           </div>
           <div className="panel panel-default">
             <div className={open == 7 ? "panel-heading active":"panel-heading "} role="tab" id="headingTen">
               <h4 className="panel-title">
                 <a className="collapsed"  onClick={(e)=>{
                collapse(e,7)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTen" aria-expanded="false" aria-controls="collapseThree">What are the best use cases for Live Proxies?</a>
               </h4>
             </div>
             <div id="collapseTen" className={open == 7 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingTen">
                 <div className="panel-body">Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</div>
             </div>
           </div>
           <div className="panel panel-default">
             <div className={open == 8 ? "panel-heading active":"panel-heading "} role="tab" id="headingEleven">
               <h4 className="panel-title">
                 <a className="collapsed"  onClick={(e)=>{
                collapse(e,8)
               
               }}  role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven" aria-expanded="false" aria-controls="collapseThree">What are the websites Live Proxies works best?</a>
               </h4>
             </div>
             <div id="collapseEleven" className={open == 8 ? "panel-collapse ":"panel-collapse collapse"} role="tabpanel" aria-labelledby="headingEleven">
              <div className="panel-body">Technically it&apos;s possible, but you won&apos;t find this option on your dashboard. To match your custom solution requirements, you must open a ticket on our Discord server or email us.</div>
             </div>
           </div>
        </div>
      </div>
	</div>
 </section>  
  );
}
