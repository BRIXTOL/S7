import Navbar from './layout/navbar'

import 'brixtol-textiles-cover.jpg'
import 'havaianas-cover.jpg'
import 'shoe-the-bear-cover.jpg'
import 'teva-cover.jpg'
import 'superga-cover.jpg'

const data = {
   "brixtol-textiles": [{
      name: "BRIXTOL TEXTILES",
      website: "//www.brixtoltextiles.com",
      instagram: "//www.instagram.com/brixtoltextiles",
      video: "1zsr2ip-M-Q",
      cover: "brixtol-textiles-cover.jpg",
      logoWhite: "brixtol-textiles-logo-white.png",
      logoBlack: "brixtol-textiles-logo.png",
      description: "Brixtol Textiles started in a small kitchen in Stockholm, Sweden 2011 by two friends, Gustav Kjellander and Emil Holmström. The idea of parting with tradition and breaking the convention fuelled the birth of the brand and it became the manifestation of an idea in the shape of quality clothing inspired by a combination of British workwear and the 1960's mod culture."
   }],
   "havaianas": [{
      name: "HAVAIANAS",
      website: "//www.brixtoltextiles.com",
      instagram: "//www.instagram.com/brixtoltextiles",
      video: "-Wg2MI9fY3Y",
      cover: "havaianas-cover.jpg",
      logoWhite: "havaianas-logo-white.png",
      logoBlack: "havaianas-logo.png",
      description: "The name Havaianas is Portuguese for Hawaiians. The first pair of Havaianas was born in 1962, based on the traditional Japanese sandal known as the Zori, whose soles are made of rice straw. The texture of Havaianas' rubber soles are like rice grains, one of the many details that make Havaianas unmistakable."
   }],
   "shoe-the-bear": [{
      name: "SHOE THE BEAR",
      website: "//shoethebear.com",
      instagram: "//www.instagram.com/shoethebear/",
      video: "-VWGY6OB13Q",
      cover: "shoe-the-bear-cover.jpg",
      logoWhite: "shoe-the-bear-logo-white.png",
      logoBlack: "shoe-the-bear-logo.png",
      description: "Shoe the bear began in 2007 with founders thomas frederiksen and jakob fuglsang fusing street art with canvas sneakers. Today, the brand is a frontrunner for scandinavian fashion footwear. It is sold and showcased by prestigious retailers from iceland to israel over north america to japan."
   }],
   "teva": [{
      name: "TEVA",
      website: "//www.teva-eu.com",
      instagram: "//www.instagram.com/teva/",
      video: "IiXZd19D_UE",
      cover: "teva-cover.jpg",
      logoWhite: "teva-logo-white.png",
      logoBlack: "teva-logo.png",
      description: "The Teva Original came from humble beginnings -- an old Velcro watch strap attached to a flip flop -- but it has grown into an icon that speaks to the masses. People around the world have accepted the invitation to adventure and adopted the \"strap in and go\", spontaneous, go-anywhere, do-anything mentality that the Original stands for. Everything that we do, and everything we make is in service of the adventurous spirit, because we know that unscripted moments are the ones that turn into the best memories."
   }],
   "superga": [{
      name: "SUPERGA",
      website: "//www.superga.com",
      instagram: "//www.instagram.com/superga/",
      video: "uzR5VHXEKZA",
      cover: "superga-cover.jpg",
      logoWhite: "superga-logo-white.png",
      logoBlack: "superga-logo-black.png",
      description: "In 1911 in Torino Italy, Walter Martiny started the production of rubber-soled footwear branded with the Superga logo. In 1925, his designs expanded to include footwear with vulcanized rubber soles and the Superga 2750 style was born! After the war, Superga restarted operations specializing solely in the production of high-quality footwear. In the 1970’s, Superga diversified to add sport shoes with technical attributes"
   }]
};


module.exports = function(/*vnode*/) {
   return {
      view(/*vnode*/) {
         let param = !m.route.param('brand') ? 'brixtol-textiles' : m.route.param('brand')
         return [
            m('.brand__carousel',[
               data[param].map((brand) => {
                  return m('.brand', [
                     m('.brand__cover', {
                        style: {
                           backgroundImage: 'url(images/'+brand.cover+')'
                        }
                     },[
                        m('.brand__overlay', [
                           m(Navbar, { color: 'white' }),
                           m('.brand__logo', [
                              m('img[src="images/'+brand.logoWhite+'"]')
                           ])
                        ])
                     ]),
                     m('.brand__navigation', [
                        m('.row.justify-content-center.align-content-center.no-gutter', [
                           m('.col-auto.align-self-center', [
                              m('img[src="images/brixtol-textiles-logo.png"]', {
                                 class: param == "brixtol-textiles" ? "active" : "",
                                 onclick(){
                                    m.route.set('/brands/brixtol-textiles')
                                 }
                              })
                           ]),
                           m('.col-auto.align-self-center', [
                              m('img[src="images/havaianas-logo.png"]', {
                                 class: param == "havaianas" ? "active" : "",
                                 onclick(){
                                    m.route.set('/brands/havaianas')
                                 }
                              })
                           ]),
                           m('.col-auto.align-self-center', [
                              m('img[src="images/teva-logo.png"]', {
                                 class: param == "teva" ? "active" : "",
                                 onclick(){
                                    m.route.set('/brands/teva')
                                 }
                              })
                           ]),
                           m('.col-auto.align-self-center', [
                              m('img[src="images/shoe-the-bear-logo.png"]', {
                                 class: param == "shoe-the-bear" ? "active" : "",
                                 onclick(){
                                    m.route.set('/brands/shoe-the-bear')
                                 }
                              })
                           ]),
                           m('.col-auto.align-self-center', [
                              m('img[src="images/superga-logo.png"]', {
                                 class: param == "superga" ? "active" : "",
                                 onclick(){
                                    m.route.set('/brands/superga')
                                 }
                              })
                           ])
                        ])
                     ]),
                     m('.brand__information', [
                        m('.row.justify-content-center.align-content-center', [
                           //m('.col-auto.align-self-center', "<"),
                           m('.col-11.col-md-5.align-self-right.description', [
                              m('h1', brand.name),
                              m('p', brand.description),
                              m('ul.social', [
                                 m('li', m('a[href="'+brand.website+'"][target="_blank"]', "Website")),
                                 m('li', m('a[href="'+brand.instagram+'"][target="_blank"]', "Instagram"))
                              ])
                           ]),
                           m('.col-12.col-md-6.align-self-center', [
                              m('.brand__video', [
                                 m.trust('<iframe id="ytplayer" type="text/html" width="100%" height="395" src="https://www.youtube.com/embed/'+brand.video+'?autoplay=0&loop=1&playsinline=1&rel=0&showinfo=0&color=white" frameborder="0" allowfullscreen>')
                              ])
                           ]),
                           //m('.col-auto.align-self-center', ">"),
                        ]),
                     ])
                  ])
               })
            ])
         ]
      }
   }
}
