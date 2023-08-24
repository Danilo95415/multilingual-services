<template>
    <div>
        <div class="section_1">
          <div class="container">
            <div class="row">
              <div class="header_control">
                <div class="logo">
                  <router-link to="/"><img src="images/logo.png"/></router-link>
                </div>
                <div class="nav_bar d-flex flex-column">
                    <ul class="all_navbar d-flex ul_list">
                      <li class="list_item_navbar">
                          <i class="flaticon-gears" aria-hidden="true"></i>     
                          <router-link to="/multilingual-outsourcing-company-services/"> ALL SERVICES</router-link>
                        </li>
                      <li class="list_item_navbar">
                        <router-link to="/global-outsourcing-industry-solutions/business-process-outsourcing/">Industries We Serve</router-link>
                      </li>
                      <li class="list_item_navbar">
                        Languages
                        <ul>
                          <li><router-link to="/spanish-language-new/spanish-business-services/">Spanish</router-link></li>
                          <li><router-link to="/french-language/french-business-services/">French</router-link></li>
                          <li><router-link to="/deutsch/">German</router-link></li>
                        </ul>
                      </li>
                      <li class="list_item_navbar">
                        <router-link to="/about-multilingual-outsourcing-company/" >About Us</router-link>
                      </li>
                      <li class="list_item_navbar">
                        <router-link to="/multilingual-outsourcing-contact-us/" >
                          Contact Us
                        </router-link>
                      </li>
                    </ul>          
        
                  <div class="search_control mt-2 ">
                    <input
                        type="text"
                        placeholder="Search.."
                        class="search"
                        name="search"
                        style="border-radius: 4px; border:1px solid #E9E9E9"
                      />
                      <button  class="btn-fa serarch_button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-search "
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                        </svg>
                      </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="d-flex topbar justify-content-center mt-2">
                <ul class="ul_list top_ul">
                  <li class="list_item d-flex align-items-center" >
                    <router-link to="/" >
                      <i class="flaticon-house" aria-hidden="true" />
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/' ? 'background:#ff6600' : ''">
                    <router-link to="/" >
                      FOREIGN LANGUAGE<br /><span class="d-flex justify-start">SUPPORT</span>
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/outsource-market-research-services' ? 'background:#ff6600' : ''">
                    <router-link to="/outsource-market-research-services" >MARKET RESEARCH<br /><span class="d-flex justify-start">& ANALYSIS</span> 
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/transcription-services' ? 'background:#ff6600' : ''">
                    <router-link to="/transcription-services" >
                      TRANSCRIPTION<br/><span class="d-flex justify-start">SERVICES</span>
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/multilingual-call-center-outsourcing' ? 'background:#ff6600' : ''">
                    <router-link to="/multilingual-call-center-outsourcing" >
                      MULTLINGUAL<br/><span class="d-flex justify-start">CALL CENTER</span> 
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/data-entry' ? 'background:#ff6600' : ''">
                    <router-link to="/data-entry" >
                      DATA ENTRY<br/><span class="d-flex justify-start">SERVICES</span>
                    </router-link>
                    </li>
                  <li class="list_item" :style="$route.path === '/outsource-creative-services' ? 'background:#ff6600' : ''">
                    <router-link to="/outsource-creative-services" >
                      CREATIVE<br/><span class="d-flex justify-start">SERVICES</span> 
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/outsource-photo-editing-services' ? 'background:#ff6600' : ''">
                    <router-link to="/outsource-photo-editing-services" >
                      PHOTO EDITING<br/><span class="d-flex justify-start">SERVICES</span> 
                    </router-link>
                  </li>
                  <li class="list_item" :style="$route.path === '/virtual-assistant-services' ? 'background:#ff6600' : ''">
                    <router-link to="/virtual-assistant-services" >
                      VIRTUAL ASSISTANT<br/><span class="d-flex justify-start">SERVICES</span> 
                    </router-link></li>
                  <li class="list_item" :style="$route.path === '/financePage' ? 'background:#ff6600' : ''">
                    <router-link to="/financePage" >
                      FINANCE<br/><span class="d-flex justify-start">ACCOUNTING</span> 
                    </router-link>
                  </li>
                </ul>
          </div>  
        </div>
        <div class="blackbar" :class="{'d-flex': changeclass}">
              <ul class="ul_list_black ">
                <div class="topbar_logo d-flex ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-check" viewBox="0 0 16 16">
                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708L7.293 1.5Z"/>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                  </svg>
                </div>
                <li class="list_item" :style="$route.path === '/' ? 'background:#ff6600' : ''">
                  <router-link to="/" >
                    FOREIGN LANGUAGE SUPPORT
                  </router-link>
                </li>
                <li class="list_item" :style="$route.path === '/outsource-market-research-services' ? 'background:#ff6600' : ''">
                  <router-link to="/outsource-market-research-services" >MARKET RESEARCH & ANALYSIS 
                  </router-link>
                </li>
                <li class="list_item" :style="$route.path === '/transcription-services' ? 'background:#ff6600' : ''">
                  <router-link to="/transcription-services" >
                    TRANSCRIPTION SERVICES
                  </router-link>
                </li>
                <li class="list_item" :style="$route.path === '/multilingual-call-center-outsourcing' ? 'background:#ff6600' : ''">
                  <router-link to="/multilingual-call-center-outsourcing" >
                    MULTLINGUAL CALL CENTER 
                  </router-link>
                </li>
                <li class="list_item" :style="$route.path === '/data-entry' ? 'background:#ff6600' : ''">
                  <router-link to="/data-entry" >
                    DATA ENTRY SERVICES
                  </router-link>
                 </li>
                <li class="list_item" :style="$route.path === '/outsource-creative-services' ? 'background:#ff6600' : ''">
                  <router-link to="/outsource-creative-services" >
                    CREATIVE SERVICES 
                  </router-link>
                </li>
                <li class="list_item" :style="$route.path === '/outsource-photo-editing-services' ? 'background:#ff6600' : ''">
                  <router-link to="/outsource-photo-editing-services" >
                    PHOTO EDITING SERVICES 
                  </router-link>
                </li>
                <li class="list_item" :style="$route.path === '/virtual-assistant-services' ? 'background:#ff6600' : ''">
                  <router-link to="/virtual-assistant-services" >
                    VIRTUAL ASSISTANT SERVICES 
                  </router-link></li>
                <li class="list_item" :style="$route.path === '/financePage' ? 'background:#ff6600' : ''">
                  <router-link to="/financePage" >
                    FINANCE ACCOUNTING 
                  </router-link>
                </li>
                <li class="search_control mt-2 ">
                  <input
                      type="text"
                      placeholder="Search.."
                      class="search"
                      name="search"
                      style="border-radius: 4px; border:1px solid #E9E9E9"
                    />
                    <button  class="btn-fa serarch_button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search "
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                      </svg>
                    </button>
                  </li>
              </ul>
        </div>
        <div class="nav_button " >
          <div @click="handleChange" :class="{change: changeclass}">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            changeclass : false
          }
        },
        methods: {
          handleChange : async function () {
            this.changeclass = !this.changeclass
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>