import { Schedule, Calendar, Setting, Ticket, Category, Notification, Upload, Logo, Base } from "../assets"
import Header from "./Header"
import Home from "./Home"
import Menu from "./Menu"

const Sidebar = () => {
    // let fields = [
    //     {
    //         title: "Dashboard",
    //         icon: Category,
    //     },
    //     {
    //         title: "Upload",
    //         icon: Upload,
    //     },
    //     {
    //         title: "Invoice",
    //         icon: Ticket,
    //     },
    //     {
    //         title: "Schedule",
    //         icon: Schedule,
    //     },
    //     {
    //         title: "Calender",
    //         icon: Calendar,
    //     },
    //     {
    //         title: "Notification",
    //         icon: Notification,
    //     },
    //     {
    //         title: "Settings",
    //         icon: Setting,
    //     },
    // ]
    return (
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black dark:text-white">
            <Header />
            <Menu />
            <Home />
        </div>
    )
}

export default Sidebar