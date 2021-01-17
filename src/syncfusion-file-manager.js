import React from "react"
import '../node_modules/@syncfusion/ej2-base/styles/material.css';
import '../node_modules/@syncfusion/ej2-icons/styles/material.css';
import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
import "../node_modules/@syncfusion/ej2-react-filemanager/styles/material.css";
import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject  } from '@syncfusion/ej2-react-filemanager';

// FileManagerComponent.Inject(DetailsView, NavigationPane, Toolbar);

// https://ej2.syncfusion.com/react/documentation/file-manager/getting-started/
const { REACT_APP_SYNC_API_HOST } = process.env;


class Control2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hostUrl1:"http://localhost:8090/",
        hostUrl:REACT_APP_SYNC_API_HOST//"https://file-manager-node-server.herokuapp.com/"//"http://localhost:8090/"// "https://ej2-aspcore-service.azurewebsites.net/"
      }
    }
    
    render() {
        const {hostUrl}= this.state
        return(
        <div className="control-section">
            <FileManagerComponent  ref={s => (this.fileObj = s)} id="file" allowDragAndDrop={true}  view="LargeIcons" ajaxSettings={{
                downloadUrl: hostUrl + 'Download',
                getImageUrl: hostUrl + "GetImage",
                uploadUrl: hostUrl + 'Upload',
                url: hostUrl
             }}>
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
        </div>
        );
    }
}
/*
downloadUrl: hostUrl + 'api/FileManager/Download',
                getImageUrl: hostUrl + "api/FileManager/GetImage",
                uploadUrl: hostUrl + 'api/FileManager/Upload',
*/
//  hostUrl + "api/FileManager/FileOperations",
/*
               
*/
export default Control2;