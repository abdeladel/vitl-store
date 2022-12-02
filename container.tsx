import React from 'react';
import { PlaceholderWrapper } from 'component-studio-widgets/sharedComponents';
import { FormattedMessage } from 'react-intl';
import { Sfdr } from './index';
import Style from './style';

type StateType = {
  loading: boolean;
  failed: boolean;
};
type PropsType = {
  sustainabilityRisk: number | null;
  sfdrMinSustInvEnvTaxoAlign: number | null;
};
function generateTile2(
  sustainabilityRisk: number | null,
  sfdrMinSustInvEnvTaxoAlign: number | null,
) {
  let tile2 = null;
  if (sustainabilityRisk === 8 || sustainabilityRisk === 9) {
    tile2 = {
      title: `SF_WEB_ARTICLES_SFDR_TITLE_TUILE_2_ARTICLE_${sustainabilityRisk}`,
      content: (
        <>
          {/* Question 1 */}
          <Style.Question>
            <FormattedMessage
              id={`SF_LAB_P2_Q2_NO_HARM_ART${sustainabilityRisk}`}
            />
          </Style.Question>
          <Style.Response>
            {sustainabilityRisk === 8 && (
              <FormattedMessage id="SF_ESG_TAX_FIRST" />
            )}
            {sfdrMinSustInvEnvTaxoAlign === 0 ? (
              <FormattedMessage id="SF_ESG_TAX_ALIGNED_2D" />
            ) : (
              <FormattedMessage id="SF_ESG_TAX_NOT_ALIGNED_2D" />
            )}
          </Style.Response>

          {/* Question 2 */}
          <Style.Question>
            <FormattedMessage id="SF_LAB_P2_Q2_HOW_ADVERSE_IMPACTS" />
          </Style.Question>
          <Style.Response>
            <FormattedMessage id="SF_NO_SUST_OBJECTIVES_2E" />
            <FormattedMessage id="SF_SUST_OBJECTIVES_2E" />
          </Style.Response>

          {/* Question 3 */}
          <Style.Question>
            <FormattedMessage id="SF_OBJECTIVES_QUESTION" />
          </Style.Question>
          <Style.Response>
            <FormattedMessage id="SF_NO_SUST_OBJECTIVES_2F" />
            <FormattedMessage id="SF_SUST_OBJECTIVES_2F" />
          </Style.Response>
        </>
      ),
    };
  }
  return tile2;
}
export const SfdrName = 'Sfdr';
const defaultTiles = [
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_1',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_1_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_1_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_2',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_2_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_2_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_3',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_3_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_3_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_4',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_4_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_4_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_5',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_5_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_5_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_6',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_6_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_6_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_7',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_7_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_7_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_8',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_8_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_8_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_9',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_9_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_9_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_10',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_10_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_10_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_11',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_11_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_11_POPUP',
  },
  {
    title: 'SF_WEB_ARTICLES_SFDR_TITLE_TUILE_12',
    subtitle: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_SUBTITLE_TUILE_12_POPUP',
    content: 'FUNDSHEET_SUSTAINABLE__ARTICLES_SFDR_TEXT_TUILE_12_POPUP',
  },
];
export default class Container extends React.Component<PropsType, StateType> {
  state: StateType = {
    loading: false,
    failed: false,
  };

  render() {
    const { sustainabilityRisk, sfdrMinSustInvEnvTaxoAlign } = this.props;
    const { loading, failed } = this.state;
    const tiles = [...defaultTiles];
    const tile2 = generateTile2(sustainabilityRisk, sfdrMinSustInvEnvTaxoAlign);

    const formattedTiles = tiles.map(({ title, subtitle, content }) => ({
      title,
      content: (
        <>
          <Style.Question>
            <FormattedMessage id={subtitle} />
          </Style.Question>
          <Style.Response>
            <FormattedMessage id={content} />
          </Style.Response>
        </>
      ),
    }));
    // @ts-ignore
    formattedTiles[1] = tile2;

    return (
      <PlaceholderWrapper loading={loading} failed={failed}>
        <Sfdr tiles={formattedTiles.filter((tile) => tile !== null)} />
      </PlaceholderWrapper>
    );
  }
}
