import React, { Fragment } from 'react'
import Editor from 'react-simple-code-editor';
import { Highlight,themes } from 'prism-react-renderer';
import './inputEditor.css'

function InputEditor({value, setValue}) {

  const highlight = (code) => (
    <Highlight style={{outline:'none'}}  theme={themes.vsLight} code={code} language="markdown">
      {({ tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} style={{outline:'none'}}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )

    return (
      <div className="code-editor">
        <Editor
          value={value}
          onValueChange={value => setValue(value)}
          highlight={highlight}
        />
      </div>
    )

};

export default InputEditor;
