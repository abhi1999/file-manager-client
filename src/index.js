import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*const fileManager = (
  <div style={{ height: '480px' }}>
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
   </div>
 );

 ReactDOM.render(
  fileManager,
  document.getElementById('root')
);
*/
 
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
