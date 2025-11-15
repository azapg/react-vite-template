import { useState } from 'react'
import { SessionsSidebar } from '@/components/sessions-sidebar'
import { MarkdownEditor } from '@/components/markdown-editor'

function Home() {
  // Mock sessions data for demonstration
  const [sessions] = useState([
    {
      id: '1',
      title: 'My First Session',
      lastModified: new Date('2024-11-10'),
    },
    {
      id: '2',
      title: 'Project Ideas',
      lastModified: new Date('2024-11-14'),
    },
    {
      id: '3',
      title: 'Meeting Notes',
      lastModified: new Date('2024-11-15'),
    },
  ])

  const [activeSessionId, setActiveSessionId] = useState<string>('1')
  const [content, setContent] = useState('')

  const handleNewSession = () => {
    console.log('Creating new session...')
  }

  const handleSessionSelect = (sessionId: string) => {
    setActiveSessionId(sessionId)
    console.log('Selected session:', sessionId)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 shrink-0">
        <SessionsSidebar
          sessions={sessions}
          activeSessionId={activeSessionId}
          onSessionSelect={handleSessionSelect}
          onNewSession={handleNewSession}
        />
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 overflow-hidden">
        <MarkdownEditor
          value={content}
          onChange={setContent}
          placeholder="Start writing your thoughts, ideas, or notes..."
        />
      </div>
    </div>
  )
}

export default Home