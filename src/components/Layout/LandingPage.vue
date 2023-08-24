<template>
  <div>
    <div class="section_2 py-3">
      <div class="container mb-5">
        <div class="row">
          <div class="col-md-8 row">
            <div class="box_1 col-md-10 p-0 mt-4 ">
              <div class="container light_item">
                <div class="d-flex flex-column py-5" style="margin-top: 20px;">
                  <p class="get_ahead">Get Ahead of Competition with</p>
                  <p class="foreign">FOREIGN LANGUAGE SERVICE COMPANY</p>
                    <div class=" d-flex justify-content-center mt-1">
                      <div class="inbox col-md-5 d-flex">
                        <div class="col-md-4 d-flex align-items-center justify-content-center flaticon-medal"  style="background-color: #DDE1E6;">
                        </div>
                        <div class="col-md-8 " style="padding: 12px;">
                          <p style="margin-bottom: 0; color:#FF6600 ; font-weight:500">250+</p>
                          <p class="language">Happy customer</p>
                        </div>
                      </div>
                      <div class="inbox col-md-5 d-flex">
                        <div  class="col-md-4 d-flex align-items-center justify-content-center flaticon-typing-1" style="background-color: #DDE1E6;">
                          
                        </div>
                        <div  class="col-md-8"  style="padding: 12px;">
                          <p style="margin-bottom: 0; color:#FF6600 ; font-weight:500">600+</p>
                          <p class="language">Completed projects</p>
                        </div>
                      </div>
                    </div>  
                    <div class=" d-flex justify-content-center mt-3">
                      <div class="inbox col-md-5 d-flex">
                        <div class="col-md-4 d-flex align-items-center justify-content-center flaticon-world " style="background-color: #DDE1E6;">
                          
                        </div>
                        <div class="col-md-8 " style="padding: 12px;">
                          <p style="margin-bottom: 0; color:#FF6600; font-weight:500">108K+</p>
                          <p class="language">Available Resources</p>
                        </div>
                      </div>
                      <div class="inbox col-md-5 d-flex">
                        <div  class="col-md-4 d-flex align-items-center justify-content-center flaticon-customer-service" style="background-color: #DDE1E6;">
                          
                        </div>
                        <div  class="col-md-8"  style="padding: 12px;">
                          <p style="margin-bottom: 0; color:#FF6600; font-weight:500">11K+</p>
                          <p class="language">Subscribers</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
              </div>
            </div>
            <div class="ahead-icons row mt-4">
              <div class="title text-white my-3">TRUST BY:</div>
              <div class="d-flex flex-wrap">
                <div class="m-3 icon_item">
                  <div class="ahead-item d-flex align-items-center">
                    <div class="icon"><img src="images/icon1.png" height="50px"></div>
                    <!-- <div class="m-1 word text-white">ARIBA</div> -->
                  </div>
                </div>
                <div class="m-3 icon_item">
                  <div class="ahead-item d-flex align-items-center">
                    <div class="icon"><img src="images/icon2.png" height="50px"></div>
                    <!-- <div class="m-1 word text-white">Discovery</div> -->
                  </div>
                </div>
                <div class="m-3 icon_item">
                  <div class="ahead-item d-flex align-items-center">
                    <div class="icon"><img src="images/icon3.png" height="50px"></div>
                    <div class="m-1 word text-white"></div>
                  </div>
                </div>
                <div class="m-3 icon_item">
                  <div class="ahead-item d-flex align-items-center">
                    <div class="icon"><img src="images/icon4.png" height="50px"></div>
                    <!-- <div class="m-1 word text-white">logoipsum</div> -->
                  </div>
                </div>
              </div>
          </div>
          </div>
          <div class=" col-md-4 mt-3 row" >
            <div class="col-md-10 mx-auto">
              <div class="box-shadow">
                <div class="py-3 bg-opacity">
                  <p class='text-center' style="margin-bottom: 0; font-size:20px; color:#fff;line-height: 16px;padding-bottom: 5px; font-family: Roboto, monospace;">Request a <span class="free">FREE QUOTE</span></p>
                  <p class='text-center' style="margin-bottom: 0; font-size:16px; color:#fff; padding-bottom: 5px;">Partner with Multilingual Experts!</p>
                  <p class='text-center' style="margin-bottom: 0;font-size:14px; color:#fff">Save your cost within 12 Hours.</p>
                </div>
                <div class="contact_us d-flex flex-column py-3">
                  <form @submit.prevent="submitForm">
                    <div class="input_item">
                      <input type="text" name="name" id="name" placeholder="Name" v-model="name">
                    </div>
                    <div class="input_item">
                      <input type="text" name="name" id="name" placeholder="Email" v-model="email">
                    </div>
                    <div class="input_item d-flex">
                      <span class="input-group-text rounded-0" style="border-color: #FF6600;" id="basic-addon1">IN</span>
                      <input type="text" name="phone" id="phone" class="rounded-0" v-model="phone" placeholder="Phone">
                    </div>
                    <div class="input_item pb-0">
                      <textarea type="text" name="name" id="name"  placeholder="Write requirements" v-model="message" rows="5"/>
                    </div>
                    <vue-recaptcha v-model="recaptchaToken" sitekey="6Lf2FtAnAAAAAA_lH697bw7eHErFnnq3GNZ1nbnf"></vue-recaptcha>
                    <div class="upload_button d-flex" >
                      <button><img src="images/upload.png" style="width:15%; height:75%" />Upload Files</button>
                      <p class="sec_content" style="margin-left: 10px;">Max 4 files<br/> (10MB each)</p>
                    </div>
                    <div class="send_button">
                      <button type="submit" class="flaticon-send">&nbsp;SEND</button>
                    </div>
                  </form>
                  <p style="margin-bottom: 0;font-size:12px;font-weight:300; padding:10px 0 0 8px;">We repect your privacy <span style="color:#32B2C1">Policy</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_language mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <p class="title">OUTSOURCE FOREIGN LANGUAGE SERVICES</p>
            <p>PlE Multilingual is the ultimate answer to meet your business service demand. Our fast and cost-effective processes make us a top choice among the clients irrespective of geographical boundaries. We follow up-to-date computing environment and methodology, 
              which smoothly converts your project concepts into reality. Whether it is language translation, language transcription or any other business service, we ensure efficiency, professionalism and quality in more than 150+ languages. Most importantly, we understand that you deserve the best and thus ensure that your project undergo with multi quality stage to deliver
               <router-link to="/market-research-services/supply-chain-intelligence/"><span class="color-special bold">excellent quality</span></router-link>.
            </p>
            <p>
              <router-link to="/multilingual-outsourcing-contact-us/"><span class="color-special bold">Partner</span></router-link>&nbsp;with Multilingual Business Service Company to meet your business requirements with foreign language expertise.
              Partnering with Foreign Language Service company will not just cut your cost but will also helop on a variety of assignment where foreign language expertise is required.
              Foreign Language Service company will not just cut your cost but will also help on a variety of assignment where foreign language expertise is required.
              Foreign Language outsourcing company will help to open your business in new geography. Add foreign language services in your expertise and Leverage your business with us.
            </p>
          </div>
          <div class="col-md-4 pt-4"  >
            <iframe width="400" height="225" style="margin-top:30px" src="https://www.youtube.com/embed/hUOp7vUCQJM?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="section_3">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-support">              
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/multilingual-call-center/inbound-call-center-services/">MULTINGUAL CALL CENTER</a>
                </h4>
                <h5>
                  <p>Get your business processes transform with proficient call center support.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-market-research">
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/outsource-multilingual-business-research/">MARKET RESEARCH</a>
                </h4>
                <h5>
                  <p>Expand your business to international markets with deep subject matter experts.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-music" style="left:33px; top:15px">
                  
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/outsource-audio-transcription-services/">AUDIO TRANSCRIPTION</a>
                </h4>
                <h5>
                  <p>Get your audios transcribed with 100% accuracy by our native transcribers.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-translation">
                  
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/outsource-multilingual-translation-services/">FOREIGN LANGUAGE SERVICES</a>
                </h4>
                <h5>
                  <p>Get foreign language expert support to run your business worldwide efficiently.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-text">

                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/outsourcing-content-writing-services/">CONTENT WRITING</a>
                </h4>
                <h5>
                  <p>Get 100% plagiarism-free and unique content for your business.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-video-editing" style="left:25px; top:16px">
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/creative-services/video-editing-services/">VIDEO EDITING SERVICES</a>
                </h4>
                <h5>
                  <p>Make your videos more unique and impressive to attract more audience.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-support">              
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/multilingual-call-center/inbound-call-center-services/">MULTINGUAL CALL CENTER</a>
                </h4>
                <h5>
                  <p>Get your business processes transform with proficient call center support.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-market-research">
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/outsource-multilingual-business-research/">MARKET RESEARCH</a>
                </h4>
                <h5>
                  <p>Expand your business to international markets with deep subject matter experts.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-12 col-display">
            <div class="serv-section-3">
              <div class="serv-section-3-icon">
                <div class="glyph-icon flaticon-music" style="left:33px; top:15px">
                  
                </div>
              </div>
              <div class="serv-section-disc">
                <h4>
                  <a href="/outsource-audio-transcription-services/">AUDIO TRANSCRIPTION</a>
                </h4>
                <h5>
                  <p>Get your audios transcribed with 100% accuracy by our native transcribers.</p>
                </h5>
              </div>
              <div class="section-heading-line-left"></div>
              <div class="arrow flaticon-send-1">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div class="section-choose mt-5">
      <div class="container-fluid">
          <div class="row  pos-relative">   
              <div class="col-md-6 d-flex flex-column" style=" background-color:#CCCCCC">
                  <div class="content px-3">
                      Browse Case Studies to find out how our Multiilingual Virtual Assistants have helped our global customers to exceed their expectations. Browse Case Studies to find out how our Multilingual Virtual Assistants have helped our global customers to exceed their expectations. Browse Case Studies to find out how our Multilingual Virtual Assistants have helped our global customers to exceed their expectations.
                  </div>
                  <div class="know-more px-3 py-3">
                    <button>Know More</button>
                </div>
              </div>
              <div class="col-md-6 backimage">
                 <div class="row">
                  <div class="col-md-4 d-flex flex-column">       
                    <span class="country_flag"><i class="flag flag-china " />Chinese</span>
                    <span class="country_flag"><i class="flag flag-germany " />German</span>
                    <span class="country_flag"><i class="flag flag-heard-island " />Hebrew</span>
                    <span class="country_flag"><i class="flag flag-indonesia " />Indonesian</span>
                    <span class="country_flag"><i class="flag flag-portugal " />Portuguese</span>
                    <span class="country_flag"><i class="flag flag-aruba " />Arabic</span>
                    <span class="country_flag"><i class="flag flag-thailand " />Thai</span>
                  </div>
                  <div class="col-md-4 d-flex flex-column">
                    <span class="country_flag"><i class="flag flag-french-guiana "  />French</span>
                    <span class="country_flag"><i class="flag flag-japan " />Japanese</span>
                    <span class="country_flag"><i class="flag flag-south-korea" />Korean</span>
                    <span class="country_flag"><i class="flag flag-hungary " />Hungarian</span>
                    <span class="country_flag"><i class="flag flag-norway " />Norwegian</span>
                    <span class="country_flag"><i class="flag flag-turkey " />Turkish</span>
                    <span class="country_flag"><i class="flag flag-cz " />Czech</span>
                  </div>
                  <div class="col-md-4 d-flex flex-column">
                    <span class="country_flag"><i class="flag flag-madagascar " />Mandarin</span>
                    <span class="country_flag"><i class="flag flag-spain " />Spanish</span>
                    <span class="country_flag"><i class="flag flag-denmark " />Dutch</span>
                    <span class="country_flag"><i class="flag flag-italy " />Italian</span>
                    <span class="country_flag"><i class="flag flag-russia " />Russian</span>
                    <span class="country_flag"><i class="flag flag-vietnam " />Vietnamese</span>
                    <span class="country_flag"><i class="flag flag-tanzania " />Tagalog</span>
                  </div>
                 </div> 
              </div>
              
          </div>
      </div>
    </div>
    <div class="section-industry mt-5">
      <div class="container">
          <div class="title my-3 text-center">INDUSTRIES WE SERVE TO</div>
          <div class="content mt-3 mb-4 text-center">
              We provide our services to multiple industries and verticals. Here is a break-up of the industries that we offer serves
          </div>
          <div class="gallery row">
              <div class=" col-md-4 col-sm-6 industry " v-for="(item, index) in data" :key="index">
                  <div class="col-md-10 border-special pb-0">
                      <span class="icon m-2">
                          <img :src="item.url" style="width: 40px;height:40px"/>
                      </span>
                      <span class="short-text">{{ item.name }}</span>
                  </div>
              </div>
            </div>
        </div>
    </div> 
    <div class="section_proud mt-5 p-3">
      <div class="container">
        <div class="row">
          <div class="col-md-1" />
          <div class="col-md-4 col-sm-12 p-0">
            <div class="success_stories">SUCCESS STORIES</div>
          </div>
          <div class="col-md-7 col-sm-12 mt-2">
            <div class="row" >
              <div class="col-md-10 success_line"></div>
             <div class="col-md-2" />
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-1" />
          <div class="col-md-4 col-sm-12" style="padding-left: 0;">
            <div class="case_content_header">Proud of our work, but we're even more proud of the results.</div>
          </div>
          <div class="col-md-7 col-sm-12 mt-3">
           <div class="row" >
            <div class="col-md-7 p-0">
              <div class="case_content_items">Read our case studies to find out how we have helped our clients succeed.</div>
             </div>
             <div class="col-md-3 ">
              <button class="case_content_button">ALL CASES</button>
             </div>
             <div class="col-md-2" />
           </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-1" />
          <div class="col-md-4 col-sm-12 proud_all px-0" >
            <div class="proud_header px-3">
              Cybersecurity and cloud
            </div>
            <div class="proud_content px-3">
              Migrated them to the Cloud, and provided Office<br />
              365 management.
            </div>
            <div class="proud_button_group">
              <button>Find out More</button>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 ">
            <div class="row">  
              <div class="col-md-6 col-sm-12 case_contents p-0">
                <div class="d-flex justify-content-between">
                  <div class="case_item_content">Workspace cloud business</div>
                </div>
                <div class="case_item_content_item">As a new company stemming from an established accounting firm</div>
              </div>
              <div class="col-md-6 col-sm-12 p-0">
                <img src="images/proud_1.png" />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-12 case_contents p-0">
                <div class="d-flex justify-content-between">
                  <div class="case_item_content">Managed backup services</div>
                </div>
                <div  class="case_item_content_item">With an upgraded on-site server and new internet circuites</div>
              </div>
              <div class="col-md-6 col-sm-12 p-0" >
                <img src="images/proud_2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_testmonials p-2">
      <div class="container">
        <div class="row">
          <p class="testing">TESTMONIALS</p>
        </div>
        <div>
          <Carousel :perPage="3" :paginationPosition="bottom-overlay">
            <Slide class="col-md-4 slider_item pt-0" >
              <div class="border-item">
                <div class="text-center p-3">
                  <img src="images/stars.svg" v-for="index in 5" :key='index'/>
                </div>
                <div class="text-center mt-3" style=" font-style: italic;">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                  impedit quo minus id quod maxime placeat facere possimus
                </div>
                <div class="item_name mt-5 pt-2">
                  <p>Alexander</p>
                  <p style="font-size: 13px;">Operation Manager, Market Research Company, USA</p>
                </div>
              </div>
            </Slide> 
            <Slide class="col-md-4 slider_item pt-0"  >
              <div class="border-item">
              <div class="text-center p-3">
                <img src="images/stars.svg" v-for="index in 5" :key='index'/>
              </div>
              <div class="text-center" style=" font-style: italic;">
                Lorem ipsum dolor sit amet consectetur.
                Maecenas vitae suspendisse leo faucibus.
                Non non interdum iaculis neque urna suspendisse diam aliquet.
              </div>
              <div class="item_name mt-5">
                <p>Alexander</p>
                <p style="font-size: 13px;">Operation Manager, Market Research Company, USA</p>
              </div>
              </div>
            </Slide>
            <Slide class="col-md-4 slider_item pt-0" >
              <div class="border-item">
              <div class="text-center p-3">
                <img src="images/stars.svg" v-for="index in 5" :key='index'/>
              </div>
              <div class="text-center mt-3" style=" font-style: italic;">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
                impedit quo minus id quod maxime placeat facere possimus
              </div>
              <div class="item_name mt-5 pt-2">
                <p>Alexander</p>
                <p style="font-size: 13px;">Operation Manager, Market Research Company, USA</p>
              </div>
              </div>

            </Slide>
            <Slide class="col-md-4 slider_item pt-0" >
              <div class="border-item">
              <div class="text-center p-3">
                <img src="images/stars.svg" v-for="index in 5" :key='index'/>
              </div>
              <div class="text-center" style=" font-style: italic;">
                Lorem ipsum dolor sit amet consectetur.
                Maecenas vitae suspendisse leo faucibus.
                Non non interdum iaculis neque urna suspendisse diam aliquet.
              </div>
              <div class="item_name mt-5">
                <p>Alexander</p>
                <p style="font-size: 13px;">Operation Manager, Market Research Company, USA</p>
              </div>
              </div>
          </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <FooterPages />
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
  import FooterPages from '@/components/Layout/FooterPages'
  import VueRecaptcha from  '@gurinder/vue-google-recaptcha'
  import axios from 'axios'
  export default {
    components : {
      Carousel,
      Slide,
      FooterPages,
      VueRecaptcha
    }, 
    data() {
      return {
        data:
        [
          { url:'images/icons/plane.svg', name : 'Aerospace' },
          { url:'images/icons/agriculture.svg', name : 'Agriculture' },
          { url:'images/icons/car.svg', name : 'Automotive' },
          { url:'images/icons/chemical.svg', name : 'Chemical' },
          { url:'images/icons/brokerage.svg', name : 'Custom Brokerage' },
          { url:'images/icons/defense.svg', name : 'Defense/Arm' },
          { url:'images/icons/energy.svg', name : 'Energy' },
          { url:'images/icons/education.svg', name : 'Education' },
          { url:'images/icons/entertainment.svg', name : 'Entertainment' },
          { url:'images/icons/finance.svg', name : 'Finance' },
          { url:'images/icons/forestry.svg', name : 'Forestry' },
          { url:'images/icons/food.svg', name : 'Food' },
          { url:'images/icons/health.svg', name : 'Healthcare' },
          { url:'images/icons/hospital.svg', name : 'Hospitality' },
          { url:'images/icons/it.svg', name : 'Information Technology' },
          { url:'images/icons/Logistics.svg', name : 'Logistics' },
          { url:'images/icons/Manufacturing.svg', name : 'Manufacturing' },
          { url:'images/icons/Mass.svg', name : 'Mass' },
          { url:'images/icons/Multimedia.svg', name : 'Multimedia' },
          { url:'images/icons/Public Sector.svg', name : 'Public Sector/Government' },
          { url:'images/icons/Pharmaceutical.svg', name : 'Pharmaceutical' },
          { url:'images/icons/Retail.svg', name : 'Retail & e-Commerce' },
          { url:'images/icons/Telecommunications.svg', name : 'Telecommunications' },
          { url:'images/icons/Transport.svg', name : 'Transport' },
        ],
        name:"",
        email:"",
        phone:"",
        message:"",
        recaptchaToken:""
      }
    },
    methods: {
      submitForm() {
        axios
          .post("/", {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message,
            recaptchaToken: this.recaptchaToken,
          })
          .then(() => {
            alert("Message sent successfully!");
          })
          .catch((error) => {
            console.error(error);
            alert("An error occurred while sending the message.");
          });
      },
    },
    watch: {
      recaptchaToken(newValue) {
        if (newValue) {
          this.submitForm();
        }
      },
    },

  }
</script>

<style scoped>

</style>