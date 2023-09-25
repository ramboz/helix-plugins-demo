
export const loadEager = () => console.error('Never called');

export const loadLazy = () => {
  if (window.location.hostname === 'localhost') document.body.classList.add('is-dev');
  if (window.location.hostname.endsWith('.hlx.page')) document.body.classList.add('is-stage');
  if (window.location.hostname.endsWith('.hlx.live')) document.body.classList.add('is-live');
}