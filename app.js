const loggerSpdateConfig = { serverId: 791, active: true };

function parsePAYMENT(payload) {
    let result = payload * 72;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module loggerSpdate loaded successfully.");