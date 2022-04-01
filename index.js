console.log(API_URL);

function renderDynamicContent() {
   let r =  document.getElementById('dynamic-content').innerHTML = "Dynamic content"
    var box1 = document.getElementById("Text1")
    var box2 = document.getElementById("Text2")
    var box3 = document.getElementById("txtresult")
   
    let count = box1+box2
    r.append(count)

}

