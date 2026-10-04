import { Variant } from 'context/AccountContext/interfaces';

// Mirrors the "_deep" shades in src/styles/_colors.scss.
// Kept in JS (rather than a CSS module) so it can be applied straight to
// `document.body` without ever landing in a <style> tag that gets copied
// into the generated eBay listing HTML/CSS.
export const THEME_BODY_BACKGROUND: Record<Variant, string> = {
  poke_gems: '#1b3664',
  tcg_gems: '#e0a300',
  poke_relics: '#7a1114'
};
