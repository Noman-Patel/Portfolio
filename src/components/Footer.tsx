// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6 mt-10">
  <div className="px-4 flex flex-col md:flex-row items-center justify-between text-sm max-w-screen-xl mx-auto w-full">
    <p className="mb-2 md:mb-0">
      &copy; {new Date().getFullYear()} Noman Patel. All rights reserved.
    </p>
    <div className="flex space-x-4">
      <a href="https://github.com/yourusername" className="hover:text-blue-400">GitHub</a>
      <a href="https://linkedin.com/in/yourusername" className="hover:text-blue-400">LinkedIn</a>
      <a href="mailto:you@example.com" className="hover:text-blue-400">Contact</a>
    </div>
  </div>
</footer>
    );
  }