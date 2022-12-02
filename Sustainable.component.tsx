import React from 'react';
import { Sustainable } from '@component-studio/widgets';
import { StyledContainer } from './style';
import {
  IssueReportingEmailParametersType,
  IssueReportingConfigurationType,
} from '../../../../../tools-configuration/types';

type PropsType = {
  fundsheet: FundsheetDataType;
  sfdrDocuments?: ParsedDocType[];
  documentsIssueReportingConfiguration: IssueReportingConfigurationType;
  issueReportingEmailParameters: IssueReportingEmailParametersType;
  isInternalExternalIconDisplayed: boolean;
  isMarketingLegalColorDisplayed: boolean;
};
export default ({
  fundsheet,
  sfdrDocuments,
  documentsIssueReportingConfiguration,
  issueReportingEmailParameters,
  isMarketingLegalColorDisplayed,
  isInternalExternalIconDisplayed,
}: PropsType) => {
  console.log('dflkdfdfml', JSON.stringify(fundsheet.Sustainable));

  return (
    <StyledContainer>
      {fundsheet.ShowSustainable && fundsheet.Sustainable && (
        <Sustainable
          sfdrDocuments={sfdrDocuments}
          co2Table={fundsheet.Sustainable.co2Table}
          coverageTable={fundsheet.Sustainable.coverageTable}
          esgChart={fundsheet.Sustainable.esgChart}
          globalBox={fundsheet.Sustainable.globalBox}
          hasBenchmark={fundsheet.Sustainable.hasBenchmark}
          hasESGBenchmark={fundsheet.Sustainable.hasESGBenchmark}
          benchOnly={fundsheet.Sustainable.benchOnly}
          date={fundsheet.Sustainable.date}
          alternativeCarbonFootprintMessage={
            fundsheet.Sustainable.alternativeCarbonFootprintMessage
          }
          issueReportingConfiguration={documentsIssueReportingConfiguration}
          fundsheetIsin={fundsheet.FundCharacteristics?.isinCode}
          issueReportingEmailParameters={issueReportingEmailParameters}
          isInternalExternalIconDisplayed={isInternalExternalIconDisplayed}
          isMarketingLegalColorDisplayed={isMarketingLegalColorDisplayed}
          esgBenchmarkDisclaimer={fundsheet.Disclaimers?.esgBenchmarkDisclaimer}
          showSfdrLevel2={fundsheet.ShowSfdrLevel2}
          sfdrData={{
            sustainabilityRisk: fundsheet.Sustainable.sustainabilityRisk,
            sfdrMinSustInvEnvTaxoAlign:
              fundsheet.Sustainable.sfdrMinSustInvEnvTaxoAlign,
          }}
        />
      )}
    </StyledContainer>
  );
};
