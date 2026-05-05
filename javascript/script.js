window.addEventListener("DOMContentLoaded", function() {

    function yesHandler() {
        const name = document.getElementById("userName").value.trim();
        if (!name) {
            document.getElementById("responseMessage").textContent = "Please enter your name first!";
            return;
        }
        document.getElementById("responseMessage").textContent = "Nice to meet another Lego fan, " + name + "!";
    }
    function noHandler() {
        const name = document.getElementById("userName").value.trim();
        if (!name) {
            document.getElementById("responseMessage").textContent = "Please enter your name first!";
            return;
        }
        document.getElementById("responseMessage").textContent = "Give the bricks a chance, " + name + "!";
    }

    document.getElementById("yesButton").addEventListener("click", yesHandler);
    document.getElementById("noButton").addEventListener("click", noHandler);

});