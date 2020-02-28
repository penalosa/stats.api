const fetch = require("node-fetch");
const fs = require("fs").promises;
const request = async () => {
  const stats = await fetch(
    "https://radio.freshair.org.uk/status-json.xsl"
  ).then(r => r.json());
  fs.writeFile(`./stats/${Date.now()}.json`, JSON.stringify(stats));
  setTimeout(request, 2000);
};
request();
