import { createCustomElement, actionTypes } from '@servicenow/ui-core';
import snabbdom, { createRef } from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import QRCode from "./qrcode";
import html2pdf from 'html2pdf.js';

const { COMPONENT_PROPERTY_CHANGED, COMPONENT_DOM_READY } = actionTypes;

const qrCodeRef = createRef();
const printRef = createRef();

var qrCodeInstance;

const view = (state, { updateState, updateProperties }) => {
	const { properties } = state;

	const print = () => {
		const options = {
			margin: 2.5,
			filename: 'QrCode.pdf',
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },
			jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
		};
	
		html2pdf().from(printRef.current).set(options).save();
	}

	return (
		<div ref={printRef}>	
			<div> QrCode Generate </div>
			<div ref={qrCodeRef}/>
			<button on-click={() => print()}>Print QrCode</button>
		</div>
	);
};

createCustomElement('x-774840-catalog-select', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties: {
		qrcode: { default: "Ryan"}
	},
	actionHandlers: {
		[COMPONENT_DOM_READY]: ({ action: { payload }, properties}) => {
			qrCodeInstance = new QRCode(qrCodeRef.current, properties.qrcode);
		},
		[COMPONENT_PROPERTY_CHANGED]: ({ action: { payload }}) => {
			qrCodeInstance.makeCode(payload.value);
		}
	}
});
