import MelvVariantSwitchPlugin from './script/variant-switch-override.plugin';

const PluginManager = window.PluginManager;

PluginManager.override('VariantSwitch', MelvVariantSwitchPlugin, '[data-variant-switch]');

if (module.hot) {
    module.hot.accept();
}
