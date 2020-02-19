import React from 'react'

export default function index() {
  return (
    <input style={searchbox} placeholder="Search classes or professors"/>
  )
}

const searchbox = {
  padding: 8,
  background: '#f5f5f5',
  borderRadius: 8,
  width: 300,
  appearance: 'none',
  border: '1px solid rgb(166, 166, 166)',
}