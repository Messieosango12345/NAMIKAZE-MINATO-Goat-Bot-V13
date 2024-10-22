€cmd install ok.js module.exports = {
	config: {
			name: "ok",
			version: "1.0",
			author: "messie OSANGO",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "ok") return message.reply("MES SERVICES VOUS SONT-ILS UTILES ?");
}
};
