module.exports = function (vnode) {
    var looper = null;
    var routeToMainInvokedCount = 0;
    return {
        routeToMain() {
            routeToMainInvokedCount++;
            if (vnode.state.dataLoaded) {
                clearTimeout(looper);
                m.route.set('/home');
            }
        },
        oninit() {
            this.dataLoaded = false;
            Promise.all([
                // Fetch all necessary data here
            ]).then(() => {
                this.dataLoaded = true;
                if (routeToMainInvokedCount) {
                    this.routeToMain();
                }
            });
        },
        oncreate() {
            looper = setTimeout(this.routeToMain, 2000);
        },
        view() {
            return [
                m('.container-fluid', [
                    m('.holder.row', [
                        m('.col.align-self-center.justify-content-center', [
                            m('img.loading[src="images/logo-black.png"]'),
                        ])
                    ])
                ])
            ]
        },
    };
};
