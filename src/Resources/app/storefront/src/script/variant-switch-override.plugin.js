import VariantSwitchPlugin from 'src/plugin/variant-switch/variant-switch.plugin.js';
import * as queryString from "querystring";

export default class MelvVariantSwitchPlugin extends VariantSwitchPlugin {
    /**
     * gets the url of the new variant
     * and redirects to this url
     *
     * @param {Object} data
     * @private
     */
    _redirectToVariant(data) {
        //PageLoadingIndicatorUtil.create();
        const url = this.options.url + '?' + queryString.stringify(data);
        this._httpClient.get(`${url}`, (response) => {
            const data = JSON.parse(response);
            window.location.replace(data.url);
        });
    }
}
