import { useState } from "react";

import Timeline from "../components/shared/Timeline";
import { indexFormattedPosts, filterPosts } from "../concerns/posts";

const Posts = (props) => {
  const [filterText, setFilterText] = useState("");
  const [posts, setPosts] = useState(indexFormattedPosts());
  const allPosts = indexFormattedPosts();

  return (
    <div className="flex flex-col">
      <div className="text-center">
        <input
          className="shadow-md border-solid border border-gray-200 rounded w-full max-w-xs md:max-w-2xl px-2 py-1 mb-6 hover:border-blue-300 focus:border-blue-300 transition-all"
          type="text"
          name="post-search"
          placeholder="Search recent posts..."
          value={filterText}
          onChange={async (e) => {
            const { value } = e.currentTarget;
            const filteredPosts = await filterPosts(value, allPosts);

            setPosts(filteredPosts);
            setFilterText(value);
          }}
          aria-controls="search-results"
        />
      </div>
      <Timeline items={posts} />
    </div>
  );
};

export default Posts;
