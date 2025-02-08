function copyDiscord() {
    navigator.clipboard.writeText('Artemis#5435');
    copy = document.getElementById("copy-status")
    copy.classList.remove("fa-copy")
    copy.classList.add("fa-check")

    setTimeout(() => {
        document.getElementById("copy-status").classList.remove("fa-check");
        document.getElementById("copy-status").classList.add("fa-copy");
    }, 1000);
}