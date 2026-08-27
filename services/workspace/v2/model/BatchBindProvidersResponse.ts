import { BatchOperationFailedItem } from './BatchOperationFailedItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchBindProvidersResponse extends SdkResponse {
    public total?: number;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<BatchOperationFailedItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): BatchBindProvidersResponse {
        this['total'] = total;
        return this;
    }
    public withSuccessCount(successCount: number): BatchBindProvidersResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): BatchBindProvidersResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<BatchOperationFailedItem>): BatchBindProvidersResponse {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: Array<BatchOperationFailedItem>  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): Array<BatchOperationFailedItem> | undefined {
        return this['failed_details'];
    }
}