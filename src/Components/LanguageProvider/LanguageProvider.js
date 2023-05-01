import React,{useState} from "react";
import { IntlProvider,FormattedMessage, defineMessages } from "react-intl";
import defaultMessage from '../Quote/messages';
import English from '../Translation/en.json';

export default  function  LanguageProvider(props){
    const[locale,setLocale]=useState('en');
    const [lang,setLang]=useState(English);

    return (
       <IntlProvider locale={locale} messages={lang}>
        <div className="text-center">
            <p>
                <FormattedMessage>
                    id='change'
                    defaultMessage={defaultMessage.quote.change}
                </FormattedMessage>
            </p>

        </div>
        <div className="text-center">{props.children}</div>

       </IntlProvider>
    )
}