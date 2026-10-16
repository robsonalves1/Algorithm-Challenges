function humanReadable (seconds) {
  let h = 0;
  let m = 0;
  let s = 0;
  
  h = Math.floor(seconds / 3600);
  m = Math.floor((seconds % 3600) / 60);
  s = seconds % 60;
  
  const pad = (n) => String(n).padStart(2, "0");
  
  return pad(h) + ':' + pad(m) + ':' + pad(s);
}