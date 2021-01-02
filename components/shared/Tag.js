import { colors, icons } from "../../concerns/topics"

const Tag = ({ name }) => {
  return <span className={`rounded-lg text-xs py-1 px-2 mr-1 ${colors[name]} text-white`}>
    {`${name} ${icons[name]}`}
  </span>;
};

export default Tag;
