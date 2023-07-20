import Article from "./Article";

function ArticleList({ blogDataObj }) {
  return (
    <main>
      <Article post={blogDataObj.posts} />
    </main>
  );
}

export default ArticleList