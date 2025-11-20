import { useEffect, useState } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { networkActivitySeed, suspiciousIps } from '../utils/mockData.js'
import { Activity, Wifi } from 'lucide-react'

const riskVariant = {
  High: 'danger',
  Medium: 'warning',
  Low: 'info',
}

const NetworkMonitor = () => {
  const [activity, setActivity] = useState(networkActivitySeed)

  useEffect(() => {
    const interval = setInterval(() => {
      setActivity((current) => {
        const nextPoint = {
          time: `${current.length + 1} sec`,
          packets: 700 + Math.round(Math.random() * 650),
          anomalies: 3 + Math.round(Math.random() * 15),
        }
        const sliced = [...current.slice(-19), nextPoint]
        return sliced
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-widest text-slate-400">Network intel</p>
        <h1 className="mt-1 text-3xl font-semibold">Network Monitor</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Real-time activity graph
              </p>
              <h2 className="text-xl font-semibold text-white">Packet telemetry</h2>
            </div>
            <Badge variant="info" className="flex items-center gap-2">
              <Wifi className="h-3.5 w-3.5" /> Live feed
            </Badge>
          </div>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activity}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.2)" strokeDasharray="4 4" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#020617',
                    border: '1px solid #1e293b',
                    borderRadius: '0.75rem',
                    color: '#e2e8f0',
                  }}
                />
                <Line type="monotone" dataKey="packets" stroke="#22ff88" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="anomalies" stroke="#f43f5e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-neon/60 bg-night p-2.5">
              <Activity className="h-5 w-5 text-neon" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Threat watch</p>
              <h2 className="text-xl font-semibold text-white">Suspicious IPs</h2>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {suspiciousIps.map((entry) => (
              <div
                key={entry.ip}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{entry.ip}</p>
                  <Badge variant={riskVariant[entry.risk]}>{entry.risk}</Badge>
                </div>
                <p className="mt-2 text-slate-400">{entry.reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default NetworkMonitor

