// components/ReadMore.js
import Button from "@/components/Buttons";
import { useState } from 'react';

const ReadMore = ({ children, linesToShow }) => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    // Convert the string into HTML with <p> for text and retain <ul>/<ol>
    const convertToHtml = (content) => {
        const parts = content.split(/&nbsp;/).map(part => {
            // Check for <ul> or <ol> tags
            if (/<(ul|ol)>/.test(part)) {
                return part.trim(); // Keep list items as is
            }
            // Wrap other parts in <p> with a green color
            return `<p class="text-green-500">${part.trim()}</p>`;
        });

        return parts.join(''); // Join back into a single string
    };

    const content = typeof children === 'string' ? convertToHtml(children) : children;

    return (
        <div className="mt-[10px] more-content">
            <div
                className={`overflow-hidden transition-all [&>*]:mb-[20px] duration-300 ${isReadMore ? 'line-clamp-5' : ''}`}
                style={{ maxHeight: isReadMore ? `${linesToShow * 2.5}em` : 'none' }} // Adjust line height as needed
                dangerouslySetInnerHTML={{ __html: content }} // Set HTML content
            />
            
            <Button
                size="small"
                label={isReadMore ? 'Read More' : 'Show Less'}
                icon={false}
                action={toggleReadMore}
                classes="mt-[24px]"
            />
        </div>
    );
};

export default ReadMore;
