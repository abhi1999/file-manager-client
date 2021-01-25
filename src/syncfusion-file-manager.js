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
import FileDetails from "./file-view";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// FileManagerComponent.Inject(DetailsView, NavigationPane, Toolbar);

// https://ej2.syncfusion.com/react/documentation/file-manager/getting-started/
const { REACT_APP_SYNC_API_HOST } = process.env;


class Control2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen:false,
        hostUrl1:"http://localhost:8090/",
        fileDetails:[],
        hostUrl:REACT_APP_SYNC_API_HOST//"https://file-manager-node-server.herokuapp.com/"//"http://localhost:8090/"// "https://ej2-aspcore-service.azurewebsites.net/"
      }
    }
    menuOpen(args){
      for(let i = 0; i<args.items.length; i++) {
        if((args.items[i].id === this.element.id +'_cm_custom') ||(args.items[i].id === this.element.id +'_cm_view contents')) {
            args.items[i].iconCss= 'e-icons e-fe-open';
        }
      }
    }
    menuClick=(args)=>{
      if ((args.item.text === 'Custom')||(args.item.text === 'View Contents')) {
        this.setState({isModalOpen:true, fileDetails:args.fileDetails})
      } 
    }
    toggle=()=>{
      this.setState({isModalOpen:!this.state.isModalOpen})
    }
    render() {
        const {hostUrl, isModalOpen, fileDetails}= this.state
        const className ="file-details-modal";
        return(
        <div className="control-section">
            <FileManagerComponent  ref={s => (this.fileObj = s)} id="file" 
                allowDragAndDrop={true}  
                view="LargeIcons" 
                ajaxSettings={{
                  downloadUrl: hostUrl + 'Download',
                  // getImageUrl: hostUrl + "GetImage",
                  uploadUrl: hostUrl + 'Upload',
                  url: hostUrl
                }}
                contextMenuSettings= {{
                  file: ["View Contents", "|", "Cut","Copy","|", "Delete", "Download", "Rename", "|", "Details"],
                  visible: true
                }}
                menuOpen={this.menuOpen}
                menuClick={this.menuClick}
             >
            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
          </FileManagerComponent>
          <Modal isOpen={isModalOpen} toggle={this.toggle} className={className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
                <FileDetails fileDetails={fileDetails}/>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
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