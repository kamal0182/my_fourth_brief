let array = [
    {
        title : "how's the bigger number",
        answer1 : 12,
        answer2 : 13,
        answer3 : 14,
        right_answer :  14
    },
    {
        answer1 : 12 ,
        answer2 : 100,
        answer3 : 4,
        right_answer :  4,
        title : "how's the smaller number "
    },
    {
        answer1 : "Barcalona",
        answer2 : "Real Madrid",
        answer3 : "City",
        right_answer :  "14",
        title : "how wen's the ucl in 2023"
    }
];
let radiobtns = document.querySelectorAll("input[name='question']");
let result = document.getElementById("botton");
let findselected   = () =>{
    let selected = document.querySelector("input[name='option']:checked");
    console.log(selected);
}
radiobtns.forEach(ele => {
    ele.addEventListener("change",findselected); 
})