const data = {
   agents: [
      {
         name: 'Emil Holmström',
         role: 'Founder',
         email: 'emil@sunday-seven.com',
         phone: '+46 (0)735 608 242'
      },
      {
         name: 'Gustav Kjellander',
         role: 'Founder',
         email: 'gustav@sunday-seven.com',
         phone: '+46 (0) 709 851 826'
      },
      {
         name: 'Sebastian Holmström',
         role: 'Head of Sales',
         email: 'sebastian@sunday-seven.com',
         phone: '+46 (0) 731 826 057'
      },
      {
         name: 'Johan Lennartson',
         role: 'Sales Agent',
         email: 'johan@sunday-seven.com',
         phone: '+46 (0) 721 771 977'
      }
   ]
}

module.exports = (/*vnode*/) => {

   return {
      view(/*vnode*/) {
         return [
            m('.agents', [
               m('.container-fluid', [
                  m('.row.justify-content-center.align-content-center', [
                     m('.col-10.pb-5', [
                        m('h2', "General Enquiries"),
                        m('.row', [
                           data.agents.map((agent)=> {
                              return [
                                 m('.col-3.agent', [
                                    m('h1', agent.name),
                                    m('h5', agent.role),
                                    m('span', agent.phone),
                                    m('a[href="mailto:'+agent.email+'"]', agent.email)
                                 ])
                              ]
                           })
                        ])
                     ]),
                     m('.col-6.px-6', [
                        m('img.img-logo.pt-5[src="images/logo-black.png"]', {
                           style: {
                              opacity: .1
                           }
                        })
                     ])
                  ]),
               ])
            ])
         ];
      },
   };
};
