import { Link } from "react-router";
import blogs from "../../assets/data/blogs.json";

const BlogSection = () => {
  const blogPosts = blogs.slice(0, 3);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Recent Story</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-500">
                  By {post.author} | {new Date(post.date).toLocaleDateString()}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.slug}`}
                  className="text-blue-600 hover:underline font-medium inline-block"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <h5 className="text-center mt-8">
          <Link
            to="/blogs"
            className="text-blue-600 hover:underline font-medium inline-block"
          >
            View All →
          </Link>
        </h5>
      </div>
    </section>
  );
};

export default BlogSection;
