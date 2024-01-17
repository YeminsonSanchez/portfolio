import styled from 'styled-components';

export const StyledCardBlog = styled.div`
  font-family: ${({ theme }) => theme.fonts.primaryFont};
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 240px;
  height: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    max-height: 100%;
  }

  .container_image {
    width: 100%;
    max-width: 380px;
    height: 100%;
    border-radius: 8px 0 0 8px;
    overflow: hidden;
    align-self: center;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      max-height: 100%;
      border-radius: 8px 8px 0 0;
    }
  }

  .container_body {
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 8px;
  }

  .card_title,
  .card_description {
    margin: 0px;
    padding: 0px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .card_title {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['--secundary-500']};
    margin-bottom: 8px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
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

  .container_category {
    margin-bottom: 16px;
  }
`;
