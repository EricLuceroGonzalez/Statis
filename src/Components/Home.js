import React, { Component } from 'react';
import SurveyComponent from './Encuesta';

class HomeComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div 
            className='mr-auto ml-auto col-lg-8 col-md-10 col-12'
            style={{marginTop: '6em'}}>
            <SurveyComponent></SurveyComponent>
            </div>
         );
    }
}
 
export default HomeComponent;