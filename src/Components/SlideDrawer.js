import React, { Component } from "react";
import {Test1, Test2} from '../TimelinePages/index';

import ResumePage from '../Pages/ResumeSlider.js'

class SlideDrawer extends Component {
   // props: show, page 
   // also needs to record where the scroll is in each page
   state = {
      timelinePages: {
         test1: { 
            scrollPos: 0,
            component: <Test1 scroll={this.drawerScrollHandler.bind(this)}/>,
         },
         test2: {
            scrollPos: 0,
            component: <Test2 scroll={this.drawerScrollHandler.bind(this)}/>,
         },
         ResumePage: {
            scrollPos: 0,
            component: <ResumePage scroll={this.drawerScrollHandler.bind(this)}/>,
         }
      }
   }

   drawerScrollHandler(newScroll){
      var timelinePagesTemp = {...this.state.timelinePages}
      timelinePagesTemp[this.props.page]["scrollPos"] = newScroll

      this.setState({
         timelinePagesTemp
      })
   }

   render(){
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }

       const page = this.props.page

       if (this.props.page == "") {
         return(
            <div className={drawerClasses}>
            </div>
         )
       }
       else{
         return(
            <div className={drawerClasses}>
               {
               React.cloneElement(
                  this.state.timelinePages[this.props.page]["component"],
                  {scrollPos: this.state.timelinePages[this.props.page]["scrollPos"]}
                )
                }
            </div>
         )
       }
    }
}

export default SlideDrawer