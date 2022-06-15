const os = require("os");
setInterval(() => {
	console.clear();
	console.log(`Total: ${(os.totalmem() / (1024 ** 2)).toFixed(2)}MB`);
	console.log(`Free: ${(os.freemem() / (1024 ** 2)).toFixed(2)}MB`);
}, 1000);
