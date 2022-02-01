import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import LengthDB from './LengthDB';


function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid top">
					
					<p className="info"> <i className="hoja fas fa-leaf"></i> Productos con impacto positivo <i className="bateria fas fa-battery-three-quarters"></i></p>
				
					{/*<!-- Content Row Movies-->*/}
					<LengthDB/>
					<ContentRowCenter />
					
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;