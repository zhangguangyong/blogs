import {FC, ReactElement} from 'react'
import './index.scss'

import CodeMirror from '@uiw/react-codemirror'
import {javascript} from '@codemirror/lang-javascript'

export const Home: FC = (): ReactElement => {
  return (
    <div className={'home-page'}>
      <CodeMirror
        value="console.log('hello world!');"
        height="100%"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          console.log('value:', value);
        }}
      />
    </div>
  )
}
