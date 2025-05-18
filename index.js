const questionArr = ["first_q","second_q", "third_q" ,"fourth_q"];

const answersArr = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
]

questionArr.forEach((id,index) => {
    const container = document.getElementById(id);
    const button = container.querySelector(".my-btn");
    const icon = button.querySelector("img");

    button.addEventListener("click", () => {
        const existingParagraph = container.querySelector('p');

        if(existingParagraph){
            container.removeChild(existingParagraph);
            icon.src = "./assets/images/icon-plus.svg";
        }else{
            const paragraph = document.createElement('p');
            
            paragraph.textContent = answersArr[index];
            
            container.appendChild(paragraph);
            icon.src = "./assets/images/icon-minus.svg";
        }
    });
});