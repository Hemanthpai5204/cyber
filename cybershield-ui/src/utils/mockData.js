export const kpiCards = [
  { label: 'Threats Blocked', value: '1,287', delta: '+14%', trend: 'up' },
  { label: 'Vulnerabilities Found', value: '62', delta: '-8%', trend: 'down' },
  { label: 'Active Sessions', value: '342', delta: '+5%', trend: 'up' },
  { label: 'Data Encrypted', value: '9.8 TB', delta: '+21%', trend: 'up' },
]

export const recentAlerts = [
  {
    id: 'AL-1029',
    severity: 'Critical',
    description: 'Unauthorized admin escalation attempt detected.',
    source: 'Zero Trust Gateway',
    time: '2 mins ago',
  },
  {
    id: 'AL-1028',
    severity: 'High',
    description: 'Malware beacon blocked from outbound channel.',
    source: 'Endpoint Defense',
    time: '18 mins ago',
  },
  {
    id: 'AL-1027',
    severity: 'Medium',
    description: 'Anomalous login sequence flagged for review.',
    source: 'IAM Core',
    time: '43 mins ago',
  },
]

export const networkActivitySeed = Array.from({ length: 20 }).map((_, index) => ({
  time: `${index + 1} sec`,
  packets: 800 + Math.round(Math.random() * 600),
  anomalies: 5 + Math.round(Math.random() * 12),
}))

export const suspiciousIps = [
  { ip: '185.199.110.153', reason: 'Repeated SSH brute force', risk: 'High' },
  { ip: '44.231.122.90', reason: 'Beaconing behavior', risk: 'Medium' },
  { ip: '77.88.5.50', reason: 'Malformed TLS handshake', risk: 'Medium' },
  { ip: '201.48.22.14', reason: 'Tor exit node', risk: 'Low' },
]

export const usersSeed = [
  { id: 1, name: 'Ava Sentinel', role: 'Admin', permission: 'Admin', mfa: true },
  { id: 2, name: 'Noah Trace', role: 'Threat Analyst', permission: 'Write', mfa: true },
  { id: 3, name: 'Lena Matrix', role: 'Compliance', permission: 'Read', mfa: false },
]

export const alertFeed = [
  {
    id: 'AL-2001',
    severity: 'Critical',
    title: 'Exfil attempt intercepted',
    timestamp: 'Just now',
    vector: 'SCP over TLS',
    owner: 'SOC Team',
    description: 'Outbound SCP transfer blocked. Fingerprint matches known APT-42 behavior.',
  },
  {
    id: 'AL-1994',
    severity: 'High',
    title: 'Suspicious lateral movement',
    timestamp: '8 mins ago',
    vector: 'SMB enumeration',
    owner: 'Blue Team',
    description: 'SMB enumeration detected across finance subnet. Source quarantined.',
  },
  {
    id: 'AL-1988',
    severity: 'Medium',
    title: 'Degraded tunnel health',
    timestamp: '21 mins ago',
    vector: 'VPN',
    owner: 'NetOps',
    description: 'Multiple retries on VPN tunnel 4. Possible MITM attempt under investigation.',
  },
  {
    id: 'AL-1971',
    severity: 'Low',
    title: 'Patch compliance drift',
    timestamp: '1 hr ago',
    vector: 'Config',
    owner: 'SecOps',
    description: 'Three DevOps agents missing latest critical patch. Auto-remediation queued.',
  },
]

export const alertFilters = ['Critical', 'High', 'Medium', 'Low']

