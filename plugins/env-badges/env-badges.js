
export const loadEager = () => console.error('Never called');

export const loadLazy = () => document.body.classList.add(
  window.location.hostname === 'localhost' ? 'is-dev' : 'is-stage');