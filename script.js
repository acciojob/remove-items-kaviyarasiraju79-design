//your JS code here. If required.
function removecolor() {
    const select = document.getElementById("colorSelect");

    // Remove selected option
    select.remove(select.selectedIndex);
}