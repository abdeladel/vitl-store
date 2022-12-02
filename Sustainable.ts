declare type SustainableTableDataType = {
  label: string;
  value: number | string;
}[];
declare type ESGChartDataType = [
  {
    name: 'env';
    benchScore: number;
    ptfScore: number;
  },
  {
    name: 'social';
    benchScore: number;
    ptfScore: number;
  },
  {
    name: 'gov';
    benchScore: number;
    ptfScore: number;
  },
];
declare type GlobalBoxDataType = {
  globalBenchScore: number;
  globalPtfScore: number;
};
declare type ModelizedSustainableType = {
  sfdrDocuments?: ParsedDocType[];
  globalBox: GlobalBoxDataType | null | undefined;
  esgChart: ESGChartDataType | null | undefined;
  hasBenchmark: boolean;
  benchOnly: boolean;
  co2Table: SustainableTableDataType | null | undefined;
  coverageTable: SustainableTableDataType | null | undefined;
  date: string;
  alternativeCarbonFootprintMessage: string | null | undefined;
  esgBenchmarkDisclaimer?: string | null | undefined;
  hasESGBenchmark?: boolean;
  sustainabilityRisk: number | null;
  sfdrMinSustInvEnvTaxoAlign: number | null;
};
/* eslint-disable camelcase */
declare type SustainableResponseType =
  | {
      esg: {
        gbl: {
          ptf_score: number;
          bench_score: number;
          ptf_cov: number;
          bench_cov: number;
        };
        env: {
          ptf_score: number;
          bench_score: number;
        };
        social: {
          ptf_score: number;
          bench_score: number;
        };
        gov: {
          ptf_score: number;
          bench_score: number;
        };
      };
      co2_intens: {
        ptf_eval: number;
        bench_eval: number;
        ptf_cov: number;
        bench_cov: number;
      };
      date: string;
      esg_categorization: {
        amf: { category: number | null };
        sfdr: { article: number | null; sustainability_risk: number | null };
      };
      sfdr: { sfdr_min_sust_inv_env_taxo_align: number | null };
    }
  | null
  | undefined;
/* eslint-enable camelcase */
type SustainableModelizerExtraType = {
  alternativeCarbonFootprintMessage?: string | null | undefined;
  benchOnly?: boolean;
  hasESGBenchmark?: boolean;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare type SustainableModelizerType = (
  sustainableResponse: SustainableResponseType,
  extra: SustainableModelizerExtraType,
) => ModelizedSustainableType | null | undefined;
