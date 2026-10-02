// PDF.js asks this factory for bundled CMaps, standard fonts, and WebAssembly.
// Keep the original bytes while avoiding hundreds of separate static assets.
let bundlePromise;
function loadBundle(){if(!bundlePromise){bundlePromise=(async()=>{const response=await fetch(new URL('./vendor/binary-data.json.gz',import.meta.url));if(!response.ok||!response.body)throw Error('PDF表示用データを読み込めませんでした。');const stream=response.body.pipeThrough(new DecompressionStream('gzip'));return new Response(stream).json();})();bundlePromise.catch(()=>{bundlePromise=undefined;});}return bundlePromise;}
export class PackedBinaryDataFactory {
 async fetch({kind,filename}){
  const directories={cMapUrl:'cmaps',standardFontDataUrl:'standard_fonts',wasmUrl:'wasm'};
  if(!Object.hasOwn(directories,kind)||typeof filename!=='string'||filename.includes('/')||filename.includes('..'))throw Error('Invalid binary-data request');
  const map=await loadBundle();const key=`${directories[kind]}/${filename}`;
  if(!Object.hasOwn(map,key))throw Error(`Missing PDF data: ${key}`);
  const raw=atob(map[key]);const bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);return bytes;
 }
}
