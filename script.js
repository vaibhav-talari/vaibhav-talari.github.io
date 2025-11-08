fetch('content.json')
    .then(response => response.json())
    .then(data => {
        //document.getElementById('aboutContent').textContent = data.about;
        startTypewriter(data.about,"aboutContent");
        document.getElementById('java-database').innerHTML = data.projectDatabase;
        document.getElementById('container-technology').innerHTML = data.containerTechnology;
        document.getElementById('java-fundamentals').innerHTML = data.javaFundamentals;
    });


var i = 0;
function startTypewriter(txtContent, eleName) {
    var speed = 50; // typing speed
    var demo = document.getElementById(eleName);
    demo.innerHTML = "";

    function typeWriter() {
        if (i < txtContent.length) {
            demo.innerHTML += txtContent.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

/*let header = document.querySelector(".headerGradiant");

header.addEventListener("mousemove", function (e) {
    const rect = header.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const r = Math.min(255, Math.abs(x % 255));
    const g = Math.min(255, Math.abs(y % 255));
    const b = Math.min(255, Math.abs((x - y) % 255));

    // create a circular gradient centered on the cursor
    header.style.background = `
        radial-gradient(circle 100px at ${x}px ${y}px, 
        rgb(${r}, ${g}, ${b}), 
        #000)
      `;
});*/