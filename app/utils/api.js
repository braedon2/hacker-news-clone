const prefix = 'https://hacker-news.firebaseio.com/v0/';

export function getItem(id) {
  return fetch(`${prefix}item/${id.toString(10)}.json`)
    .then((res) => res.json())
    .then((data) => data);
}

export function getTopPosts() {
  return fetch(`${prefix}topstories.json?orderBy="$key"&limitToFirst=30`)
    .then((res) => res.json())
    .then((ids) => Promise.all(ids.map((id) => getItem(id))));
}

export function getNewPosts() {
  return fetch(`${prefix}newstories.json?orderBy="$key"&limitToFirst=30`)
    .then((res) => res.json())
    .then((ids) => Promise.all(ids.map((id) => getItem(id))));
}
