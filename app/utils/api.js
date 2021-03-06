

const prefix = 'https://hacker-news.firebaseio.com/v0/';

function removeDead(ids) {

}

function removeDeleted(ids) {

}

export function fetchItem(id) {
  return fetch(`${prefix}item/${id.toString(10)}.json`)
    .then((res) => res.json())
    .then((data) => data);
}

export function fetchMainPosts(type) {
  return fetch(`${prefix}${type}stories.json?orderBy="$key"&limitToFirst=30`)
    .then((res) => res.json())
    .then((ids) => Promise.all(ids.map((id) => fetchItem(id))));
}

export function fetchUser(user) {
  return fetch(`${prefix}user/${user}.json`)
    .then((res) => res.json())
    .then((data) => data)
}

export async function fetchUserPosts(postIds) {
  let postsToFetch = postIds.slice(0, 30)

  return Promise.all(postsToFetch.map((id) => fetchItem(id)))
    .then((posts) => posts.filter((post) => post.type === "story"))
}
