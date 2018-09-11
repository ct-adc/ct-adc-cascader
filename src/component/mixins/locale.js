import { t } from 'component/locale';

export default {
    methods: {
        t(...args) {
            return t.apply(this, args);
        }
    }
};
