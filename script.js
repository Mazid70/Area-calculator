function triangleArea(){
    const base=document.getElementById('triangle-base');
    const height= document.getElementById('triangle-height');
    area=0.5*base.value*height.value;
    document.getElementById('valueis').innerText='Area of Triangle=';
    document.getElementById('area-result').innerText=area;
    base.value='';
    height.value='';
}
function rectangleArea(){
    const height=document.getElementById('rectangle-height');
    const width= document.getElementById('rectangle-width');
    area=height.value*width.value;
    document.getElementById('valueis').innerText='Area of Rectangle=';
    document.getElementById('area-result').innerText=area;
    width.value='';
    height.value='';
}
function parallelogramArea(){
    const base=document.getElementById('parallelogram-height');
    const height= document.getElementById('parallelogram-width');
    area=base.value*height.value;
    document.getElementById('valueis').innerText='Area of Parallelogram=';
    document.getElementById('area-result').innerText=area;
    base.value='';
    height.value='';
}
function rhombusArea() {
    const diagonal1=document.getElementById('rhombus-diagonal1');
    const diagonal2= document.getElementById('rhombus-diagonal2');
    area=diagonal1.value*diagonal2.value;
    document.getElementById('valueis').innerText='Area of Rhombus=';
    document.getElementById('area-result').innerText=area;
    diagonal1.value='';
    diagonal2.value='';
}
function pentagonArea() {
    const perimeter= document.getElementById('pentagon-perimeter');
    const base=document.getElementById('pentagon-base');
    area=0.5*perimeter.value*base.value;
    document.getElementById('valueis').innerText='Area of Pentagon=';
    document.getElementById('area-result').innerText=area;
    perimeter.value='';
    base.value='';
}
function ellipseArea() {
    const a= document.getElementById('ellipse-a');
    const b=document.getElementById('ellipse-b');
    area=3.1416*a.value*b.value;
    document.getElementById('valueis').innerText='Area of Ellipse=';
    document.getElementById('area-result').innerText=area.toFixed(2);
    a.value='';
    b.value='';
}