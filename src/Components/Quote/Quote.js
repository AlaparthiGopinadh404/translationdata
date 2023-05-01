import React from 'react';
import {FormattedMessage,FormattedDate,FormattedNumber} from
  'react-intl'; 
// import defaultMessage from './Components/LanguageProvider/messages';
 export default function Quote() {
  return (
    <div className='container'>
       <h1>Quote</h1>  
       <FormattedMessage 
       id ='title'
      //  defaultMessage={defaultMessage.quote.title}
       />
       <FormattedMessage id="text" />
    </div>
  )
}
