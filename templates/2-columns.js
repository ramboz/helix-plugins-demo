export default function init() {
  console.log('[templates][2-columns] Initializing template');
}

export function loadLazy() {
  document.querySelector('main').style.columnCount = 2;
}
