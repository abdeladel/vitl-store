import { modelizerWrapper } from '../../utils';

const modelizer = (
  apiResponse: SustainableResponseType,
  {
    alternativeCarbonFootprintMessage,
    benchOnly = false,
    hasESGBenchmark = false,
  }: SustainableModelizerExtraType = {},
): ModelizedSustainableType | null => {
  if (!apiResponse) return null;
  const isESGPresent = apiResponse.esg.gbl.ptf_score !== null;
  const isCarbonFootprintPresent = apiResponse.co2_intens.ptf_eval !== null;
  // Add coverage only if the score/eval is not null.
  const coverageTable: null | SustainableTableDataType =
    !isESGPresent && !isCarbonFootprintPresent ? null : [];

  if (isESGPresent && coverageTable !== null) {
    coverageTable.push({
      label: 'FUND_REPORTING_SUSTAINABLE_ESG_SCORING_COVERAGE',
      value: `${
        Math.trunc(
          apiResponse.esg.gbl[benchOnly ? 'bench_cov' : 'ptf_cov'] * 10000,
        ) / 100
      } %`, // displayed in percent with up to 2 digits after decimal and without rounding up
    });
  }

  if (
    isCarbonFootprintPresent &&
    coverageTable !== null &&
    !alternativeCarbonFootprintMessage
  ) {
    coverageTable.push({
      label: 'FUND_REPORTING_SUSTAINABLE_CARBON_FOOTPRINT_COVERAGE',
      value: `${
        Math.trunc(
          apiResponse.co2_intens[benchOnly ? 'bench_cov' : 'ptf_cov'] * 10000,
        ) / 100
      } %`, // displayed in percent with up to 2 digits after decimal and without rounding up
    });
  }

  // If ESG score is null, set globalBox and esgChart to null
  const globalBox = isESGPresent
    ? {
        globalBenchScore: apiResponse.esg.gbl.bench_score,
        globalPtfScore: apiResponse.esg.gbl.ptf_score,
      }
    : null;
  const esgChart: ESGChartDataType | null = isESGPresent
    ? [
        {
          name: 'env',
          benchScore: apiResponse.esg.env.bench_score,
          ptfScore: apiResponse.esg.env.ptf_score,
        },
        {
          name: 'social',
          benchScore: apiResponse.esg.social.bench_score,
          ptfScore: apiResponse.esg.social.ptf_score,
        },
        {
          name: 'gov',
          benchScore: apiResponse.esg.gov.bench_score,
          ptfScore: apiResponse.esg.gov.ptf_score,
        },
      ]
    : null;
  const hasBenchmark = apiResponse.esg.gbl.bench_score === null;
  // If CO2 eval is null, set co2Table to null
  let co2Table = null;

  if (isCarbonFootprintPresent) {
    co2Table = !benchOnly
      ? [
          {
            label: 'FUND_REPORTING_SUSTAINABLE_CARBON_PORTFOLIO',
            value: apiResponse.co2_intens.ptf_eval,
          },
        ]
      : [];
  }

  // Add bench value only if it is not null
  const co2Bench = apiResponse.co2_intens.bench_eval;
  const getLabel = () => {
    if (hasESGBenchmark && benchOnly) {
      return 'FUND_REPORTING_SUSTAINABLE_CARBON_ETF_BENCH_ESG';
    }
    if (hasESGBenchmark && !benchOnly) {
      return 'FUND_REPORTING_SUSTAINABLE_ESG_BENCHMARK_ESG_TITLE';
    }
    if (!hasESGBenchmark && benchOnly) {
      return 'FUND_REPORTING_SUSTAINABLE_CARBON_ETF_BENCH';
    }
    return 'FUND_REPORTING_SUSTAINABLE_CARBON_BENCH';
  };

  if (co2Table && co2Bench !== null) {
    co2Table.push({
      label: getLabel(),
      value: co2Bench,
    });
  }

  const {
    date,
    esg_categorization: {
      sfdr: { sustainability_risk: sustainabilityRisk },
    },
  } = apiResponse;
  const sfdrMinSustInvEnvTaxoAlign =
    apiResponse.sfdr?.sfdr_min_sust_inv_env_taxo_align;

  return {
    globalBox,
    esgChart,
    hasBenchmark,
    benchOnly,
    co2Table,
    coverageTable,
    date,
    alternativeCarbonFootprintMessage,
    hasESGBenchmark,
    sustainabilityRisk,
    sfdrMinSustInvEnvTaxoAlign,
  };
};

export default modelizerWrapper(modelizer);







https://teams.microsoft.com/l/meetup-join/19%3ameeting_NjRiZWZjOGQtYTFiMS00MDM3LTk3M2UtMzY4OGYwZTVjYWZh%40thread.v2/0?context=%7b%22Tid%22%3a%22614f9c25-bffa-42c7-86d8-964101f55fa2%22%2c%22Oid%22%3a%22dd31f33d-8f16-49a4-aa37-6f9d2983261c%22%7d
