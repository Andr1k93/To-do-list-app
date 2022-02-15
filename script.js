const activity = document.querySelector('input')
const save = document.querySelector('#save')
const container = document.querySelector('#activity-box')
const check = document.querySelectorAll('.check')
function newActivity(){
    if(activity.value.length >0){
    let row = document.createElement('div')
    row.classList.add('row','my-2', 'py-3', 'bg-light', 'rounded')
    row.innerHTML = `
    <div class="offset-2 col-5">
        <p>${activity.value}</p>
    </div>
    <div class="col-3 d-flex justify-content-end">
        <button class="btn btn-success check mx-1"><i class="far fa-check-square"></i></button>
        <button class="btn btn-warning mx-1"><i class="fas fa-pencil-alt"></i></button>                    
        <button class="btn btn-danger mx-1"><i class="far fa-trash-alt"></i></button>
    </div>    
    `
    container.append(row)
    activity.value = ""
} else{
    alert('Please insert new activity')
}
}

save.addEventListener('click', newActivity)

check.addEventListener('click',() =>{
    // Continuare il check in modo che solo quello selezionato si colori
})