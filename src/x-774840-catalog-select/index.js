import { createCustomElement, actionTypes } from '@servicenow/ui-core';
import snabbdom, { createRef } from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import QRCode from "./qrcode";

const { COMPONENT_PROPERTY_CHANGED, COMPONENT_DOM_READY } = actionTypes;

const qrCodeRef = createRef();

var qrCodeInstance;


const view = (state, { updateState, updateProperties }) => {
	const { properties } = state;

	return (
		<div>	
			<div >QrCode Generate</div>
			<div ref={qrCodeRef}/>
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
		[COMPONENT_DOM_READY]: ({ action: { payload } }) => {
			qrCodeInstance = new QRCode(qrCodeRef.current, 'Ryan');
		},
		[COMPONENT_PROPERTY_CHANGED]: ({ action: { payload } }) => {
			qrCodeInstance.makeCode(payload.value);
		}
	}
});
