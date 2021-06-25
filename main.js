var sun1 = [
  "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometres (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth; it accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon and iron."
];
var earth1 = [
  "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics."
];
var fact1 = [
  "1. The Sun accounts for 99.86% of the mass in the solar system."
];
var fact2 = [
  "2. The energy created by the Sun's core is nuclear fusion."
];
var fact3 = [
  "3. Over one million Earth's could fit inside the Sun."
];
var fact4 = [
  "4. Earth is the only planet not named after a god."
];
var earthpicture = [
  "https://www.nasa.gov/sites/default/files/1-bluemarble_west.jpg"
];
var sunpicture = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
];
var sunearthpicture = [ "https://cdn.editage.com/insights/editagecom/production/styles/detail_page_image/public/Interaction%20between%20magnetic%20fields%20of%20Earth%20and%20sun%20observed%20%28Resized%29.jpg?itok=ukbQ-Ecm"
];

function ASun() { 
document.getElementById("img1").src = sunpicture;
document.getElementById("2").innerHTML = sun1;
document.getElementById("3").innerHTML = null;
document.getElementById("4").innerHTML = null;
document.getElementById("5").innerHTML = null;
} 
function AEarth() { 
document.getElementById("img1").src = earthpicture;
document.getElementById("2").innerHTML = earth1;
document.getElementById("3").innerHTML = null;
document.getElementById("4").innerHTML = null;
document.getElementById("5").innerHTML = null;
} 
function AFacts() { 
document.getElementById("img1").src = sunearthpicture;
document.getElementById("2").innerHTML = fact1;
document.getElementById("3").innerHTML = fact2;
document.getElementById("4").innerHTML = fact3;
document.getElementById("5").innerHTML = fact4;
} 
