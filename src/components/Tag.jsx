
const Tag = ({tag, onTagClick}) => {
    return (
      <button
        className="border-2 solid rounded-full px-3 py-1 m-1 hover:bg-gray-200"
        // onClick={() => onTagClick(tag)}
      >
        {tag}
      </button>
    );
}

export default Tag