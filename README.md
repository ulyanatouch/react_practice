export const Post1 = (props) => {
const { title, description } = props

return (

<div style={{ width: '400px', backgroundColor: 'green' }}>
<h1>{title}</h1>
<p>{description}</p>
</div>
)
}

const Post2 = (props) => {
return (

<div>
<h1>{props.title}</h1>
<p>{props.description}</p>
</div>
)
}
// default может быть только один в файле
// могу переименовать при импорте

// экспорт дефолтный - без фигурных скобок
// экспорт обычный - с фигурными скобками

// могу прописать логику
// return всегда возвращает один тег
// один родительский элемент обарчивает все остальные
// JSX - смесь html + js - функция которая возвращает html

// hook специальный API который работает только с ФУНКЦИОНАЛЬНЫМИ компонентами
// use - начинаются с этого слова
// вызываются на верхнем уровне компонента
// не можем писать хуки вусловиях или циклах

//значение фунцкция кот меняет значение //первоначнальное значение
// состояние - динамическая часть(изщменяемая часть компонента)
// МЫ НЕ МОЖЕМ МЕНЯТЬ СОСТОЯНИЕ НАПРЯМУЮ
// изменяем состояние через функцию set
// React отслеживает изменение переменной и перерендр компонент
