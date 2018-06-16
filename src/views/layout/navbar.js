//import modal from 'vanilla-modal'

module.exports = {
    view(vnode){
        return [
            m('.navbar.navbar__'+vnode.attrs.color+'', [
                m('.row.justify-content-between.align-items-center', [
                    m('.col-auto.align-self-center', [
                        m('img.navbar__logo[src="images/avatar-'+vnode.attrs.color+'.png"]', {
                            onclick(){
                                window.location = '#!/home'
                            }
                        }),
                    ]),
                    m('.col-auto.align-self-right', [
                        m('nav', [
                            m('ul', [
                                m('li', m('a[href="/brands"]', {
                                    oncreate: m.route.link
                                }, 'Brands')),
                                m('li', m('a[href="/agents"]',  {
                                    oncreate: m.route.link
                                }, 'Agents')),
                                m('li', m('a[href="https://wholesale.brixtoltextiles.com/"][target="_blank"]','B2B')),
                            ])
                        ])
                    ])
                ])
            ])
        ]
    }
}
