import React from 'react';
import {
  FormattedMessage,
  FormattedDate,
  injectIntl,
  IntlShape,
} from 'react-intl';
import { WidgetTitle } from 'component-studio-widgets/sharedComponents';
import { SfdrContainer as Sfdr } from 'component-studio-widgets/fund/components/Sfdr';
import {
  Container,
  SubComponents,
  DateContainer,
  LinkContainer,
  SfdrContainer,
  Link,
} from './style';
import {
  ESGChart,
  SFDRDocumentsTable,
  SustainableTable,
  GlobalBox,
} from './blocks';
import HTMLDisclaimer from './blocks/HTMLDisclaimer';
import {
  IssueReportingConfigurationType,
  IssueReportingEmailParametersType,
} from '../../../../../../tools-configuration/types';

export type SustainablePropsType = {
  fundsheetParams: FundsheetParamsType;
  displayErrorMessage: boolean;
};

type PropsType = ModelizedSustainableType & {
  intl: IntlShape;
  issueReportingConfiguration?: IssueReportingConfigurationType;
  fundsheetIsin?: string;
  issueReportingEmailParameters?: IssueReportingEmailParametersType;
  isInternalExternalIconDisplayed?: boolean;
  isMarketingLegalColorDisplayed?: boolean;
  esgBenchmarkDisclaimer?: string | null | undefined;
  hasESGBenchmark?: boolean;
  showSfdrLevel2?: boolean;
  sfdrData: any;
};

const Sustainable = (props: PropsType) => {
  const {
    globalBox,
    esgChart,
    co2Table,
    coverageTable,
    hasBenchmark,
    benchOnly,
    date,
    intl,
    alternativeCarbonFootprintMessage,
    sfdrDocuments = [],
    issueReportingConfiguration,
    fundsheetIsin,
    issueReportingEmailParameters,
    isInternalExternalIconDisplayed = false,
    isMarketingLegalColorDisplayed = false,
    esgBenchmarkDisclaimer,
    hasESGBenchmark = false,
    showSfdrLevel2,
    sfdrData,
  } = props;
  console.log(props);

  if (!globalBox && !co2Table) {
    return null;
  }

  return (
    <Container data-e2e="sustainable-tab">
      <WidgetTitle>
        <FormattedMessage id="FUND_REPORTING_SUSTAINABLE_TITLE" />
      </WidgetTitle>
      {globalBox && (
        <GlobalBox
          {...globalBox}
          hasBenchmark={hasBenchmark}
          benchOnly={benchOnly}
          hasESGBenchmark={hasESGBenchmark}
        />
      )}
      {sfdrDocuments && sfdrDocuments.length > 0 && (
        <SFDRDocumentsTable
          documents={sfdrDocuments}
          issueReportingConfiguration={issueReportingConfiguration}
          fundsheetIsin={fundsheetIsin}
          issueReportingEmailParameters={issueReportingEmailParameters}
          isInternalExternalIconDisplayed={isInternalExternalIconDisplayed}
          isMarketingLegalColorDisplayed={isMarketingLegalColorDisplayed}
        />
      )}
      <SubComponents>
        {esgChart && (
          <ESGChart
            esgChart={esgChart}
            hasBenchmark={hasBenchmark}
            benchOnly={benchOnly}
            hasESGBenchmark={hasESGBenchmark}
          />
        )}
        {co2Table && (
          <SustainableTable
            titleLabel="FUND_REPORTING_SUSTAINABLE_CARBON_FOOTPRINT_TITLE"
            disclaimerLabel="FUND_REPORTING_SUSTAINABLE_CARBON_FOOTPRINT_FOOTNOTE_1"
            pictogramName="carbon-dioxyde"
            dataTable={co2Table}
            alternativeMessage={alternativeCarbonFootprintMessage}
          />
        )}
        {coverageTable && (
          <SustainableTable
            titleLabel={`FUND_REPORTING_SUSTAINABLE_ESG_COVERAGE_${
              benchOnly ? 'ETF_' : ''
            }TITLE`}
            disclaimerLabel="FUND_REPORTING_SUSTAINABLE_ESG_COVERAGE_FOOTNOTE_1"
            pictogramName="tree-in-city"
            dataTable={coverageTable}
          />
        )}
      </SubComponents>
      {esgBenchmarkDisclaimer && (
        <HTMLDisclaimer html={esgBenchmarkDisclaimer} />
      )}
      {date && (
        <DateContainer>
          <FormattedMessage
            id="FUNDSHEET_SUSTAINABLE_SOURCE"
            values={{
              date: <FormattedDate value={date} />,
            }}
          />
        </DateContainer>
      )}
      {globalBox && (
        <HTMLDisclaimer
          html={intl.formatMessage({
            id: 'FUND_REPORTING_SUSTAINABLE_ESG_FOOTNOTE_1',
          })}
        />
      )}
      <LinkContainer>
        <Link
          href={intl.formatMessage({
            id: 'FUND_REPORTING_SUSTAINABLE_ESG_LINK_COMPONENT',
          })}
        >
          <FormattedMessage id="FUND_REPORTING_SUSTAINABLE_ESG_WORDING_LINK_COMPONENT" />
        </Link>
      </LinkContainer>
      {(true || showSfdrLevel2) && (
        <SfdrContainer>
          <Sfdr {...sfdrData} />
        </SfdrContainer>
      )}
    </Container>
  );
};

export default injectIntl(Sustainable);
