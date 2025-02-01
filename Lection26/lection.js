const students = [
    {id: 1, name: "Jack", info : "Info about Jack"},
    {id: 2, name: "Rachel", info : "Info about Rachel"},
    {id: 3, name: "Mary", info : "Info about Mary"},
    {id: 4, name: "Bill", info : "Info about Bill"},
    {id: 5, name: "Ivan", info : "Info about Ivan"},
]

document.addEventListener('DOMContentLoaded', () =>{
    const parentDiv = document.querySelector('.main');

    parentDiv.addEventListener('click', (event) =>{

        if (event.target.tagName !== 'BUTTON'){
            return;
        }

        const id = event.target.parentNode.getAttribute('data-id');
        const myStudent = students.find(student => student.id==id);
        console.log(myStudent.info);
    });

    for (let student of  students){
        const element = document.createElement('div');
        element.setAttribute('data-id', student.id);
        element.innerHTML = `${student.name} <button type="button">Click for more info`;

        // Not Ok for big projects
        // element.querySelector('button').addEventListener('click', () =>{
        //     console.log(student.info);
        // })



        parentDiv.appendChild(element);


    }
})
