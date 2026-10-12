if (document.getElementById("safe")) {
    document.getElementById("safe").onclick = function() {
        alert("Correct! This is the right choice to avoid Phishing acts");
    };
}

if (document.getElementById("unsafe")) {
    document.getElementById("unsafe").onclick = function() {
        alert("Not quite! This will make it easier for Phishing to take place");
    };
}

let completedTopics = [];

function completeTopic(topic) {
    if (!completedTopics.includes(topic)) {
        completedTopics.push(topic);
    }

    document.getElementById("progress-bar").value = completedTopics.length;

    document.getElementById("progress-text").textContent =
        "Topics completed: " + completedTopics.length + " out of 6";

    if (completedTopics.length === 6) {
        alert("Congratulations! You completed all CyberSafe (Latins websites') topics!");
    }
}