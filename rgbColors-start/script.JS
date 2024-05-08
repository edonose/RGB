document.getElementById("bt3").addEventListener("click", preview);

function preview() {
  let r = +document.getElementById("rd-inp").value;
  let g = +document.getElementById("gr-inp").value;
  let b = +document.getElementById("bl-inp").value;
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }
  if (r < 0) {
    r = 0;
  }
  if (g < 0) {
    g = 0;
  }
  if (b < 0) {
    b = 0;
  }

  document.getElementById("tr").style.backgroundColor = `rgb(${r},${g},${b})`;
  document.getElementById("span").innerHTML = `rgb (${r}, ${g}, ${b})`;
}

document.getElementById("bt1").addEventListener("click", black);

function black() {
  document.getElementById("tr").style.backgroundColor = `rgb(0,0,0)`;
  document.getElementById("span").innerHTML = `rgb (0, 0, 0)`;
}

document.getElementById("bt2").addEventListener("click", white);

function white() {
  document.getElementById("tr").style.backgroundColor = `rgb(255,255,255)`;
  document.getElementById("span").innerHTML = `rgb (255, 255, 255)`;
}

document.getElementById("W").addEventListener("change", changeSize);
document.getElementById("H").addEventListener("change", changeSize);

function changeSize() {
  let H = +document.getElementById("H").value;
  let W = +document.getElementById("W").value;
  if (H > 200) {
    H = 200;
    document.getElementById("H").value = "200";
  }
  if (H < 50) {
    H = 50;
    document.getElementById("H").value = "50";
  }
  if (W > 400) {
    W = 400;
    document.getElementById("W").value = "400";
  }
  if (W < 50) {
    W = 50;
    document.getElementById("W").value = "50";
  }
  document.getElementById("tr").style.width = `${W}px`;
  document.getElementById("tr").style.height = `${H}px`;
}
