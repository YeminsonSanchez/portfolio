import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { memo } from 'react';
import { CategoryList } from '../../..';
import { StyledCardBlog } from './styled/StyledCardBlog';

interface CardBlogProps {
  title: string;
  description: string;
  category?: Array<{ name: string; colorCode: string | null }>;
  link: { title: string; to: string };
  createdAt: string;
  thumbnail: any;
  navigate: (to: string) => void;
  id?: string;
}

const CardBlog = ({ title, description, category = [], link, createdAt, thumbnail, navigate, id }: CardBlogProps) => {
  const image: any = getImage(thumbnail.gatsbyImageData);

  return (
    <StyledCardBlog>
      <div className="container_image">
        <GatsbyImage
          onClick={navigate ? () => navigate(link?.to || '') : undefined}
          className="image"
          image={image}
          alt={thumbnail?.description || title || ''}
        />
      </div>
      <div className="container_body">
        <div>
          <h3 onClick={navigate ? () => navigate(link?.to || '') : undefined} className="card_title">
            {title}
          </h3>
        </div>
        <div className="container_date">{createdAt}</div>
        <div className="container_category">
          <CategoryList category={category} cardIndex={id} parentWidth={320} />
        </div>
        <div>
          <p className="card_description" onClick={navigate ? () => navigate(link?.to || '') : undefined}>
            {description}
          </p>
        </div>
      </div>
    </StyledCardBlog>
  );
};

export default memo(CardBlog);
