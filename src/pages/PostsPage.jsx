import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, postsSelector } from "../store/slices/posts";
import Post from "../components/Post";

function PostsPage() {
  const dispatch = useDispatch();
  const { posts, loading, hasErrors } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  function jsx_posts() {
    // Show loading, error, or success state
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  }

  return (
    <section>
      <h1>Posts</h1>
      {jsx_posts()}
    </section>
  );
}

export default PostsPage;
