import { ContentCompareResultDetails } from './ContentCompareResultDetails';
import { ContentCompareResultDiffs } from './ContentCompareResultDiffs';
import { ContentCompareResultOverview } from './ContentCompareResultOverview';


export class ContentCompareResult {
    private 'compare_task_id'?: string;
    private 'content_compare_overview'?: Array<ContentCompareResultOverview>;
    private 'content_compare_overview_count'?: number;
    private 'content_compare_details'?: Array<ContentCompareResultDetails>;
    private 'content_compare_diffs'?: Array<ContentCompareResultDiffs>;
    private 'error_code'?: string;
    private 'error_msg'?: string;
    public constructor(compareTaskId?: string) { 
        this['compare_task_id'] = compareTaskId;
    }
    public withCompareTaskId(compareTaskId: string): ContentCompareResult {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string  | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId(): string | undefined {
        return this['compare_task_id'];
    }
    public withContentCompareOverview(contentCompareOverview: Array<ContentCompareResultOverview>): ContentCompareResult {
        this['content_compare_overview'] = contentCompareOverview;
        return this;
    }
    public set contentCompareOverview(contentCompareOverview: Array<ContentCompareResultOverview>  | undefined) {
        this['content_compare_overview'] = contentCompareOverview;
    }
    public get contentCompareOverview(): Array<ContentCompareResultOverview> | undefined {
        return this['content_compare_overview'];
    }
    public withContentCompareOverviewCount(contentCompareOverviewCount: number): ContentCompareResult {
        this['content_compare_overview_count'] = contentCompareOverviewCount;
        return this;
    }
    public set contentCompareOverviewCount(contentCompareOverviewCount: number  | undefined) {
        this['content_compare_overview_count'] = contentCompareOverviewCount;
    }
    public get contentCompareOverviewCount(): number | undefined {
        return this['content_compare_overview_count'];
    }
    public withContentCompareDetails(contentCompareDetails: Array<ContentCompareResultDetails>): ContentCompareResult {
        this['content_compare_details'] = contentCompareDetails;
        return this;
    }
    public set contentCompareDetails(contentCompareDetails: Array<ContentCompareResultDetails>  | undefined) {
        this['content_compare_details'] = contentCompareDetails;
    }
    public get contentCompareDetails(): Array<ContentCompareResultDetails> | undefined {
        return this['content_compare_details'];
    }
    public withContentCompareDiffs(contentCompareDiffs: Array<ContentCompareResultDiffs>): ContentCompareResult {
        this['content_compare_diffs'] = contentCompareDiffs;
        return this;
    }
    public set contentCompareDiffs(contentCompareDiffs: Array<ContentCompareResultDiffs>  | undefined) {
        this['content_compare_diffs'] = contentCompareDiffs;
    }
    public get contentCompareDiffs(): Array<ContentCompareResultDiffs> | undefined {
        return this['content_compare_diffs'];
    }
    public withErrorCode(errorCode: string): ContentCompareResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ContentCompareResult {
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