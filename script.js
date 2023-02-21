function solve() {
    
    const button = document.querySelector('button');

    const lists = document.querySelectorAll('li');

    const studentName = document.querySelector('input');

    button.addEventListener('click', ()=>{
        
        let str = studentName.value.toLocaleUpperCase();

        let num = str.charCodeAt(0);

        num -= 65;

        if(lists[num].textContent ==''){
            lists[num].textContent = studentName.value;
        }else{
            lists[num].textContent += ` , ${studentName.value}`
        }


        studentName.value = '';
    })

}