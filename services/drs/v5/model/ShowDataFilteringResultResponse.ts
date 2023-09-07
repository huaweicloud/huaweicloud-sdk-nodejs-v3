import { DbObjectFilteringResult } from './DbObjectFilteringResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataFilteringResultResponse extends SdkResponse {
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'db_object_filtering_result'?: Array<DbObjectFilteringResult>;
    public constructor() { 
        super();
    }
    public withSuccessCount(successCount: number): ShowDataFilteringResultResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): ShowDataFilteringResultResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withDbObjectFilteringResult(dbObjectFilteringResult: Array<DbObjectFilteringResult>): ShowDataFilteringResultResponse {
        this['db_object_filtering_result'] = dbObjectFilteringResult;
        return this;
    }
    public set dbObjectFilteringResult(dbObjectFilteringResult: Array<DbObjectFilteringResult>  | undefined) {
        this['db_object_filtering_result'] = dbObjectFilteringResult;
    }
    public get dbObjectFilteringResult(): Array<DbObjectFilteringResult> | undefined {
        return this['db_object_filtering_result'];
    }
}