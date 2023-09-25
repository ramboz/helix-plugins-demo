import { onCLS, onFID, onLCP, onFCP, onINP } from './web-vitals.js';

export default function() {
  onCLS((ev) => console.log('[plugin][cwv]', ev));
  onFCP((ev) => console.log('[plugin][cwv]', ev));
  onFID((ev) => console.log('[plugin][cwv]', ev));
  onINP((ev) => console.log('[plugin][cwv]', ev));
  onLCP((ev) => console.log('[plugin][cwv]', ev));
}
