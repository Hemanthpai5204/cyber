import { useState } from 'react'

const simulateOperation = (action, fileName) =>
  new Promise((resolve) => {
    const latency = 800 + Math.random() * 600
    setTimeout(() => {
      const succeeded = Math.random() > 0.1
      if (!succeeded) {
        resolve({
          success: false,
          message: `${action} failed. Integrity check mismatch.`,
        })
        return
      }
      resolve({
        success: true,
        message: `${action} completed for ${fileName}`,
      })
    }, latency)
  })

export const useEncryptionService = () => {
  const [status, setStatus] = useState('idle')
  const [log, setLog] = useState([])

  const handleAction = async (action, file) => {
    if (!file) {
      return {
        success: false,
        message: 'Select a file before running encryption jobs.',
      }
    }
    setStatus('processing')
    const response = await simulateOperation(action, file.name)
    setLog((current) => [
      {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        action,
        file: file.name,
        timestamp: new Date().toISOString(),
        ...response,
      },
      ...current.slice(0, 4),
    ])
    setStatus(response.success ? 'success' : 'error')
    return response
  }

  return {
    status,
    log,
    encrypt: (file) => handleAction('Encrypt', file),
    decrypt: (file) => handleAction('Decrypt', file),
    resetStatus: () => setStatus('idle'),
  }
}

