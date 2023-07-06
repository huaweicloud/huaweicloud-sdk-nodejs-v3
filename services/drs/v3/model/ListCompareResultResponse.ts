import { CompareTaskListResult } from './CompareTaskListResult';
import { ContentCompareResult } from './ContentCompareResult';
import { LineCompareResult } from './LineCompareResult';
import { ObjectCompareResult } from './ObjectCompareResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCompareResultResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'object_level_compare_results'?: ObjectCompareResult | undefined;
    private 'line_compare_results'?: LineCompareResult | undefined;
    private 'content_compare_results'?: ContentCompareResult | undefined;
    private 'compare_task_list_results'?: CompareTaskListResult | undefined;
    private 'error_code'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ListCompareResultResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withObjectLevelCompareResults(objectLevelCompareResults: ObjectCompareResult): ListCompareResultResponse {
        this['object_level_compare_results'] = objectLevelCompareResults;
        return this;
    }
    public set objectLevelCompareResults(objectLevelCompareResults: ObjectCompareResult | undefined) {
        this['object_level_compare_results'] = objectLevelCompareResults;
    }
    public get objectLevelCompareResults() {
        return this['object_level_compare_results'];
    }
    public withLineCompareResults(lineCompareResults: LineCompareResult): ListCompareResultResponse {
        this['line_compare_results'] = lineCompareResults;
        return this;
    }
    public set lineCompareResults(lineCompareResults: LineCompareResult | undefined) {
        this['line_compare_results'] = lineCompareResults;
    }
    public get lineCompareResults() {
        return this['line_compare_results'];
    }
    public withContentCompareResults(contentCompareResults: ContentCompareResult): ListCompareResultResponse {
        this['content_compare_results'] = contentCompareResults;
        return this;
    }
    public set contentCompareResults(contentCompareResults: ContentCompareResult | undefined) {
        this['content_compare_results'] = contentCompareResults;
    }
    public get contentCompareResults() {
        return this['content_compare_results'];
    }
    public withCompareTaskListResults(compareTaskListResults: CompareTaskListResult): ListCompareResultResponse {
        this['compare_task_list_results'] = compareTaskListResults;
        return this;
    }
    public set compareTaskListResults(compareTaskListResults: CompareTaskListResult | undefined) {
        this['compare_task_list_results'] = compareTaskListResults;
    }
    public get compareTaskListResults() {
        return this['compare_task_list_results'];
    }
    public withErrorCode(errorCode: string): ListCompareResultResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ListCompareResultResponse {
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