import React, { useState } from 'react';
import Tag from './Tag';

const SearchTag = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const availableTags = ['snacks', 'grocery', 'dairy products', 'vegetables', 'fruits', 'cool drink', 'chocolate', 'Bakery', 'Meats & Seafood', 'Beverages', 'Organic & Natural'];

  const handleTagClick = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="container mx-auto text-left">
        <div className="mb-4">
          <div className="flex flex-wrap">
            {filteredTags.map((tag) => (
              <Tag key={tag} tag={tag} onTagClick={handleTagClick} />
            ))}
          </div>
        </div>
        <div className="border-4 h-[30vh] pt-5">
          <div className="flex flex-wrap">
            {selectedTags.map((tag) => (
              <div key={tag} className="border rounded-lg m-1 p-2 bg-gray-500 text-white text-xs">
                {tag}
                <span className="ml-2 cursor-pointer text-red-800 font-bold" onClick={() => handleRemoveTag(tag)}>
                  &#10005;
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTag;
