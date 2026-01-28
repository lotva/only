export const degToRad = (d: number) => (d * Math.PI) / 180

export const radToDeg = (r: number) => (r * 180) / Math.PI

export const normalizeRad = (a: number) => Math.atan2(Math.sin(a), Math.cos(a))
