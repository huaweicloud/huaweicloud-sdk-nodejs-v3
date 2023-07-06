import { ContentCompareResultDetails } from './ContentCompareResultDetails';
import { ContentCompareResultDiffs } from './ContentCompareResultDiffs';
import { ContentCompareResultOverview } from './ContentCompareResultOverview';


export class ContentCompareResult {
    private 'compare_task_id': string | undefined;
    private 'content_compare_overview'?: Array<ContentCompareResultOverview> | undefined;
    private 'content_compare_overview_count'?: number | undefined;
    private 'content_compare_details'?: Array<ContentCompareResultDetails> | undefined;
    private 'content_compare_diffs'?: Array<ContentCompareResultDiffs> | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor(compareTaskId?: any) { 
        this['compare_task_id'] = compareTaskId;
    }
    public withCompareTaskId(compareTaskId: string): ContentCompareResult {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId() {
        return this['compare_task_id'];
    }
    public withContentCompareOverview(contentCompareOverview: Array<ContentCompareResultOverview>): ContentCompareResult {
        this['content_compare_overview'] = contentCompareOverview;
        return this;
    }
    public set contentCompareOverview(contentCompareOverview: Array<ContentCompareResultOverview> | undefined) {
        this['content_compare_overview'] = contentCompareOverview;
    }
    public get contentCompareOverview() {
        return this['content_compare_overview'];
    }
    public withContentCompareOverviewCount(contentCompareOverviewCount: number): ContentCompareResult {
        this['content_compare_overview_count'] = contentCompareOverviewCount;
        return this;
    }
    public set contentCompareOverviewCount(contentCompareOverviewCount: number | undefined) {
        this['content_compare_overview_count'] = contentCompareOverviewCount;
    }
    public get contentCompareOverviewCount() {
        return this['content_compare_overview_count'];
    }
    public withContentCompareDetails(contentCompareDetails: Array<ContentCompareResultDetails>): ContentCompareResult {
        this['content_compare_details'] = contentCompareDetails;
        return this;
    }
    public set contentCompareDetails(contentCompareDetails: Array<ContentCompareResultDetails> | undefined) {
        this['content_compare_details'] = contentCompareDetails;
    }
    public get contentCompareDetails() {
        return this['content_compare_details'];
    }
    public withContentCompareDiffs(contentCompareDiffs: Array<ContentCompareResultDiffs>): ContentCompareResult {
        this['content_compare_diffs'] = contentCompareDiffs;
        return this;
    }
    public set contentCompareDiffs(contentCompareDiffs: Array<ContentCompareResultDiffs> | undefined) {
        this['content_compare_diffs'] = contentCompareDiffs;
    }
    public get contentCompareDiffs() {
        return this['content_compare_diffs'];
    }
    public withErrorCode(errorCode: string): ContentCompareResult {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ContentCompareResult {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}