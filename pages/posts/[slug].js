import matter from "gray-matter";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { allSlugs } from "../../concerns/posts";

const Post = ({ frontmatter, markdownBody }) => {
  return (
    <article className="prose">
      <h1>{frontmatter.title}</h1>
      <p>By {frontmatter.author}</p>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
  );
};

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const paths = allSlugs().map((slug) => `/posts/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
