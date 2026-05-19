import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './CodeBlock.css'

interface CodeBlockProps {
  code: string
  language?: string
  showLanguage?: boolean
}

export default function CodeBlock({ code, language = 'javascript', showLanguage = true }: CodeBlockProps) {
  return (
    <div className="codeblock-wrap">
      {showLanguage && language ? <div className="codeblock-lang">{language}</div> : null}
      <SyntaxHighlighter language={language} style={oneDark} showLineNumbers className="codeblock">
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
