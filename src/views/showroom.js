import Navbar from './layout/navbar'
import Footer from './layout/footer'

module.exports = function(/*vnode*/) {

    return {
        oninit(/*vnode*/) {
            console.log('initialized');
        },
        view(/*vnode*/) {
            return [
                m('row.no-gutter', [
                    m('col-12', [
                        m('.showroom', [
                            m('.showroom__cover', {
                                style: {
                                    backgroundImage: 'url("images/showroom.jpg")'
                                }
                            },[
                                m('.showroom__overlay', [
                                    m(Navbar, { color: 'white' }),
                                ])
                            ])
                        ])
                    ])
                ]),
                m('row.no-gutter', [
                    m('col-4', [
                        m('h1', "Hantervergatan")
                    ])
                ]),
                m(Footer)
            ]
        }
    };
};
