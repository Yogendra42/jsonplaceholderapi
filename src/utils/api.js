  export function getPost() {
    return new Promise((resolve) => {
      const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url).then((res) => resolve(res.json()))
    })
  }

  export function getPostDetails(id = 1) {
    return new Promise((resolve) => {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
        fetch(url).then((res) => resolve(res.json()))
    })
  }