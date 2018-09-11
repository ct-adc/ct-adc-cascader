import Cascader from './src/main';
import './style/icon.css';
/* istanbul ignore next */
Cascader.install = function(Vue) {
    Vue.component(Cascader.name, Cascader);
};

export default Cascader;
