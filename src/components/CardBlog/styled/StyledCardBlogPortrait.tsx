import styled from 'styled-components';

export const StyledCardBlogPortrait = styled.div`
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 272.5px;
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  .container_image {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    justify-self: center;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      cursor: pointer;
    }
  }

  .container_body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
  }

  .card_title,
  .card_description {
    margin: 0px;
    padding: 0px;
    cursor: pointer;
  }
  .card_title {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['--secundary-500']};
  }

  .card_description {
    color: ${({ theme }) => theme.colors['--neutral-grey-500']};
    font-size: 14px;
  }

  .container_date {
    font-feature-settings: 'cpsp' on;
    font-size: 0.75rem;
    line-height: 1.5;
    font-weight: 400;
    font-style: normal;
    color: ${({ theme }) => theme.colors['--neutral-grey-500']};
    line-height: 1.375rem;
  }
`;
