function updateAge() {
    var birthday = new Date(2002, 10 - 1, 4);
    var now = new Date();

    const msPerYear = 24 * 60 * 60 * 1000 * 365;
    let daysSince = (now.getTime() - birthday.getTime()) / msPerYear;
    let secondsSince = (now.getTime() - birthday.getTime()) / 1000;

    let years = Math.floor(daysSince);
    let seconds = Math.floor(secondsSince);
    let isBirthday = birthday.getMonth() == now.getMonth() && birthday.getDate() == now.getDate();
    outputString = `${seconds} seconds (${years} year${years > 1 ? "s" : ""}) old${isBirthday ? " 🎂" : ""}`;

    document.getElementById("age").textContent = outputString;
}
updateAge()
setInterval(updateAge, 1000);
