# hacker-news-clone

The final project for Tyler McGinnis' React course. The goal of the project is
to recreacte the [Hacker News clone made by Tyler](https://hn.ui.dev/)

## Components

Depending on the route `App` renders `Top`, `New`, `Post`, or `User` which are
container components. `PostsList`, `PostPreview`, `PostInfo`, and `UserInfo`
are functional components.

```
Top
└── PostsList

New
└── PostsList

User
├── UserInfo
└── PostsList

PostsList
├── PostPreview
├── PostPreview
└── ...

Post
├── PostInfo
├── Comment
├── Comment
└── ...
```