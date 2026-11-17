# Recipe Discovery App

A React app to browse meal categories, view recipes, search by name, and save favorites.

## Features
- Browse categories from TheMealDB
- Category pages, recipe detail pages, search results
- Favorites persisted with localStorage
- Custom hooks: `useFetch`, `useLocalStorage`


## Run locally
```bash
npm install
npm run dev

**Reflection:**
The most difficult part was figuring out the `useFetch`, it would glitch out whenever my code would change. In my first round it would fetch once and then never update after I clicked into another category. I soon realized I forgot the dependency array. I also decided to use "id's" to store recipes. It kept things stable if the data ever changes in the API.


