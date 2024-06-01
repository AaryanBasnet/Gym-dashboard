import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/gymkhanalogo.png';
import ArrowRight from '../assets/right-arrow.png';
import Dumbbell from '../assets/Dumbbell.png';
import { motion } from 'framer-motion';
import { 
    LayoutDashboard,
    Users,
    ArrowRightLeft,
    Calendar,
    BarChart,
    PersonStanding
} from "lucide-react";

const navLinks = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/"
    },
    {
        name: "Members",
        icon: Users,
        path: "/members"
    },
    {
        name: "Transaction",
        icon: ArrowRightLeft,
        path: "/transactions"
    },
    {
        name: "Trainers",
        icon: PersonStanding,
        path: "/trainers"
    },
    {
        name: "Events",
        icon: Calendar,
        path: "/events"
    },
    {
        name: "Analytics",
        icon: BarChart,
        path: "/analytics"
    },
];

const variants = {
    expanded: {
        width: "20%",
    },
    collapsed: {
        width: "5%",
    },
};

function NavigationBar() {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth < 768) {
                setIsExpanded(false);
            } else {
                setIsExpanded(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={variants}
            className={
                "flex flex-col border border-r-1 h-screen relative transition-all duration-300 " +
                (isExpanded ? "w-1/5 p-6" : "w-[5%] p-2")
            }
        >
            <div className="logo-div flex items-center justify-center md:justify-start">
                <img src={Dumbbell} className={!isExpanded ? "block w-8" : "hidden"} alt="Dumbbell" />
                <img src={Logo} className={isExpanded ? "block w-32" : "hidden"} alt="Logo" />
            </div>
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer w-5 h-5 bg-[#FF8C8C] rounded-full absolute -right-[10.5px] top-12"
            >
                <img src={ArrowRight} className="w-5 h-5" alt="Toggle" />
            </div>

            <div className="mt-9 flex flex-col gap-y-8">
                {navLinks.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <div
                            className={
                                "flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors " +
                                (activeNavIndex === index ? "bg-[#FF8C8C] text-white font-semibold" : "text-black") +
                                (isExpanded ? " pl-4" : " justify-center")
                            }
                            onClick={() => setActiveNavIndex(index)}
                        >
                            <item.icon className="w-6 h-6" />
                            <span className={isExpanded ? "block" : "hidden"}>{item.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}

export default NavigationBar;
