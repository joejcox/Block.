import { Link } from "react-router-dom"

const PostPreviewFooter = ({ postData }) => {
  const { author, slug, comment_count } = postData

  return (
    <footer className="post-footer px-6 py-4 flex justify-between bg-main-600 text-main-200">
      <div className="footer-left">
        Posted by{" "}
        <Link
          to={`/user/${author}`}
          className="capitalise underline hover:text-main-100"
        >
          {author}
        </Link>
      </div>
      <div className="footer-right">
        <Link
          to={`/user/${author}/posts/${slug}`}
          className="underline hover:text-main-100"
        >
          Comments ({comment_count})
        </Link>
      </div>
    </footer>
  )
}

export default PostPreviewFooter
