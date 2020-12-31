import matter from "gray-matter";

export const postList = (context) => {
  const keys = context.keys();
  const values = keys.map(context);

  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    };
  });
  return data;
};

export const indexFormattedPosts = () => {
  return postList(require.context("../posts", true, /\.md$/))
    .map((post) => {
      const { date, title } = post.frontmatter;
      const dateTime = new Date(date);

      return {
        sortKey: dateTime,
        dateTime: dateTime.toDateString(),
        title,
        body: `${post.markdownBody.split("\n")[0]}...`, // Only include the first paragraph
      };
    })
    .sort((a, b) => (a.sortKey > b.sortKey ? 1 : -1));
};

export const filterPosts = async (currentFilterText, posts, originalPosts) => {
  if (!currentFilterText) {
    return originalPosts;
  }

  const Fuse = (await import("fuse.js")).default;
  const options = {
    shouldSort: true,
    includeMatches: true,
    keys: ["body", "title", "datetime"],
  };

  return new Fuse(posts, options).search(currentFilterText).map((r) => r.item);
};
