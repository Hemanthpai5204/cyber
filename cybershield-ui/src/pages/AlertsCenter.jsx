import { useMemo, useState } from 'react'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import Modal from '../components/Modal.jsx'
import { alertFeed, alertFilters } from '../utils/mockData.js'

const severityVariant = {
  Critical: 'danger',
  High: 'warning',
  Medium: 'info',
  Low: 'neutral',
}

const AlertsCenter = () => {
  const [filter, setFilter] = useState('Critical')
  const [activeAlert, setActiveAlert] = useState(null)

  const filteredAlerts = useMemo(
    () => alertFeed.filter((alert) => alert.severity === filter),
    [filter],
  )

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-widest text-slate-400">Alerting hub</p>
        <h1 className="mt-1 text-3xl font-semibold">Alerts Center</h1>
      </div>

      <Card>
        <div className="flex flex-wrap gap-3">
          {alertFilters.map((level) => (
            <Button
              key={level}
              variant={filter === level ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter(level)}
            >
              {level}
            </Button>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredAlerts.map((alert) => (
          <Card
            key={alert.id}
            className="cursor-pointer border-slate-800 transition hover:border-neon/60"
            onClick={() => setActiveAlert(alert)}
          >
            <div className="flex items-center justify-between">
              <Badge variant={severityVariant[alert.severity]}>{alert.severity}</Badge>
              <p className="text-xs uppercase tracking-wide text-slate-500">{alert.timestamp}</p>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{alert.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{alert.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Vector: {alert.vector}
              </span>
              <span className="rounded-full border border-slate-700 px-3 py-1">
                Owner: {alert.owner}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={Boolean(activeAlert)}
        onClose={() => setActiveAlert(null)}
        placement="right"
        size="md"
        title={activeAlert?.title || 'Alert details'}
        footer={
          <div className="flex justify-between gap-3">
            <Button variant="outline" className="w-full" onClick={() => setActiveAlert(null)}>
              Dismiss
            </Button>
            <Button className="w-full">Escalate</Button>
          </div>
        }
      >
        {activeAlert && (
          <>
            <div className="flex items-center justify-between">
              <Badge variant={severityVariant[activeAlert.severity]}>
                {activeAlert.severity}
              </Badge>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {activeAlert.timestamp}
              </p>
            </div>
            <p className="text-sm text-slate-300">{activeAlert.description}</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span className="font-semibold text-slate-200">Vector:</span> {activeAlert.vector}
              </li>
              <li>
                <span className="font-semibold text-slate-200">Owner:</span> {activeAlert.owner}
              </li>
              <li>
                <span className="font-semibold text-slate-200">Alert ID:</span> {activeAlert.id}
              </li>
            </ul>
          </>
        )}
      </Modal>
    </div>
  )
}

export default AlertsCenter

