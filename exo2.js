/* Second step
    Create function add(number) : 
        - The method can take 0, 1 or 2 numbers separated by comma, and returns their sum.
        - An empty string will return "0".
        - Example of inputs: "", "1", "1.1,2.2" need to be "3.3" /!\
*/

function add(str) {
    if (str != "") {
        let strAdd = str.toString().split(",");
        let add = 0;
        
        for(let i = 0; i < strAdd.length; i++) {
            //console.log("strAdd : " + parseFloat(strAdd[i]));
            add += parseFloat(strAdd[i]);
        }
        return add;
    }
    else {
        return "0";
    }
}

let numb = "1.1, 2.2";
let result = add(numb);
console.log("Your result : " + result);