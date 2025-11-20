import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Radar, ShieldCheck } from 'lucide-react'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import Table from '../components/Table.jsx'
import { kpiCards, recentAlerts } from '../utils/mockData.js'

const statusPalette = {
  green: {
    label: 'Green',
    description: 'All defenses nominal',
    badge: 'success',
  },
  yellow: {
    label: 'Yellow',
    description: 'Heightened watch',
    badge: 'warning',
  },
  red: {
    label: 'Red',
    description: 'Active incident',
    badge: 'danger',
  },
}

const Dashboard = () => {
  const [liveStatus] = useState('green')

  const trendIcon = (trend) => (trend === 'up' ? ArrowUpRight : ArrowDownRight)

  const alertColumns = useMemo(
    () => [
      { key: 'id', header: 'Alert ID' },
      { key: 'severity', header: 'Severity', render: (row) => (
        <Badge
          variant={
            row.severity === 'Critical'
              ? 'danger'
              : row.severity === 'High'
                ? 'warning'
                : 'info'
          }
        >
          {row.severity}
        </Badge>
      ) },
      { key: 'description', header: 'Description' },
      { key: 'source', header: 'Source' },
      { key: 'time', header: 'Timestamp' },
    ],
    [],
  )

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-widest text-slate-400">Cyber defense overview</p>
        <h1 className="mt-1 text-3xl font-semibold">Mission Control Dashboard</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((card) => {
          const Icon = trendIcon(card.trend)
          return (
            <Card key={card.label}>
              <p className="text-xs uppercase tracking-wide text-slate-500">{card.label}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-3xl font-bold text-white">{card.value}</p>
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${
                    card.trend === 'up'
                      ? 'bg-emerald-500/10 text-emerald-300'
                      : 'bg-rose-500/10 text-rose-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {card.delta}
                </span>
              </div>
              <div className="mt-4 h-1 w-full rounded-full bg-slate-800">
                <div
                  className="h-1 rounded-full bg-neon"
                  style={{ width: card.trend === 'up' ? '78%' : '42%' }}
                />
              </div>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Recent Alerts</p>
              <h2 className="text-xl font-semibold text-white">Threat stream</h2>
            </div>
            <Badge variant="info">Synced now</Badge>
          </div>
          <Table columns={alertColumns} data={recentAlerts} getRowKey={(row) => row.id} />
        </Card>

        <Card className="bg-gradient-to-br from-slate-900 via-slate-900/80 to-night">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-neon/70 bg-night p-3 shadow-glow">
              <ShieldCheck className="h-6 w-6 text-neon" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Live security status</p>
              <h2 className="text-2xl font-semibold text-white">Shield posture</h2>
            </div>
          </div>
          <div className="mt-6">
            <Badge variant={statusPalette[liveStatus].badge}>
              {statusPalette[liveStatus].label}
            </Badge>
            <p className="mt-3 text-sm text-slate-300">{statusPalette[liveStatus].description}</p>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Signal integrity</p>
                <p className="text-sm text-white">99.3%</p>
              </div>
              <Radar className="h-5 w-5 text-neon" />
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Node hardening</p>
                <p className="text-sm text-white">98 endpoints sealed</p>
              </div>
              <ShieldCheck className="h-5 w-5 text-neon" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

