window.onload = function () {
    document.getElementById("length").style.background = `linear-gradient(to right, #FFCF7A 0%, #FFCF7A 50%, #646464 50%, #646464 100%)`;
}

document.getElementById("length").oninput = function () {
    let value = (this.value - this.min) / (this.max - this.min) * 100;
    this.style.background = `linear-gradient(to right, #FFCF7A 0%, #FFCF7A ${value}%, #646464 ${value}%, #646464 100%)`;
};