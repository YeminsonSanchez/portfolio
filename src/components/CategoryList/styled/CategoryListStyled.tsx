import styled from 'styled-components';
import { Typography } from '../../../..';

export const CategoryListStyled = styled.div`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.primaryFont};

  .tags_section_bottom {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  .tag {
    color: ${({ theme }) => theme.colors['--secundary-500']};
    font-feature-settings: 'cpsp' on;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.014px;
    padding: 4px 24px;
    border-radius: 0px 0px 16px 16px;
  }

  .tag-plus {
    background: ${({ theme }) => theme.colors['--tertiary-500']};
  }

  .tag-plus:hover {
    background: ${({ theme }) => theme.colors['--secundary-500']};
    color: ${({ theme }) => theme.colors['--neutral-white']};
  }

  .tags_subsection {
    border-radius: 0px 0px 16px 16px;

    .main_tag {
      max-width: 130px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tooltip_tag {
      cursor: pointer;

      div {
        padding: 8px;
      }
    }
    .__react_component_tooltip {
      padding-left: 0;
      border-radius: 10px !important;
      ${({ theme }) =>
        Typography({
          base: 'caption',
          options: { color: theme.colors.whiteColor, height: 1.375, weight: 500 },
          theme
        })};
    }
  }
`;
