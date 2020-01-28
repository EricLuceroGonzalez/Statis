import React, { Component } from 'react';
import SurveyComponent from './Encuesta';

class HomeComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <SurveyComponent></SurveyComponent>
            </div>
         );
    }
}
 
export default HomeComponent;