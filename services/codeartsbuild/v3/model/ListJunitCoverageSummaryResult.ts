import { ListJunitCoverageSummaryResultUnitSummaryList } from './ListJunitCoverageSummaryResultUnitSummaryList';


export class ListJunitCoverageSummaryResult {
    private 'unit_summary_list'?: Array<ListJunitCoverageSummaryResultUnitSummaryList>;
    public constructor() { 
    }
    public withUnitSummaryList(unitSummaryList: Array<ListJunitCoverageSummaryResultUnitSummaryList>): ListJunitCoverageSummaryResult {
        this['unit_summary_list'] = unitSummaryList;
        return this;
    }
    public set unitSummaryList(unitSummaryList: Array<ListJunitCoverageSummaryResultUnitSummaryList>  | undefined) {
        this['unit_summary_list'] = unitSummaryList;
    }
    public get unitSummaryList(): Array<ListJunitCoverageSummaryResultUnitSummaryList> | undefined {
        return this['unit_summary_list'];
    }
}