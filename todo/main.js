function listadd() {
  // 리스트에 투두리스트 추가
  const li = document.createElement('li')
  li.textContent = todotext.value
  //로컬스토리지 저장  localStorage.setItem(number, todotext.value)
  ul.appendChild(li)
  li.style.fontSize = '25px'
  li.style.paddingTop = '20px'
  li.style.paddingLeft = '30px'
  li.style.listStyle = 'none'

  // 삭제하기
  const deletebt = document.createElement('button')
  deletebt.setAttribute('class', 'far fa-trash-alt')
  deletebt.style.paddingLeft = '15px'
  deletebt.style.backgroundColor = '#d1d1d5'
  deletebt.style.border = 'none'
  li.appendChild(deletebt)
  deletebt.addEventListener('click', () => {
    li.parentNode.removeChild(li)
  })

  todotext.value = ''
}

function enterkey() {
  if (window.event.keyCode == 13) {
    if (todotext.value !== '') {
      listadd()
    }
  }
}
// let number = 1
const datetext = document.getElementById('datetext')
const dateplus = document.getElementById('dateplus')
const todotext = document.getElementById('todotext')
const todoplus = document.getElementById('todoplus')
const ul = document.querySelector('.list')

dateplus.addEventListener('click', () => {
  if (datetext.value !== '' && datetext.value !== '저장완료!') {
    localStorage.setItem('date', datetext.value)
    datetext.value = '저장완료!'
  }
})

todoplus.addEventListener('click', () => {
  if (todotext.value !== '') {
    listadd()
  }
})
