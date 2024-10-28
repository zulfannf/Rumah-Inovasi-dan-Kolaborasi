import './bootstrap';

import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

// document.addEventListener('alpine:init', () => {
//     Alpine.data('bodyPaddingHandler', () => ({
//         init() {
//             this.$watch('$store.navbar.isFixed', (value) => {
//                 if (value) {
//                     this.bodyPadding = document.getElementById('navbar').offsetHeight + 'px';
//                 } else {
//                     this.bodyPadding = '0px';
//                 }
//             });
//         }
//     }));

//     Alpine.store('navbar', {
//         isFixed: false
//     });
// });
