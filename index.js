const RPC = require("discord-rpc"); // npm i discord-rpc
const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Large text under image", // Large text which is under the client name
        state: "Small text under image", // Small text under the large text
        startTimestamp: new Date(), // starts new time stamp | you can add hourse to start from!
        largeImageKey: "image key", // Images keys can get from https://discord.com/developers/applications > Your client > Rich Presence > Art Assets > upload ur image and the name is the key!
        largeImageText: "Text 3", // text shows when you aim on the large image
        smallImageKey: "SMALL-KEY", // Images keys can get from https://discord.com/developers/applications > Your client > Rich Presence > Art Assets > upload ur image and the name is the key!
        smallImageText: "Text 4", // text shows when you aim on the small image
       buttons: [{label : "button1", url : "URL here"},{label : "button2", url : "URL 2 HERE"}] // you con delete the buttons 
    });

    console.log("RFS-RPC is ready now!");
});

rpc.login({
    clientId: "Your client id here" // create client from https://discord.com/developers/applications then go to General Information and copy the APPLICATION ID! NOTE: Don't add bot to the application! 
});