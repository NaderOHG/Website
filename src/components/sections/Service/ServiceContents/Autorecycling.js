import React, { Component } from 'react';
import Auto from '../../../../assets/img/Auto.png'

class Autorecycling extends Component {
    
    render() { 
        return ( 
            <>
            <div className="serviceContents">
               <h3>Autorecycling</h3>
               <br></br>
                
                Wenn Sie Ihr Auto bei uns verschrotten lassen, können Sie sicher sein, dass wir Ihr Fahrzeug auf umweltfreundliche Weise entsorgen. 
                Bei der Helmut Nader Recycling OHG nutzen wir eine hochmoderne Entsorgungsanlage für Fahrzeuge, die allen europäischen Normen entspricht und sicherstellt, 
                dass alle gefährlichen Abfälle und Giftstoffe im Rahmen des Umweltschutzverfahrens entsorgt werden. 

                Wir kümmern uns um die Trockenlegung von Altautos und Unfallfahrzeugen und bauen nach einer gründlichen Prüfung auf Brauchbarkeit 
                entsprechende Teile aus. In diesem Zusammenhang verfügen wir über eine Zertifizierung als Altfahrzeug-Demontagebetrieb nach der Altfahrzeug-Verordnung.
              
                <br></br>
                <br></br>
                <br></br>
        
            </div>
            <span>
            <img src={Auto} alt="Auto" className="serviceImages"></img>
            </span>
            </>
         );
    }
}
 
export default Autorecycling;