import {FC, ReactElement, useState} from 'react'
import './index.scss'
import md from './index.md'

import CodeMirror, {ViewUpdate} from '@uiw/react-codemirror'
import {markdown, markdownLanguage} from '@codemirror/lang-markdown'
import {languages} from '@codemirror/language-data'
import {marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export const Home: FC = (): ReactElement => {
  let [code, setCode] = useState('')
  let [preview, setPreview] = useState('')

  const init = () => {
    fetch(md)
      .then(r => r.text())
      .then(text => {
        let t = text.replaceAll('{PUBLIC_URL}',process.env.PUBLIC_URL!)
        setCode(t)
        setPreview(toMarked(t))
      })
  }
  init()

  const markedOptions: marked.MarkedOptions = {
    highlight(code: string, lang: string, callback?: (error: any, code?: string) => void): string | void {
      if (hljs.getLanguage(lang)) {
        return hljs.highlight(code, {language: lang}).value
      }
      return hljs.highlightAuto(code).value
    }
  }

  const toMarked = (src: string) => {
    return marked(src, markedOptions)
  }

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
