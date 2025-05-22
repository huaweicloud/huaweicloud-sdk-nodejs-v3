import { ShowReportSummary } from './ShowReportSummary';


export class ShowReportSummaryBodyResult {
    public summary?: ShowReportSummary;
    private 'sub_summarys'?: Array<ShowReportSummary>;
    public constructor() { 
    }
    public withSummary(summary: ShowReportSummary): ShowReportSummaryBodyResult {
        this['summary'] = summary;
        return this;
    }
    public withSubSummarys(subSummarys: Array<ShowReportSummary>): ShowReportSummaryBodyResult {
        this['sub_summarys'] = subSummarys;
        return this;
    }
    public set subSummarys(subSummarys: Array<ShowReportSummary>  | undefined) {
        this['sub_summarys'] = subSummarys;
    }
    public get subSummarys(): Array<ShowReportSummary> | undefined {
        return this['sub_summarys'];
    }
}