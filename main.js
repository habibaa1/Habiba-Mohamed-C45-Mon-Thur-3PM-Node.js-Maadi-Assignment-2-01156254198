
//1-Write a function that logs the current file path and directory.
function showPath() {
    console.log({
        File: __filename,
        Dir: __dirname
    });
}
showPath();


//2-Write a function that takes a file path and returns its file name.
const path = require("path");

function getFileName(p) {
    console.log(path.basename(p));
}
getFileName("/Habiba Mohamed C45 Mon&Thur 3PM(Node.js)Maadi Assignment 2 01156254198/file.txt");

//3-Write a function that builds a path from an object
function buildPath(obj) {
    console.log(obj.dir + "/" + obj.name + obj.ext);
}
buildPath({ dir: "Habiba Mohamed C45 Mon&Thur 3PM(Node.js)Maadi Assignment 2 01156254198", name: "main", ext: ".js" });

//4-Write a function that returns the file extension from a given file path.
function getExt(p) {
    console.log(path.extname(p));
}

getExt("/Habiba Mohamed C45 Mon&Thur 3PM(Node.js)Maadi Assignment 2 01156254198/main.js");

//5-Write a function that parses a given path and returns its name and ext.
function getNameExt(p) {
    const info = path.parse(p);

    console.log({
        Name: info.name,
        Ext: info.ext
    });
}
getNameExt("/Habiba Mohamed C45 Mon&Thur 3PM(Node.js)Maadi Assignment 2 01156254198/main.js");

//6-Write a function that checks whether a given path is absolute.
function isAbsolutePath(filePath) {
    console.log( path.isAbsolute(filePath));
}
isAbsolutePath("/Habiba Mohamed C45 Mon&Thur 3PM(Node.js)Maadi Assignment 2 01156254198/main.js");

//7-Write a function that joins multiple segments
function joinSegments() {
    console.log(path.join("src", "components", "App.js"));
}

joinSegments();

//8-Write a function that resolves a relative path to an absolute one.
function resolvePath(p) {
    console.log(path.resolve(p));
}

resolvePath("./main.js");

//9-Write a function that joins two paths.
function joinTwo(p1, p2) {
    console.log(path.join(p1, p2));
}

joinTwo("/main.js", "file.txt");

//10-Write a function that deletes a file asynchronously.
/*const fs = require("fs").promises;

async function deleteFile(p) {
    try {
        await fs.unlink(p);
        console.log(path.basename(p) + " is deleted.");
    } catch (err) {
        console.log("Error:", err.message);
    }
}

deleteFile("/Habiba Mohamed C45 Mon&Thur 3PM(Node.js)Maadi Assignment 2 01156254198/file.txt");*/


//11-Write a function that creates a folder synchronously.
const fs = require("fs");

function createFolder(name) {
    try {
        fs.mkdirSync(name, { recursive: true });
        console.log("Folder created successfully!");
    } catch (err) {
        console.log("Error:", err.message);
    }
}

createFolder("myFolder");

//12-Create an event emitter that listens for a "start" event and logs a welcome message.
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("start", function () {
    console.log("Welcome!");
});

emitter.emit("start");

//13- Emit a custom "login" event with a username parameter.
const myEmitter = new EventEmitter();

myEmitter.on("login", function (user) {
    console.log("User logged in:", user);
});

myEmitter.emit("login", "Habiba");

//14-Read a file synchronously and log its contents.
function readFileSyncFunc(file) {
    const data = fs.readFileSync(file, "utf8");
    console.log("the file content =>", data);
}

readFileSyncFunc("./notes.txt");

//15-Write asynchronously to a file.
function writeAsync(p, content) {
    fs.writeFile(p, content, function (err) {
        if (err) console.log("Error:", err);
        else console.log("File saved");
    });
}

writeAsync("./async.txt", "Async save");

//16-Check if a directory exists.
function existsPath(exi) {
    console.log(fs.existsSync(exi));
}

existsPath("./notes.txt");

//17-Write a function that returns the OS platform and CPU architecture.
const os = require("os");

function osInfo() {
    console.log({
        Platform: os.platform(),
        Arch: os.arch()
    });
}

osInfo();




