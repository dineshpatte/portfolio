import { Link } from "react-router-dom";

const blogs = [
  {
    slug: "nottingham-forest",
    title: "The Anotomy of Nottingham Forest",
    subtitle: "Rise, Fall and Comeback",
    description:
      "From back-to-back European Cups in 1979 and 1980 to League One in 2005 — and the long road back. The full story of Nottingham Forest.",
    tag: "Football",
    date: "May 2026",
  },
  // Add future blogs here
];

export default function Blog() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-3">Blog</h1>
        <p className="text-gray-400 mb-12">
          Writing on football, tech, and things I find interesting.
        </p>

        <div className="flex flex-col gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="block border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-500 uppercase tracking-widest">
                  {blog.tag}
                </span>
                <span className="text-gray-700">·</span>
                <span className="text-xs text-gray-500">{blog.date}</span>
              </div>

              <h2 className="text-xl font-semibold mb-1 group-hover:text-gray-200 transition-colors">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-400 italic mb-3">
                {blog.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {blog.description}
              </p>

              <div className="mt-4 text-sm text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
