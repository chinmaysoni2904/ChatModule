import consumer from "./consumer"

consumer.subscriptions.create("WallChannel", {
  connected() {
    console.log("Connected to WallChannel");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("DisConnected to WallChannel");
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    wall = document.getElementById('wall');
    wall.innerHTML += ("<h2>" + data.title + "</h2>");
    wall.innerHTML += ("<p>" + data.content + "</p>");
      // Called when there's incoming data on the websocket for this channel
    }
});
