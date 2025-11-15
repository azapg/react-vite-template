import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface MarkdownEditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}

export function MarkdownEditor({ 
  value = '', 
  onChange,
  placeholder = 'Start writing...'
}: MarkdownEditorProps) {
  const [content, setContent] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setContent(newValue)
    onChange?.(newValue)
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-6">
        <TextareaAutosize
          value={content}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full resize-none border-0 bg-transparent text-base leading-relaxed outline-none placeholder:text-muted-foreground"
          minRows={10}
        />
      </div>
    </div>
  )
}
