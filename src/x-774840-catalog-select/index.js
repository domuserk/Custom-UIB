import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>Ryan</div>
	);
};

createCustomElement('x-774840-catalog-select', {
	renderer: {type: snabbdom},
	view,
	styles
});
