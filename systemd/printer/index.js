function update() {
    console.log(`Time is now ${new Date().toUTCString()}`);
}

setInterval(() => update(), 10000);
