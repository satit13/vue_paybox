import moment from 'moment';


export default {
  name: 'app',
  data() {
    return {
      tm: '08:00'
    }
  },
  methods: {
    getHumanDate: function(date) {
      return moment(new Date(), 'YYYY-MM-DD').format('hh:mm:ss');
    }
  },
  mounted() {
    setInterval(function() {
       this.tm = this.getHumanDate()
    }.bind(this), 1000);
    
  }
}
