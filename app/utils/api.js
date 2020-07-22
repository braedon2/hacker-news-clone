const prefix = 'https://hacker-news.firebaseio.com/v0/';

export function fetchItems(id) {
  return fetch(`${prefix}item/${id.toString(10)}.json`)
    .then((res) => res.json())
    .then((data) => data);
}

export function fetchTopPosts() {
  return fetch(`${prefix}topstories.json?orderBy="$key"&limitToFirst=30`)
    .then((res) => res.json())
    .then((ids) => Promise.all(ids.map((id) => fetchItems(id))));
}

export function fetchNewPosts() {
  return fetch(`${prefix}newstories.json?orderBy="$key"&limitToFirst=30`)
    .then((res) => res.json())
    .then((ids) => Promise.all(ids.map((id) => fetchItems(id))));
}


