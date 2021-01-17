import React from "react"
import './App.css';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';
// https://awesomeopensource.com/project/OpusCapita/filemanager
// https://demo.core.dev.opuscapita.com/filemanager/master/api/docs/
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardBody, CardTitle } from 'reactstrap';
import classnames from 'classnames';
import 'bootstrap/dist/css/bootstrap.min.css';
import Control2 from "./syncfusion-file-manager";
const { REACT_APP_API_HOST } = process.env;

const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: REACT_APP_API_HOST
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '2'
    }
  }
  toggle(activeTab) {
    this.setState({ activeTab })
  }
  render() {
    const { activeTab } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          Filter Manager Control
        </header>
        <div style={{ height: '480px' }}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Control 1 
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Control 2 
            </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Card>
                <CardTitle>
                    Open source - &nbsp;
                    <a target="_blank" rel="noreferrer" href="https://demo.core.dev.opuscapita.com/filemanager/master/?currentComponentName=FileManager&maxContainerWidth=100%25&showSidebar=true"> 
                      OpusCapita
                    </a>
                </CardTitle>
                <CardBody>
                  <FileManager>
                    <FileNavigator
                      id="filemanager-1"
                      api={connectorNodeV1.api}
                      apiOptions={apiOptions}
                      capabilities={connectorNodeV1.capabilities}
                      listViewLayout={connectorNodeV1.listViewLayout}
                      viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
                    />
                  </FileManager>
                </CardBody>
              </Card>
            </TabPane>
            <TabPane tabId="2">
              <Card>
                <CardTitle> &nbsp;<a target="_blank" rel="noreferrer" href="https://ej2.syncfusion.com/react/documentation/file-manager/getting-started/">Syncfusion</a></CardTitle>
                <CardBody>
                  <Control2/>
                </CardBody>
              </Card>
            </TabPane>
          </TabContent>

        </div>
      </div>
    );
  }
}

export default App;
