import { Plus, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Session {
  id: string
  title: string
  lastModified: Date
}

interface SessionsSidebarProps {
  sessions?: Session[]
  activeSessionId?: string
  onSessionSelect?: (sessionId: string) => void
  onNewSession?: () => void
}

export function SessionsSidebar({
  sessions = [],
  activeSessionId,
  onSessionSelect,
  onNewSession,
}: SessionsSidebarProps) {
  return (
    <div className="flex h-full flex-col border-r bg-muted/40">
      {/* Header */}
      <div className="border-b p-4">
        <Button 
          onClick={onNewSession}
          className="w-full justify-start gap-2"
          variant="outline"
        >
          <Plus className="size-4" />
          New Session
        </Button>
      </div>

      {/* Sessions List */}
      <div className="flex-1 overflow-y-auto p-2">
        {sessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-4 text-center text-sm text-muted-foreground">
            <FileText className="mb-2 size-8 opacity-50" />
            <p>No sessions yet</p>
            <p className="text-xs">Create one to get started</p>
          </div>
        ) : (
          <div className="space-y-1">
            {sessions.map((session) => (
              <button
                key={session.id}
                onClick={() => onSessionSelect?.(session.id)}
                className={`w-full rounded-md p-3 text-left transition-colors hover:bg-accent ${
                  activeSessionId === session.id
                    ? 'bg-accent'
                    : ''
                }`}
              >
                <div className="truncate text-sm font-medium">
                  {session.title || 'Untitled'}
                </div>
                <div className="text-xs text-muted-foreground">
                  {session.lastModified.toLocaleDateString()}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
