// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('Z-1')
  res.status(200).json({ name: 'John Doe' })
}

export function handler2(req, res) {
  console.log('Z-2')
  res.status(200).json({ name: 'John Doe' })
}

export function handler3(req, res) {
  console.log('Z-2')
  res.status(200).json({ name: 'John Doe' })
}

export function handler4(req, res) {
  console.log('Z-2')
  res.status(200).json({ name: 'John Doe' })
}
