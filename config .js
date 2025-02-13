const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
};
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9743acae8d366e4efe31c-48d3a1fdcd5f284970.jpg"
ALIVE_MSG: brocess.env.ALIVE_MSG ||"රාජ කුමාරයෙක් නෙමේ මම දකුනෙ කොල්ලෙක්",
