let salary = document.getElementById("salary");
let result = document.getElementById("result");
let kids = document.getElementById("kids");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let tempKids
let tempsalary
let mrg =0

function marrige() {
    if (yes.checked) {
        mrg = 500
    }

}

function sort1() {
    if (2000 >= Number(salary.value) && Number(salary.value) >= 0) {
        if (30 >= Number(kids.value) && Number(kids.value) >= 0) {
            tempKids = Number(kids.value) * 100;
            result.innerText = Number(tempKids) + Number(salary.value) + Number(mrg);
        }
        else {
            result.innerText = "number of kids gotta be between 0-30"
        }
    }
    else if (Number(salary.value > 2000)) {
        if (30 >= Number(kids.value) && Number(kids.value) >= 0) {
            tempKids = Number(kids.value) * 100;
            tempsalary = Number(salary.value) - 2000;
            tempsalary = (20 / 100) * Number(tempsalary);
            result.innerText = Number(salary.value) - Number(tempsalary) + Number(tempKids) + Number(mrg);
        }
    }
    else {
        result.innerText = "salary gotta be positive"
    }
}