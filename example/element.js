import '../src/x-774840-catalog-select';

const el = document.createElement('DIV');
const script = document.createElement('script');

script.type = 'text/javascript';
script.src = '@domuserk/catalog-select/qrcode.js';
document.body.appendChild(el);
document.head.appendChild(script);

// script.onload = () => {
//     window.qrcodeInstance = new QRCode('qrcode');
//     window.qrcodeInstance.makeCode('Ryan');
// }

el.innerHTML = `	
<x-774840-catalog-select></x-774840-catalog-select>	
`;
