import { useState } from 'react'
import { CloudUpload, KeyRound, Shield } from 'lucide-react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import { useEncryptionService } from '../services/encryptionService.js'
import { useToasts } from '../hooks/useToasts.jsx'

const DataProtection = () => {
  const [file, setFile] = useState(null)
  const { status, log, encrypt, decrypt } = useEncryptionService()
  const { addToast } = useToasts()

  const handleFileChange = (event) => {
    const nextFile = event.target.files?.[0]
    setFile(nextFile)
  }

  const runJob = async (mode) => {
    const action = mode === 'encrypt' ? encrypt : decrypt
    const result = await action(file)
    addToast({
      title: result.success ? 'Operation complete' : 'Operation failed',
      description: result.message,
      type: result.success ? 'success' : 'error',
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-widest text-slate-400">Data Defense</p>
        <h1 className="mt-1 text-3xl font-semibold">Data Protection & Encryption</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Secure Payloads</p>
              <h2 className="text-xl font-semibold">File Encryption Matrix</h2>
            </div>
            <Badge variant="info" className="uppercase tracking-wide">
              AES-256 Selected
            </Badge>
          </div>

          <label
            htmlFor="file"
            className="mt-6 flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-700 bg-slate-900/60 text-center transition hover:border-neon/70"
          >
            <CloudUpload className="h-10 w-10 text-neon" />
            <p className="mt-4 text-sm text-white">
              {file ? file.name : 'Drop a file or browse to upload'}
            </p>
            <p className="text-xs text-slate-500">Encrypted in-memory, never written to disk</p>
            <input id="file" type="file" className="hidden" onChange={handleFileChange} />
          </label>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Button
              className="w-full"
              onClick={() => runJob('encrypt')}
              disabled={!file || status === 'processing'}
              icon={Shield}
            >
              {status === 'processing' ? 'Processing...' : 'Encrypt File'}
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => runJob('decrypt')}
              disabled={!file || status === 'processing'}
              icon={KeyRound}
            >
              {status === 'processing' ? 'Processing...' : 'Decrypt File'}
            </Button>
          </div>
        </Card>

        <Card>
          <p className="text-xs uppercase tracking-wide text-slate-500">Job log</p>
          <h2 className="text-xl font-semibold text-white">Encryption feed</h2>
          <div className="mt-4 space-y-4">
            {log.length === 0 && (
              <p className="text-sm text-slate-500">No activity yet. Queue a file to begin.</p>
            )}
            {log.map((entry) => (
              <div
                key={entry.id}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-sm"
              >
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{new Date(entry.timestamp).toLocaleTimeString()}</span>
                  <Badge variant={entry.success ? 'success' : 'danger'}>
                    {entry.success ? 'Success' : 'Error'}
                  </Badge>
                </div>
                <p className="mt-2 text-white font-semibold">{entry.action}</p>
                <p className="text-slate-400">{entry.file}</p>
                <p className="text-xs text-slate-500">{entry.message}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default DataProtection

