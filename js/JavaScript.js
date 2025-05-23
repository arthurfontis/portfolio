function modoEscuro() {
    const button = document.getElementById('darkmode')
    const body = document.body

    button.addEventListener('click', () => {
        body.classList.toggle('dark-mode')
    })

}
function animacaoSections(){
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }
        })
    })
    sections.forEach(section => observer.observe(section))
}

modoEscuro()
animacaoSections()