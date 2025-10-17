const fs = require('fs');
const path = '.env.development';
const text = fs.readFileSync(path, 'utf8');
console.log('raw file:');
console.log('---');
console.log(text);
console.log('---');
const lines = text.split(/\r?\n/).filter(Boolean);
const parsed = {};
for (const line of lines) {
  if (!line || line.trim().startsWith('#')) continue;
  const eq = line.indexOf('=');
  if (eq === -1) continue;
  const key = line.slice(0, eq).trim();
  const val = line.slice(eq + 1);
  parsed[key] = val;
}
console.log('parsed keys and types:');
for (const k of Object.keys(parsed)) {
  const v = parsed[k];
  console.log(k, '->', JSON.stringify(v), typeof v);
}
// Also show DATABASE_URL and POSTGRES_PASSWORD specifically
console.log('\nsummary:');
console.log('POSTGRES_PASSWORD:', JSON.stringify(parsed.POSTGRES_PASSWORD));
console.log('DATABASE_URL:', JSON.stringify(parsed.DATABASE_URL));
