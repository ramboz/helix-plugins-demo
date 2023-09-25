export default function init() {
  console.log('[plugin][debug] init', [...arguments], this);
}

export const loadEager = (...args) => console.log('[plugin][debug] eager', args);

export function loadLazy() {
  console.log('[plugin][debug] lazy', [...arguments], this);
}

export const loadDelayed = (...args) => console.log('[plugin][debug] delayed', args);