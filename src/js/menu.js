import api from '../services/services.js'

export default {
  name: 'menu',
  data () {
    return {
      title: 'MENU',
      menu_list: []
    }
  },
  methods: {
    getApi (lagID) {
      this.menu_list= []
      api.getApi('http://10.0.3.110:8888/menu', (data) => {
        //console.log(data.body)
        for(var i=0; i< data.body.length; i++){
          if(data.body[i].lang_id==lagID){
            var m = data.body[i]
            console.log("menu object "+m.lang_name)

            for(var k=0; k< m.menus.length; k++){
                console.log('http://10.0.3.173:8888/public/img/'+m.menus[k].image)
               this.menu_list.push(
                            {
                              id: k,
                              menu_code: m.menus[k].Id,
                              name: m.menus[k].name,
                              img: 'http://10.0.3.110:8888/public/img/'+m.menus[k].image
                            })
            }
          }
        }  

        }, (response) => {
        console.log(response)
      })
    }
  },
  mounted (){
    this.getApi(1)
  }
}



