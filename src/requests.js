// Создать функции
// экспортировать ее
// написать используя async await
// добавить обработку ошибок

export const getPosts = async (setPosts) => {
  try {
    const response = await fetch('https://dummyjson.com/posts')
    if (!response.ok) throw new Error('Посты не найдены')
    const postData = await response.json()
    setPosts(postData.posts)
  } catch (error) {
    console.log('ОШИБКА: ', error)
  }
}

// Создать функции
// экспортировать ее
// написать используя async await
// добавить обработку ошибок

export const addPost = async (post) => {
  try {
    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    if (!response.ok) throw new Error('Не удалось добавить пост')
    const postData = await response.json()
    console.log(postData)
    return postData
  } catch (error) {
    console.log(error)
  }
}
