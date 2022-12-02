import styled from 'styled-components';
import { Grid, colorScheme, typography } from '@component-studio/ui';

const TileWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${Grid(3)};
  max-width: ${Grid(240)};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  ${typography.fundsheetTitle}
  font-size: 34px;
  color: ${colorScheme.tropicalRainForest};
  gap: ${Grid(3)};
`;

const Question = styled.div`
  ${typography.sansBoldContent}
  font-size: 18px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: ${Grid(5)};
  right: ${Grid(5)};
  width: ${Grid(5)};
  height: ${Grid(5)};
  cursor: pointer;
`;

const Response = styled.div`
  ${typography.sansContent}
  font-family: 'Arial Regular';
  font-size: 18px;
`;

const ScrollableDiv = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

export default {
  TileWrapper,
  Title,
  CloseButton,
  Response,
  Question,
  ScrollableDiv,
};
