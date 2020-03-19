import React from 'react'

export default function observe(receive) {
    const ranPos = () => Math.floor(Math.random() * 8);
    setInterval(() => receive([ranPos(), ranPos()] ), 3000) 
}