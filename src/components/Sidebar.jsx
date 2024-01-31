import Header from "./Header"
import Home from "./Home"
import Menu from "./Menu"

const Sidebar = () => {
    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black dark:text-white">
            <Header />
            <Menu />
            <Home />
        </div>
    )
}

export default Sidebar