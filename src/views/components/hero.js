import Navbar from './../layout/navbar'
import Rellax from 'rellax'

module.exports = {
    oncreate(/*vnode*/) {
        new Rellax('.rellax')
    },
    view(vnode){
        return [
            m('.hero', [
                m(Navbar, { color: 'white' }),
                m('.overlay.rellax', [
                    m('.hero__caption', [
                        m('img.hero__logo[src="images/logo-white.png"]'),
                    ], vnode.attrs.caption)
                ]),
                m('.hero__video', [
                    m('video[poster="//"][playsinline][autoplay][muted][loop]', [
                        m('source[src="'+vnode.attrs.video.webm+'"][type="video/webm"]'),
                        m('source[src="'+vnode.attrs.video.mp4+'"][type="video/mp4"]'),
                    ])
                ])
            ])
        ]
    }
}
