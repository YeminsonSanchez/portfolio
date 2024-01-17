import { memo, useEffect, useState } from 'react';
import ReactTooltip from 'react-tooltip';
import { Media } from '../../..';
import useWindowSize from '../../../hooks/useWindowSize';
import { CategoryListStyled } from './styled/CategoryListStyled';

interface CategoryListProps {
  category?: Array<{ name: string; colorCode: string | null }>;

  cardIndex?: string;
  parentWidth: number;
}

const CategoryList = ({ category = [], cardIndex, parentWidth }: CategoryListProps) => {
  const initialState: {
    tags: Array<{ name: string; colorCode: string | null }>;
    tagsDesktop: Array<{ name: string; colorCode: string | null }>;
    remTags: Array<{ name: string; colorCode: string | null }>;
    remTagsDesktop: Array<{ name: string; colorCode: string | null }>;
  } = {
    tags: [],
    tagsDesktop: [],
    remTags: [],
    remTagsDesktop: []
  };

  const { width } = useWindowSize();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (category.length > 0) {
      let tagsWidth = 0;
      console.log('tagsWidth', tagsWidth);
      const tags: Array<{ name: string; colorCode: string | null }> = [];
      const tagsDesktop: Array<{ name: string; colorCode: string | null }> = [];
      const remTags: Array<{ name: string; colorCode: string | null }> = [];
      const remTagsDesktop: Array<{ name: string; colorCode: string | null }> = [];
      category?.forEach((element, i) => {
        const elementWidth = element.name.length * 9.5 + 85;
        if (i < 1) {
          tags.push(element);
        } else {
          remTags.push(element);
        }

        if (i < 3 && tagsWidth + elementWidth <= parentWidth) {
          tagsWidth = tagsWidth + elementWidth;
          tagsDesktop.push(element);
        } else {
          remTagsDesktop.push(element);
        }
      });
      setState(prev => ({ ...prev, tags, remTags, tagsDesktop, remTagsDesktop }));
    }
  }, [category, parentWidth, width]);

  if (state.tags && state.tags.length > 0) {
    return (
      <CategoryListStyled>
        <Media lessThan={'md'}>
          <div className="tags_section_bottom">
            {state.tags.map((tName: { name: string; colorCode: string }, index: number) => (
              <div className="tags_subsection " key={`cat-tag-key-${index}`} id={`cat-tag-${index}`}>
                <div className="tag main_tag" style={{ background: tName.colorCode ? tName.colorCode : '#ffb3ff' }}>
                  {tName.name}
                </div>
              </div>
            ))}
            {state.remTags && state.remTags.length > 0 && (
              <div
                className="tags_subsection tooltip_tag"
                data-iscapture="true"
                data-tip
                data-for={`rem-tags-${cardIndex}`}
              >
                <div className="tag tag-plus">+{state.remTags.length}</div>
                <ReactTooltip
                  offset={{ top: 10, left: 0 }}
                  data-padding={'2px 2px'}
                  backgroundColor={'#50123D'}
                  afterShow={() => {
                    setTimeout(ReactTooltip.hide, 3000);
                  }}
                  id={`rem-tags-${cardIndex}`}
                >
                  <ul>
                    {state.remTags.map((tName: { name: string; colorCode: string }, ind: number) => (
                      <li key={`tag-key-li-${ind}`}>{tName.name}</li>
                    ))}
                  </ul>
                </ReactTooltip>
              </div>
            )}
          </div>
        </Media>
        <Media greaterThanOrEqual={'md'}>
          <div className="tags_section_bottom">
            {state.tagsDesktop.map((tName: { name: string; colorCode: string }, index: number) => (
              <div className="tags_subsection " key={`cat-tag-key-${index}`} id={`cat-tag-${index}`}>
                <div className="tag main_tag" style={{ background: tName.colorCode ? tName.colorCode : '#ffb3ff' }}>
                  {tName.name}
                </div>
              </div>
            ))}
            {state.remTagsDesktop && state.remTagsDesktop.length > 0 && (
              <div
                className="tags_subsection tooltip_tag"
                data-iscapture="true"
                data-tip
                data-for={`rem-tags-${cardIndex}`}
              >
                <div className="tag tag-plus">+{state.remTagsDesktop.length}</div>
                <ReactTooltip
                  data-padding={'2px 2px'}
                  offset={{ top: 10, left: 0 }}
                  backgroundColor={'#50123D'}
                  id={`rem-tags-${cardIndex}`}
                >
                  <ul>
                    {state.remTagsDesktop.map((tName: { name: string; colorCode: string }, ind: number) => (
                      <li key={`tag-key-li-${ind}`}>{tName.name}</li>
                    ))}
                  </ul>
                </ReactTooltip>
              </div>
            )}
          </div>
        </Media>
      </CategoryListStyled>
    );
  } else {
    return null;
  }
};

export default memo(CategoryList);
