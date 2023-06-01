const lang_text = {
    'Гибкая мобильная платформа для быстрой реализации инвестиционных сервисов.' : 'A flexible mobile platform for the rapid implementation of investment services.',
    'Заказать демо' : 'Order a demo',
    'Удобный пользовательский интерфейс' : 'User-friendly interface',
    'Панель администратора для ведения учета' : 'Admin panel for accounting',
    'Простая и быстрая интеграция' : 'Easy and fast integration',
    'Гибкая масштабируемая система' : 'Flexible scalable system',
    'Наши <span class="blue">ключевые продукты</span> для инвестиций' : 'Our key <span class="blue">Investment products</span>',
    'Платформа для автоследования' : 'Platform for auto-investigation',
    'Копирование стратегий в автономном режиме' : 'Copying strategies offline',
    'Платформа для робо-эдвайзинга' : 'A platform for robo-advising',
    'Персонализированный подбор стратегий исходя из заданных параметров' : 'Personalized selection of strategies based on the specified parameters',
    '<span class="blue">Представляем ценность</span> для броĸера и банĸа' : '<span class="blue">We represent value</span> for the broker and the ban',
    'Мы помогаем броĸерам и банĸам запустить собственное мобильное приложение для инвестиций в ĸоротĸие сроĸи и с эĸономией бюджета' : 'We help броĸерам and банĸам to launch its own mobile application for investment in ĸоротĸие сроĸи and эĸономией budget',
    'Зaказать демо' : 'Order a demo',
    'Эĸономим время и деньги на запусĸ digital сервисов' : 'We will save time and money for launching digital services',
    'Создаем канал привлечения новых клиентов' : 'Creating a channel to attract new customers',
    'Помогаем увеличить выручку путем запуска нового продукта' : 'We help to increase revenue by launching a new product',
    'Повышаем лояльность действующих клиентов' : 'We increase the loyalty of existing customers'
}


document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem('lang', 'Ru')
    animate_page()
})





const languages_list = document.querySelector('.languages_list')


if (languages_list) {

    languages_list.addEventListener('click', (e) => {
        const target = e.target
        if(target.classList.contains('language-active')) {
            return true
        }
        if(target.classList.contains('languages_item')) {

            // ? Убираем актуальный класс, удаляем из локального хранилища
            const active_old = languages_list.querySelector('.language-active')
            active_old.classList.remove('language-active')
            localStorage.removeItem('lang')

            // ? Добавляем новый язык 
            target.classList.toggle('language-active')
            localStorage.setItem('lang', target.textContent)

            // ? вызываем функцию транслейта
            translate_html()
        }
    })

}




const translate_html = () => {
    const lang = document.querySelectorAll('.lang')
    let language = localStorage.getItem('lang')


    let arr = []
    if(language == 'Ru') {
        for(let key in lang_text) {
            arr.push(key)
        }
    } else {
        for(let key of Object.values(lang_text)) {
            arr.push(key)
        }
    }
    lang.forEach((el, index) => {
        el.innerHTML = arr[index]
    })
}



const animate_page = () => {
    const phone = document.querySelector('.hero_image')
    const body = document.querySelector('.hero_body')
    window.setTimeout(() => {
        body.style.transform = `translate(0, 0)`
    }, 800)
    window.setTimeout(() => {
        phone.style.transform = `translate(0, 0)`
    }, 1000)
    const list = document.querySelector('.advantages_list')
    window.setTimeout(() => {
        list.style.transform = `translate(0, 0)`
    }, 1200)
}







const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('open')
        } else {
            entry.target.classList.add('close')
        }
    })
}, {
    threshold: 0.6
})

document.querySelectorAll('section').forEach(section => {observer.observe(section)})