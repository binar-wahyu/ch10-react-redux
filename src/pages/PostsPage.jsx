import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../store/actions/postsActions";
import Post from "../components/Post";

function PostsPage({ dispatch, loading, posts, hasErrors }) {
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

function mapStateToProps(state) {
  return {
    loading: state.posts.loading,
    posts: state.posts.posts,
    hasErrors: state.posts.hasErrors,
  };
}

export default connect(mapStateToProps)(PostsPage);
