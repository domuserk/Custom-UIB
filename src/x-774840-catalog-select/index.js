import { createCustomElement, actionTypes } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const { COMPONENT_PROPERTY_CHANGED } = actionTypes;

const view = (state, { updateState, updateProperties }) => {
	const { properties } = state;

	const init = () => { 
		// const div = document.body.childNodes[document.body.childNodes.length -1];
		
		// var qrcode = new QRCode(div.childNodes[1].shadowRoot.childNodes[1].childNodes[1]);
		// qrcode.makeCode('Ryan');

		// window.qrcodeInstance = new QRCode('qrcode');
		// window.qrcodeInstance.makeCode('Ryan');
	}

	return (
		<div>	
			<div >QrCode Generated 2</div>
			<div id="qrcode"></div>
			{/* <button on-click={() => updateProperties({ qrcode: 'NovoValor'})}>Clique</button> */}
			{/* <button on-click={() => init()}>Clique</button> */}
		</div>
	);
};

createCustomElement('x-774840-catalog-select', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties: {
		qrcode: { default: "Ryan" }
	},
	actionHandlers: {
		[COMPONENT_PROPERTY_CHANGED]: ({ action: { payload } }) => {
			//window.qrcodeInstance.makeCode(payload.value);
		}
	}
});
