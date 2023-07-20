import { LineCompareResultDetails } from './LineCompareResultDetails';
import { LineCompareResultOverview } from './LineCompareResultOverview';


export class LineCompareResult {
    private 'compare_task_id'?: string;
    private 'line_compare_overview'?: Array<LineCompareResultOverview>;
    private 'line_compare_overview_count'?: number;
    private 'line_compare_details'?: Array<LineCompareResultDetails>;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withCompareTaskId(compareTaskId: string): LineCompareResult {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string  | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId(): string | undefined {
        return this['compare_task_id'];
    }
    public withLineCompareOverview(lineCompareOverview: Array<LineCompareResultOverview>): LineCompareResult {
        this['line_compare_overview'] = lineCompareOverview;
        return this;
    }
    public set lineCompareOverview(lineCompareOverview: Array<LineCompareResultOverview>  | undefined) {
        this['line_compare_overview'] = lineCompareOverview;
    }
    public get lineCompareOverview(): Array<LineCompareResultOverview> | undefined {
        return this['line_compare_overview'];
    }
    public withLineCompareOverviewCount(lineCompareOverviewCount: number): LineCompareResult {
        this['line_compare_overview_count'] = lineCompareOverviewCount;
        return this;
    }
    public set lineCompareOverviewCount(lineCompareOverviewCount: number  | undefined) {
        this['line_compare_overview_count'] = lineCompareOverviewCount;
    }
    public get lineCompareOverviewCount(): number | undefined {
        return this['line_compare_overview_count'];
    }
    public withLineCompareDetails(lineCompareDetails: Array<LineCompareResultDetails>): LineCompareResult {
        this['line_compare_details'] = lineCompareDetails;
        return this;
    }
    public set lineCompareDetails(lineCompareDetails: Array<LineCompareResultDetails>  | undefined) {
        this['line_compare_details'] = lineCompareDetails;
    }
    public get lineCompareDetails(): Array<LineCompareResultDetails> | undefined {
        return this['line_compare_details'];
    }
    public withErrorCode(errorCode: string): LineCompareResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): LineCompareResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}