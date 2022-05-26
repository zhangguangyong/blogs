import {FC, ReactElement, useState} from 'react'
import './index.scss'

import {marked} from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

export const Markdown: FC<any> = ({md}): ReactElement => {
  let [preview, setPreview] = useState('')

  const init = () => {
    fetch(md)
      .then(r => r.text())
      .then(text => {
        let t = text.replaceAll('{PUBLIC_URL}', process.env.PUBLIC_URL!)
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

  return (
    <div className={'markdown-component'}>
      <div className={'preview'} dangerouslySetInnerHTML={{__html: preview}}>
      </div>
    </div>
  )
}
