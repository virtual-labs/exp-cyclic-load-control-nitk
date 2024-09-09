importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"9ed23c8b87b58cb9067e175e30452fa2","url":"assignment.html"},{"revision":"781a610c0bdec605e9fb08c9b6725382","url":"feedback.html"},{"revision":"37b3c4968be00fe0303c27ae6d0b9e67","url":"images/normal1.png"},{"revision":"93d1eb1ba3084982efea0af9fcdcd849","url":"images/normal10.png"},{"revision":"6ef8efa446f4c6338138c029c6833fcf","url":"images/normal11.png"},{"revision":"992f3a231d81b51c6f58c92c33c2b7e2","url":"images/normal12.png"},{"revision":"44a143ec797891265e5af31d94f277b8","url":"images/normal13.png"},{"revision":"4f6fbc198e6957aa25fea9db40046a1a","url":"images/normal14.png"},{"revision":"c9cb981c530210ae173e3abbfa10d67e","url":"images/normal15.png"},{"revision":"67e86905d303ca0071369ae6392c8ca4","url":"images/normal16.png"},{"revision":"247665b39baa6a5067ab802fe235adf4","url":"images/normal17.png"},{"revision":"739362599b2a2efb700cd92a0ea655b1","url":"images/normal18.png"},{"revision":"9238f41540b8576aad16088017f5d0da","url":"images/normal19.png"},{"revision":"3310a214b9c7bd3224b63672ae62f1d1","url":"images/normal2.png"},{"revision":"e7d8226a5aa4608d527b4816715aecd5","url":"images/normal20.png"},{"revision":"a38a06af0d745288eb31196609e59d76","url":"images/normal21.png"},{"revision":"45e3a7082c94c219d4fccf6049deb027","url":"images/normal22.png"},{"revision":"778e9e938460a9eeed0a14e0e96bec1a","url":"images/normal23.png"},{"revision":"79b5ffd67d730262f9fa58207dbe197f","url":"images/normal24.png"},{"revision":"af6cefe761a8c0ca48e3daefe9382068","url":"images/normal25.png"},{"revision":"e4677c97ec1c464d6c68c8b2cb1b0f11","url":"images/normal26.png"},{"revision":"1b8612b069b1a39e9978e7a7a0fc79cc","url":"images/normal27.png"},{"revision":"d6daa6bd3509ce3ab347f6fb1c1840c7","url":"images/normal28.png"},{"revision":"7ca04286cafc42bec7e2cf163fb0ec97","url":"images/normal29.png"},{"revision":"5724e957d22fe4fa128d9f01f07e7924","url":"images/normal3.png"},{"revision":"2cd4785f36fac4b1260e8e263bd0ca3d","url":"images/normal30.png"},{"revision":"2c22898fa8a01572026262109a8d697b","url":"images/normal31.png"},{"revision":"a627de2b1de42aa6da8d292c19c450ae","url":"images/normal32.png"},{"revision":"8d01072bda63d69ef1591f9c062e0a34","url":"images/normal33.png"},{"revision":"0e29f397f666f84b20cb8763e207e56c","url":"images/normal34.png"},{"revision":"b65863b6363f6df109996c02e22f9f45","url":"images/normal35.png"},{"revision":"2282868671f066cde7ecfe43657943ff","url":"images/normal36.png"},{"revision":"582c95e55f52acfa8bb142f128bd487c","url":"images/normal37.png"},{"revision":"8b0b3d2df79c1cb3567514a0bfe3935f","url":"images/normal38.png"},{"revision":"38d71069d6c3b45416c89b14c3b6a178","url":"images/normal39.png"},{"revision":"6fdc70e87bc65dccb87bc827886dd3cb","url":"images/normal4.png"},{"revision":"5bd2026a767108eac2e3a041da240d21","url":"images/normal40.png"},{"revision":"a60bd89c4019f95d6c42cd2b37d392ab","url":"images/normal41.png"},{"revision":"c4720d6c1d285d3d10a44a00db17e5e1","url":"images/normal42.png"},{"revision":"82d7fd6f12ca8688a1482148b50cd5a4","url":"images/normal43.png"},{"revision":"d90277a325da302d699c6a4e3bfe7454","url":"images/normal5.png"},{"revision":"b5e3ea5d891e599eb37dfe29292d7595","url":"images/normal6.png"},{"revision":"4ce9a3f7114512b85a14d60a0b5f9f3d","url":"images/normal7.png"},{"revision":"ff224d5bea8475e3619dbf800b87873f","url":"images/normal8.png"},{"revision":"98b607d6cd22cad3d863b243aaff68eb","url":"images/normal9.png"},{"revision":"b4b5100c14e3bed2a9ffca2c19cea898","url":"images/proc1.png"},{"revision":"d9fd92b2c772f78c2b3f6e7a8903d12c","url":"images/proc10.png"},{"revision":"3947b00b430652b4e7b103f9b4948b16","url":"images/proc11.png"},{"revision":"300bd40a18c133133f14f73ea5541abd","url":"images/proc12.png"},{"revision":"7e156873e4812b314cdd9d9ed00208a4","url":"images/proc13.png"},{"revision":"3931bdfe0ab445e3cda4a6209a98666e","url":"images/proc14.png"},{"revision":"13cf4277fdb7f21246a0009000f1ed7f","url":"images/proc15.png"},{"revision":"9bb571744e785ae19fe4af1b1faaa5e6","url":"images/proc2.png"},{"revision":"6c20620a32e38f7748e13e70effff9a4","url":"images/proc3.png"},{"revision":"f495c6798cfcbfd2d7868b167e308fdd","url":"images/proc4.png"},{"revision":"dbcbc25ee017ce3c12cc2355a64114f4","url":"images/proc5.png"},{"revision":"e310dd77a6ebe51b8c5923bac56b3757","url":"images/proc6.png"},{"revision":"840d1c9c038fe18b06a436b20a4241c8","url":"images/proc7.png"},{"revision":"d70d10a22fece3ffa508b729d9f85bd9","url":"images/proc8.png"},{"revision":"502dbbfa9f8b3c331046ce21146a8972","url":"images/proc9.png"},{"revision":"0fd67242ed6c70155381fec1f163420a","url":"images/timer1.png"},{"revision":"9ff6b45959c2da03b041a2a2c8bab3f1","url":"images/timer2.png"},{"revision":"98bedbd5340ee5d4a9b5d026e3b8ed68","url":"images/timer3.png"},{"revision":"9c72abe28110e357c1c2e80b81e43b18","url":"images/timer4.png"},{"revision":"619bda2ee648ab6aee2538baf05fa065","url":"images/timer5.png"},{"revision":"d1bf2933fc86f7092125fabca2dc1e5a","url":"index.html"},{"revision":"f5f330c4d725bd814b44fbdaf50a93cf","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook.css"},{"revision":"262b6b0ad513fbe807f47db9cf39b845","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook0x.png"},{"revision":"32a989dfc4f4bde24999c140ada58170","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook10x.png"},{"revision":"b8d5ea51a25893c4ff23f982f31e4cd7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook11x.png"},{"revision":"a7268407325c163199b8b4a0d1aaf0a8","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook12x.png"},{"revision":"9e81c60e1fcb3e2bcaf4d0d53e51dc6c","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook13x.png"},{"revision":"c835221cb080ce3efc68ff2b77deca11","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook14x.png"},{"revision":"f098303b8d67b11d55e463f3f951e314","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook15x.png"},{"revision":"da17ba4578b73f3bece361a94be4e92b","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook16x.png"},{"revision":"ed0f27880004f5a61bea86bafeca3030","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook17x.png"},{"revision":"da3b1c7f585b9589459f1d6a2bea9264","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook18x.png"},{"revision":"4add9f41bd5428de17a34d7cb1e2c6c7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook19x.png"},{"revision":"3f6dd9a256112aaadf77f41e4f4bb482","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook1x.png"},{"revision":"2e19e90e544f371bf3b3eed5cf8f1fe5","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook20x.png"},{"revision":"c5758cabf39d5db63b29a2f881e97f88","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook21x.png"},{"revision":"9d05eaf3b5d4a2552b872b8d37a52cee","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook22x.png"},{"revision":"e1d2af85c019b9f5ad6e4d4dd57a40f7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook23x.png"},{"revision":"bc1245b69597e57863d90dc0fa4cd5e8","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook2x.png"},{"revision":"f0816ee1c7e80dd7ad54250ac7fc75af","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook3x.png"},{"revision":"f8664c3ea3fde893dd7a7b2816a8ef6a","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook4x.png"},{"revision":"7204e608f0d829682e0f7a7fb7af5089","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook5x.png"},{"revision":"fa2800085181d50d8cd4e8dcd9ffc3d4","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook6x.png"},{"revision":"b836de8c3c0005a99652bea4d2b8c7e2","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook7x.png"},{"revision":"ec95855e0a7a9f308e1762a417a59131","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook8x.png"},{"revision":"890b89b8b900ab1b54f9041a2715a4dc","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook9x.png"},{"revision":"024a32b24d9a1854ede637c3c560fe8b","url":"Libraries/stanford-Interactive Activation and Competition_files/jetsandsharkstable.png"},{"revision":"6093651be571fe02895a250837ddff16","url":"Libraries/stanford-Interactive Activation and Competition_files/jetsdiagram.png"},{"revision":"bfbed2bfefb3cdc97a27e274abdb298f","url":"Libraries/stanford-Interactive Activation and Competition_files/netviewer100.png"},{"revision":"dbf0b4cbe87be45e4b4ae9f303a0ea02","url":"Libraries/stanford-Interactive Activation and Competition_files/netviewerInit.png"},{"revision":"2ff1f6c65f990fed86769663e1598501","url":"Libraries/stanford-Interactive Activation and Competition.html"},{"revision":"327d66522f1a510ee9347aa42970ee5c","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"423c164f07e5f0b3ee48aa0618e5191e","url":"posttest.html"},{"revision":"7f44d5e509234872d221a5927dcd8de8","url":"posttest.json"},{"revision":"0ac8e0bd843496f9ec125becffb96996","url":"pretest.html"},{"revision":"901717970ae5071df096c56d492654ef","url":"pretest.json"},{"revision":"8a01fcfe2db8e015041721d9126f5e4c","url":"procedure.html"},{"revision":"540a134c46417ac08fd00c61a53277c9","url":"references.html"},{"revision":"1eb93c80a3dc93c22dc4b2d68a5a2bbd","url":"simulation.html"},{"revision":"8581827a0c86e17b73c9e58be5ccc4fa","url":"simulation/css/plc.css"},{"revision":"1e01241b44562ec9be28ccdaee5741c2","url":"simulation/images/logo_nitk.png"},{"revision":"122b9e715d6b4a76f6c2b8d3caabfeaf","url":"simulation/images/main-nb.png"},{"revision":"239d5c0ea97f852c32e59f0469898d2d","url":"simulation/images/main.png"},{"revision":"1e671f3ed9d7bee38a80330d8e1bb122","url":"simulation/images/slantClose.png"},{"revision":"d9f1c3a4feb34f1ba902758c69ecf56c","url":"simulation/images/slantOpen.png"},{"revision":"18284415138d150705927f7c3d996570","url":"simulation/images/swClose.png"},{"revision":"aeb5d7654d104ae719b9877c6c5c5fcb","url":"simulation/images/swicthClose.png"},{"revision":"54a95ebcbba21bfbd90477842bc46755","url":"simulation/images/switchClose.png"},{"revision":"fb51f556f752aeb43c26226b88de3127","url":"simulation/images/switchOpen.png"},{"revision":"63dea7ca2052c83c84178715d12f293e","url":"simulation/images/swOpen.png"},{"revision":"b03a70ef65ac5a0c91647b6474feff7b","url":"simulation/index.html"},{"revision":"5f608a80fc8036a13ee22770743bc21d","url":"simulation/js/plc.js"},{"revision":"f8db17d2dc308ef20ff37c93b21d4831","url":"theory.html"},{"revision":"1daeec9073ab4aa21596547874db21e4","url":"validator-report.html"},{"revision":"69db4c2296128d48af5fe3875ae7eaf9","url":"videos.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );