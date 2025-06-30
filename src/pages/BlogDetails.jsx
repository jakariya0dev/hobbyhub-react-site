import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import blogPosts from "../assets/data/blogs.json";

const BlogDetails = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-600">
          Sorry, the blog you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>HobbyHub | {post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          By {post.author} | {new Date(post.date).toLocaleDateString()}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="text-gray-800 leading-7 whitespace-pre-line">
          {post.content}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
