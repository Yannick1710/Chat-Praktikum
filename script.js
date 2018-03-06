
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAExYBPx5Y3vo-3KMXTLyeO6msZeBx65Fc",
    authDomain: "web-chat-c758a.firebaseapp.com",
    databaseURL: "https://web-chat-c758a.firebaseio.com",
    projectId: "web-chat-c758a",
    storageBucket: "web-chat-c758a.appspot.com",
    messagingSenderId: "382510842737"
  };
  var firebaseApp = firebase.initializeApp(config);
  var db = firebaseApp.database();


var vm = new Vue({
  el: '#app',
  firebase: {
    // simple syntax, bind as an array by default
    messages: {
        source: db.ref('messages'),
        readyCallback: function () {
          console.log("geladen");
        }
    }
  },

  methods: {
    addMessage () {
      this.$firebaseRefs.messages.push({
        name: this.name,
        text: this.message,

                                      })

              },
    deleteMessage: function (message) {
        console.log(message);
        this.$firebaseRefs.messages.child(message['.key']).remove();
      },
  }

});
