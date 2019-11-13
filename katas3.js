const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]


function write2Dom(value, location) {
    var newElement = document.createElement("div");

    var newText = document.createTextNode(value);
    newElement.appendChild(newText);

    var destination = document.getElementById(location);
    destination.appendChild(newElement);
}



function katas1() {
    const arr = []
    for (i = 1; i <= 25; i++) {

        arr.push(i)
    }
    return arr
}
write2Dom(katas1(), "d1")

function katas2() {
    const arr = []
    for (i = 25; i >= 1; i--) {

        arr.push(i)
    }
    return arr
}
write2Dom(katas2(), "d2")

function katas3() {
    const arr = []
    for (i = -1; i >= -25; i--) {
        arr.push(i)
    }
    return arr
}
write2Dom(katas3(), "d3")

function katas4() {
    const arr = []
    for (i = -25; i <= -1; i++) {
        arr.push(i)
    }
    return arr
}
write2Dom(katas4(), "d4")

function katas5() {
    const arr = []
    for (i = 25; i >= -25; i = i - 2) {
        arr.push(i)
    }
    return arr
}
write2Dom(katas5(), "d5")

function katas6() {
    const arr = []
    for (i = 3; i <= 99; i += 3) {
        arr.push(i)
    }
    return arr
}
write2Dom(katas6(), "d6")

function katas7() {
    const arr = []
    for (i = 7; i <= 98; i += 7) {
        arr.push(i)
    }
    return arr
}
write2Dom(katas7(), "d7")

function katas8() {
    const arr = []
    for (i = 100; i > 1; i--) {
        if (i % 3 == 0 || i % 7 == 0) {
            arr.push(i)
        }
    }
    return arr
}
write2Dom(katas8(), "d8")

function katas9() {
    const arr = []
    for (i = 5; i <= 100; i += 5) {
        if (i % 2 != 0) {
            arr.push(i)
        }
    }
    return arr
}
write2Dom(katas9(), "d9")

//function katas10()
write2Dom(sampleArray, "d10")

function katas11() {
    let ans = sampleArray.filter(sampleArray => sampleArray % 2 == 0)
    return ans
}
write2Dom(katas11(), "d11")

function katas12() {
    let ans = sampleArray.filter(sampleArray => sampleArray % 2 >= 1)
    return ans
}
write2Dom(katas12(), "d12")

function katas13() {
    let ans = sampleArray.filter(sampleArray => sampleArray % 8 == 0)
    return ans
}
write2Dom(katas13(), "d13")

function katas14(sampleArray) {
    return sampleArray.map(function (i) {
        return Math.pow(i, 2)
    }
    )
}
write2Dom(katas14(sampleArray), "d14")

function katas15(n) {

    return (n * (n + 1) / 2)
}
write2Dom(katas15(20), "d15")

 function katas16(sampleArray){
    return sampleArray.reduce(function(a,b){
      return a + b
    }, 0);
  }

write2Dom(katas16(sampleArray), "d16")

function katas17(sampleArray){
    return Math.min(...sampleArray)
}
write2Dom(katas17(sampleArray), "d17")

function katas18(sampleArray){
    return Math.max(...sampleArray)
}
write2Dom(katas18(sampleArray), "d18")