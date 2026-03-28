import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-opti-text text-white py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-4">OptiNyxus</h3>
          <p className="text-zinc-400 max-w-sm text-sm">
            AI agents that run your business — end to end. Autonomously observe, decide, and act.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
          <Link href="/why" className="hover:text-white transition-colors">Why OptiNyxus</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-zinc-800 text-sm text-zinc-500 flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} OptiNyxus Platform. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy</Link>
          <Link href="#" className="hover:text-white">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
