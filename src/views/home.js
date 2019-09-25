// COMPONENTS
import Hero from './components/hero'

// VIDEO
import 'cover.mp4'
import 'cover.webm'
import 'cover.ogv'

// IMAGES
import 'brixtol-textiles-logo.png'
import 'stutterheim-logo.png'
import 'havaianas-logo.png'
import 'teva-logo.png'
import 'shoe-the-bear-logo.png'
import 'superga-logo.png'

const data = {
    hero: {
        caption: 'We are a multi-brand fashion agency in Stockholm, Sweden. We manage and act on behalf of internationally recognized apparel brands.',
        video: {
            webm: 'video/cover.webm',
            mp4: 'video/cover.mp4'
        }
    }
}

module.exports = ( /*vnode*/ ) => {
    return {
        view( /*vnode*/ ) {
            return [
                m('.container-fluid.p-0', [
                    m(Hero, data.hero),
                    m('.row.justify-content-center.align-content-center.brands', [
                        m('.col-10.col-md-2.align-self-center', [
                            m('a[href="/brands/brixtol-textiles"]', {
                                oncreate: m.route.link
                            }, [
                                m('img[src="images/brixtol-textiles-logo.png"]')
                            ])
                        ]),
                        m('.col-10.col-md-2.align-self-center', [
                            m('a[href="/brands/havaianas"]', {
                                oncreate: m.route.link
                            }, [
                                m('img[src="images/havaianas-logo.png"]')
                            ])
                        ]),
                        m('.col-10.col-md-2.align-self-center', [
                            m('a[href="/brands/stutterheim"]', {
                                oncreate: m.route.link
                            }, [
                                m('img[src="images/stutterheim-logo.png"]')
                            ])
                        ]),
                        m('.col-10.col-md-2.align-self-center', [
                            m('a[href="/brands/teva"]', {
                                oncreate: m.route.link
                            }, [
                                m('img[src="images/teva-logo.png"]')
                            ])
                        ]),
                        m('.col-10.col-md-2.align-self-center', [
                            m('a[href="/brands/shoe-the-bear"]', {
                                oncreate: m.route.link
                            }, [
                                m('img[src="images/shoe-the-bear-logo.png"]')
                            ])
                        ]),
                        m('.col-10.col-md-2.align-self-center', [
                            m('a[href="/brands/superga"]', {
                                oncreate: m.route.link
                            }, [
                                m('img[src="images/superga-logo.png"]')
                            ])
                        ])
                    ])
                ])
            ];
        },
    };
};
