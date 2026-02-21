"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Executive Summary", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#projects" },
    { name: "Stack", href: "#skills" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6",
                isScrolled ? "py-4" : "bg-transparent"
            )}
        >
            <div className={cn(
                "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-8",
                isScrolled ? "glass-matrix py-4 shadow-2xl" : "py-2"
            )}>
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-matrix-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                        <Terminal className="w-6 h-6 text-black" />
                    </div>
                    <span className="font-black text-2xl tracking-tighter text-white group-hover:text-matrix-500 transition-colors">
                        MAO<span className="opacity-30">.SYS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black text-matrix-100/40 hover:text-matrix-500 transition-all uppercase tracking-[0.3em] relative group/nav"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-matrix-500 group-hover/nav:w-full transition-all duration-300" />
                        </Link>
                    ))}
                    <a href="mailto:ozkanmertayaz@gmail.com" className="btn-primary py-3 px-8 text-[11px] h-auto">
                        Hire System
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-matrix-500 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-6 right-6 mt-4 glass-matrix rounded-3xl p-8 flex flex-col gap-6 md:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xl font-black text-white hover:text-matrix-500 transition-colors tracking-tight"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
