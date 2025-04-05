//routes/index.ja
import Home from "@containers/Home/Home";
import Form from "@containers/Form/form";   
import Book from "@containers/book/book";


const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path: "/form",
        end: true,
        component: Form,
    },
    {
        path:"/book",
        end: true,
        component: Book,
    }
];


export default routes
