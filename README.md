# 博客

```
技术栈：react+typescript+ant
https://go-echarts.github.io/go-echarts/docs/geo
```

# 部署到 GitHub Pages

```
git remote add origin git@github.com:{username}/blogs.git
git branch -M main
git push -f -u origin main

package.json
"homepage":"https://{username}.github.io/blogs"
"predeploy": "yarn build",
"deploy": "gh-pages -d build",

yarn add -D gh-pages
yarn deploy
```
