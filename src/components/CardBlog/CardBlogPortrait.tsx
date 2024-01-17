import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { memo } from 'react';
import { CategoryList } from '../../..';
import { StyledCardBlogPortrait } from './styled/StyledCardBlogPortrait';

interface CardBlogPortraitProps {
  title: string;
  description?: string;
  category?: Array<{ name: string; colorCode: string | null }>;
  link: { title: string; to: string };
  createdAt: string;
  thumbnail: any;
  navigate: (to: string) => void;
  id?: string;
}

const CardBlogPortrait = ({
  title,
  description,
  category = [],
  link,
  createdAt,
  thumbnail,
  navigate,
  id
}: CardBlogPortraitProps) => {
  const image: any = getImage(thumbnail.gatsbyImageData ? thumbnail.gatsbyImageData : thumbnail);

  return (
    <StyledCardBlogPortrait>
      <div className="container_image">
        <GatsbyImage
          onClick={navigate ? () => navigate(link?.to || '') : undefined}
          className="image"
          image={image}
          alt={thumbnail?.description || title || ''}
        />
      </div>
      <div className="container_body">
        <div className="container_title">
          <h3 onClick={navigate ? () => navigate(link?.to || '') : undefined} className="card_title">
            {title}
          </h3>
        </div>
        <div className="container_date">{createdAt}</div>
        {category && (
          <div className="container_category">
            <CategoryList category={category} cardIndex={id} parentWidth={220} />
          </div>
        )}

        <div>
          {description && (
            <p onClick={navigate ? () => navigate(link?.to || '') : undefined} className="card_description">
              {description}
            </p>
          )}
        </div>
      </div>
    </StyledCardBlogPortrait>
  );
};

export default memo(CardBlogPortrait);
