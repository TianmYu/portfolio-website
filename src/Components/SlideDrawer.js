import React, { Component } from "react";

class SlideDrawer extends Component {
   render(){
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
       return(
          <div className={drawerClasses}>
             <h1>Hello, I'm sliding!</h1>
          </div>
        )
    }
}

export default SlideDrawer