
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 70770, hash: 'bdb5785b57332202e92f7f846944f162f47074de023fa6031c54825852090a73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17145, hash: '778b9c02f8ef75b965a37f3c48052d0c6a654529e9a5236cb055ed6119e0fb06', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RMDKC3JG.css': {size: 95424, hash: 'Q0K5J+l/EJs', text: () => import('./assets-chunks/styles-RMDKC3JG_css.mjs').then(m => m.default)}
  },
};
