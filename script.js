function downloadData() {
    const observerName = document.getElementById("observerName").value;
    const dateTime = document.getElementById("dateTime").value;
    const location = document.querySelector("input[name='location']:checked")?.value || "Not specified";
    const engagement = document.querySelector("input[name='engagement']:checked")?.value || "Not specified";
    const gender = document.querySelector("input[name='gender']:checked")?.value || "Not specified";
    const race = document.querySelector("select[name='race']")?.value || "Not specified";
    const notes = document.getElementById("notes").value;

    const data = `Observer Name: ${observerName}\nDate & Time: ${dateTime}\nLocation: ${location}\nEngagement Level: ${engagement}\nGender: ${gender}\nRace/Ethnicity: ${race}\nObserver Notes: ${notes}`;

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "social_engineering_data.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
