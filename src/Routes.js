import Home from './Pages/Home/Home';
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo';
import Category from './Pages/Category/Category';
import CourseInfo from './Pages/CourseInfo/CourseInfo';

let routes = [
    {path : '/' , element : <Home />},
    {path : '/article-info/:articleName' , element : <ArticleInfo />},
    {path : '/category-info/:categoryName' , element : <Category />},
    {path : '/course-info/:courseName' , element : <CourseInfo />},
]

export default routes;