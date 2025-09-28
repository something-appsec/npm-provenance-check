import { build } from 'esbuild';

await build({
  entryPoints: ['index.js'],
  bundle: true,            // include dependencies
  platform: 'node',
  target: 'node20',
  format: 'esm',
  outfile: 'dist/app.js',
  minify: true,
  sourcemap: true,
  define: { 'process.env.NODE_ENV': '"production"' }
});