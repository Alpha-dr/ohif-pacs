const express = require("express");
const axios = require("axios");

const app = express();
app.get('/ohif', (req, res) => {
  res.send(`
    <iframe 
      src="https://viewer.ohif.org/" 
      width="100%" 
      height="100%" 
      style="position:fixed; top:0; left:0; border:none;">
    </iframe>
  `);
});

const ORTHANC = "https://orthanc-xnvd.onrender.com";

app.get("/latest", async (req, res) => {
    try {
        const response = await axios.get(`${ORTHANC}/studies`, {
            auth: {
                username: "orthanc",
                password: "orthanc"
            }
        });

        const studies = response.data;

        if (!studies || studies.length === 0) {
            return res.send("No X-rays found");
        }

        const latest = studies[studies.length - 1];

        const link = `${ORTHANC}/app/explorer.html#study?uuid=${latest}`;

        res.send(`
            <h2>Latest X-ray</h2>
            <a href="${link}" target="_blank">${link}</a>
        `);

    } catch (error) {
        console.log("FULL ERROR:", error.message);
        res.send("Error fetching data from Orthanc");
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
