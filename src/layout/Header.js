import React, {Component} from 'react';

export default class Header extends Component {
  render(){
    return (
      <header className="flex">
        <div class="w-100 w-max-240"> {/* #header-logo-white */}
          <h1 class="h-100 pa3">
            <a href="/" class="db">
              <span class="dn">Stiftelsen Norsk luftambulanse</span>
              <img id="header-logo-white" class="mh db" src="/images/svg/snla-logo-white.svg" />
            </a>
          </h1> 
        </div> {/* /#header-logo-white */}

        <div class="w-100 ph4 pt3 pb3">
        </div>

          
      </header>
    )
  }
}
