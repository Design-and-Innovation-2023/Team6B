export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"CharitAble Index Page\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"CharitAble Index Page\",\"description\":\"This is a test index page\"},\"headers\":[{\"level\":2,\"title\":\"Testing markdown scripts\",\"slug\":\"testing-markdown-scripts\",\"link\":\"#testing-markdown-scripts\",\"children\":[{\"level\":3,\"title\":\"Testing\",\"slug\":\"testing\",\"link\":\"#testing\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
