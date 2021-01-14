import matter from "gray-matter";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { allSlugs } from "../../concerns/posts";
import { textColors } from "../../concerns/topics";

const Post = ({ frontmatter, markdownBody }) => {
  return (
    <article>
      <h1 className={`${textColors[frontmatter.tags?.split(",")[0]]} font-bold text-4xl`} >{frontmatter.title}</h1>
      <div className="prose">
        <p>
          <em>By {frontmatter.author}</em>
        </p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
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
