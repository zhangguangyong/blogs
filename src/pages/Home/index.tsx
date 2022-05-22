import {FC, ReactElement, useState} from 'react'
import './index.scss'

import CodeMirror, {ViewUpdate} from '@uiw/react-codemirror'
import {markdown, markdownLanguage} from '@codemirror/lang-markdown'
import {languages} from '@codemirror/language-data'
import {marked} from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'

export const Home: FC = (): ReactElement => {
  const code = `## Title
\`\`\`jsx
function Demo() {
  return <div>demo</div>
}
\`\`\`

\`\`\`bash
# Not dependent on uiw.
npm install @codemirror/lang-markdown --save
npm install @codemirror/language-data --save
\`\`\`

[weisit ulr](https://uiwjs.github.io/react-codemirror/)

\`\`\`go
package main
import "fmt"
func main() {
  fmt.Println("Hello, 世界")
}
\`\`\`
`
  const markedOptions: marked.MarkedOptions = {
    highlight(code: string, lang: string, callback?: (error: any, code?: string) => void): string | void {
      return highlight.highlightAuto(code).value
    }
  }

  const toMarked = (src: string) => {
    return marked(src, markedOptions)
  }

  let [preview, setPreview] = useState(toMarked(code))
  // code preview
  const handleChange = (value: string, viewUpdate: ViewUpdate) => {
    setPreview(toMarked(value))
  }

  return (
    <div className={'home-page'}>
      <div className={'code'}>
        <CodeMirror
          value={code}
          extensions={[markdown({base: markdownLanguage, codeLanguages: languages})]}
          onChange={handleChange}
        />
      </div>
      <div className={'preview'} dangerouslySetInnerHTML={{__html: preview}}>
      </div>
    </div>
  )
}
