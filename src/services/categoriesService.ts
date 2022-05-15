
const categoriesService = async () => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        categories: productLists(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories: childrenProductLists {
            list {
              name
              urlPath
            }
          }
          categoryArticles: articlesList(first: 50) {
            articles {
              name
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`
    })
  })
  return response.json();
};

export default categoriesService;