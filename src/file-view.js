import React from "react"
import AceEditor from 'react-ace';


class FileDetails extends React.Component {
    constructor(props) {
      super(props);
      this.editorRe={}

      this.state = {
      }
    }
    render() {
        if(this.props.fileDetails && this.props.fileDetails.length>0){
            return (<div>Please select one file to preview, or click on "Download" button to download the selected files</div>)
        }
        const formatedXML =
`<a>
    <b>some hard coded XML</b>
</a>`;
        return(
        <div className="file-details">
            <AceEditor
                            ref={(ref) => { this.editorRef = ref;
                                                if(ref && ref.editor && ref.editor.commands && ref.editor.commands.byName && ref.editor.commands.byName.find && ref.editor.commands.byName.find.exec) {
                                                    ref.editor.$blockScrolling='Infinity';
                                                    ref.editor.commands.byName.find.exec(ref.editor) 
                                                }
                                            }}
                            mode="xml"
                            editorProps={{$blockScrolling: Infinity}}
                            theme="github"
                            name="xmlEditor"
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={formatedXML}
                            height={'100%'}
                            width={'100%'}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                            readOnly={true}
                            />
        </div>
        );
    }

}

export default FileDetails;