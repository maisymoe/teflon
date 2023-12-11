# teflon
extension browser for moonlight

## scripts
dependencies are maintained via [pnpm](https://pnpm.io) using `pnpm up -Lri`, and these scripts are available:

### `pnpm dev` or `pnpm start`
* run teflon in development mode.
* open [http://localhost:3000](http://localhost:3000) to view it in the browser - the page will reload when you make an edit.

### `pnpm build`
* builds teflon for production into the `dist` folder.

## deployment
you can deploy the `dist` folder to any static host provider, such as vercel, gh pages, netlify, etc.
