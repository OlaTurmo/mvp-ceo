const functions = require("firebase-functions");
const admin = require("firebase-admin");
const openai = require("openai");

admin.initializeApp();
const db = admin.firestore();

exports.aiAssistant = functions.https.onRequest(async (req, res) => {
    const userQuery = req.body.query;
    const response = await openai.ChatCompletion.create({
        model: "gpt-4",
        messages: [{ role: "user", content: userQuery }],
    });
    res.json({ response: response.choices[0].message.content });
});
