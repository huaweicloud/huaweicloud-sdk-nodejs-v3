import { BatchOperationFailedItem } from './BatchOperationFailedItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteProvidersResponse extends SdkResponse {
    private 'deleted_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<BatchOperationFailedItem>;
    public constructor() { 
        super();
    }
    public withDeletedCount(deletedCount: number): BatchDeleteProvidersResponse {
        this['deleted_count'] = deletedCount;
        return this;
    }
    public set deletedCount(deletedCount: number  | undefined) {
        this['deleted_count'] = deletedCount;
    }
    public get deletedCount(): number | undefined {
        return this['deleted_count'];
    }
    public withFailedCount(failedCount: number): BatchDeleteProvidersResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<BatchOperationFailedItem>): BatchDeleteProvidersResponse {
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