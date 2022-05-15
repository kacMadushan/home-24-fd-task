import React, { useState } from 'react';
import categoriesService from '../services/categoriesService';


export const useCategoriesFetch = () => {
  const [name, setName] = useState(null);
  const [childCategories, setChildCategories] = useState<[]>([])
  const [articles, setArticles] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    const fetchCategories = () => {
      categoriesService()
        .then(({ data }) => {
          setIsLoading(false);
          setName(data.categories[0].name)
          setChildCategories(data.categories[0].childrenCategories.list)
          setArticles(data.categories[0].categoryArticles.articles)
        })
        .catch((error) => {
          setIsLoading(true);
          setChildCategories([]);
          setArticles([]);
        })
    }
    fetchCategories();
  }, []);

  return [isLoading, childCategories, articles, name] as const;
}
