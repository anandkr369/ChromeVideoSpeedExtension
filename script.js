document.addEventListener('DOMContentLoaded', function () {

    const speedInc = document.getElementById('speedUpBtn');
    const speedDec = document.getElementById('speedDownBtn');
    const speedUI = document.getElementById('insert');

    let initial_speed = 1;

    function incrUi() {
        initial_speed += 1;
        speedUI.innerHTML = initial_speed;

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { code: `document.querySelector("video").playbackRate = ${initial_speed};` });
        });
    }

    function decrUi() {
        if (initial_speed < 2) {
            initial_speed = 1;
        }
        else {

            initial_speed -= 1;
            speedUI.innerHTML = initial_speed;

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.executeScript(tabs[0].id, { code: `document.querySelector("video").playbackRate = ${initial_speed};` });
            });
        }
    }

    speedInc.addEventListener('click', incrUi);
    speedDec.addEventListener('click', decrUi);
});
//done
