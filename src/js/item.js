import api from '../services/services.js'

export default {
  name: 'Item',
  data() {
    return {
      title: 'ITEM LIST',
      item_list: []
      }
  },
  methods: {
    getApi(langID) {
      //this.item_list=[]
      api.getApi('http://10.0.3.110:8888/menu/1/', (data) => {
       
        for (var i = 0; i < data.body.length; i++) {
          if (data.body[i].lang_id == langID) {

            console.log("for loop langueue id = 1 ")
            var m = data.body[i]
            console.log(m)
            for (var k=0; k<m.items.length;k++){
            	this.item_list.push(
	            	{
	            		id: k,
	            		name: m.items[k].name,
	            		img: 'http://10.0.3.110:8888/public/img/'+m.items[k].image
	            	}
            	)
            }
          }
        }
      }, (response) => {
        console.log(response)
      })
    }
  },
  mounted() {
    this.getApi(1)
  }
}
