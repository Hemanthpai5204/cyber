import { useState } from 'react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import Table from '../components/Table.jsx'
import Switch from '../components/Switch.jsx'
import Badge from '../components/Badge.jsx'
import { usersSeed } from '../utils/mockData.js'
import { useToasts } from '../hooks/useToasts.jsx'

const AccessControl = () => {
  const [users, setUsers] = useState(usersSeed)
  const { addToast } = useToasts()
  const [form, setForm] = useState({
    name: '',
    role: '',
    permission: 'Read',
    mfa: true,
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.role) return
    const newUser = { ...form, id: Date.now() }
    setUsers((prev) => [newUser, ...prev])
    addToast({
      title: 'Access updated',
      description: `${form.name} granted ${form.permission} permissions.`,
      type: 'success',
    })
    setForm({ name: '', role: '', permission: 'Read', mfa: true })
  }

  const setMfa = (userId, nextValue) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, mfa: nextValue } : user)),
    )
    addToast({
      title: 'MFA updated',
      description: `Multi-factor authentication ${nextValue ? 'enabled' : 'disabled'}.`,
      type: nextValue ? 'success' : 'warning',
    })
  }

  const columns = [
    {
      key: 'name',
      header: 'User',
      render: (row) => (
        <div>
          <p className="font-semibold text-white">{row.name}</p>
          <p className="text-xs text-slate-400">{row.role}</p>
        </div>
      ),
    },
    {
      key: 'permission',
      header: 'Permission',
      render: (row) => (
        <Badge
          variant={
            row.permission === 'Admin'
              ? 'danger'
              : row.permission === 'Write'
                ? 'warning'
                : 'info'
          }
        >
          {row.permission}
        </Badge>
      ),
    },
    {
      key: 'mfa',
      header: 'MFA',
      render: (row) => <Switch enabled={row.mfa} onChange={(value) => setMfa(row.id, value)} />,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-widest text-slate-400">Identity perimeter</p>
        <h1 className="mt-1 text-3xl font-semibold">Access Control</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wide text-slate-500">Add user role</p>
          <h2 className="text-xl font-semibold text-white">Provision Access</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs uppercase tracking-wide text-slate-500">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-neon focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-slate-500">Role</label>
              <input
                type="text"
                name="role"
                value={form.role}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-neon focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wide text-slate-500">Permission</label>
              <select
                name="permission"
                value={form.permission}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-white focus:border-neon focus:outline-none"
              >
                <option>Read</option>
                <option>Write</option>
                <option>Admin</option>
              </select>
            </div>
            <label className="flex items-center gap-3 text-sm text-slate-400">
              <input
                type="checkbox"
                name="mfa"
                checked={form.mfa}
                onChange={handleChange}
                className="rounded border-slate-700 bg-slate-900"
              />
              Enable MFA for this user
            </label>
            <Button type="submit" className="w-full">
              Add User
            </Button>
          </form>
        </Card>

        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                User access directory
              </p>
              <h2 className="text-xl font-semibold text-white">Control plane</h2>
            </div>
            <Badge variant="info">{users.length} users</Badge>
          </div>
          <div className="mt-5">
            <Table columns={columns} data={users} getRowKey={(row) => row.id} />
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AccessControl

