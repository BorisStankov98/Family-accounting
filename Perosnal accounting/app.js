let cont1 = document.getElementById("container1");
let cont2 = document.getElementById("container2");
let cost1 = document.getElementById("cost1");
let cost2 = document.getElementById("cost2");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let ul1 = document.getElementById("listE");
let ul2 = document.getElementById("listB");
let totalTextE = document.getElementById("totalE");
let totalTextB = document.getElementById("totalB");
let totalB = 0;
let totalE = 0;
let liId1 = 0;


cont1.addEventListener("submit", (sub) =>{
    sub.preventDefault();
        let newText = (item1.value)
        let newCost = (cost1.value)
        let newli = document.createElement("li");
        newli.append(`${newText} and it costs ${newCost}`)
        ul1.append(newli)
        newli.setAttribute("id", cost1.value);
        newli.addEventListener('click', () =>{
            totalE -= newli.id
            newli.remove();
            totalTextE.innerText = `${totalE}$`;
        })
        totalE += parseFloat(cost1.value)
        item1.value = ""
        cost1.value = ""
        totalTextE.innerText = `${totalE}$`;
})

cont2.addEventListener("submit", (sub2) =>{
    sub2.preventDefault();
    let newText2 = (item2.value)
    let newCost2 = (cost2.value)
    let newli2 = document.createElement("li");
    newli2.append(`${newText2} and it costs ${newCost2}`)
    ul2.append(newli2)
    newli2.setAttribute("id", cost2.value);
    newli2.addEventListener('click', () =>{
        totalB-= newli2.id
        newli2.remove();
        totalTextB.innerText = `${totalB}$`;
    })
    totalB += parseFloat(cost2.value)
    item2.value = ""
    cost2.value = ""
    totalTextB.innerText = `${totalB}$`;

})
