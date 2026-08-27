import { ModelBatchDeleteRespFailedDetails } from './ModelBatchDeleteRespFailedDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteModelResponse extends SdkResponse {
    private 'deleted_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<ModelBatchDeleteRespFailedDetails>;
    public constructor() { 
        super();
    }
    public withDeletedCount(deletedCount: number): BatchDeleteModelResponse {
        this['deleted_count'] = deletedCount;
        return this;
    }
    public set deletedCount(deletedCount: number  | undefined) {
        this['deleted_count'] = deletedCount;
    }
    public get deletedCount(): number | undefined {
        return this['deleted_count'];
    }
    public withFailedCount(failedCount: number): BatchDeleteModelResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<ModelBatchDeleteRespFailedDetails>): BatchDeleteModelResponse {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: Array<ModelBatchDeleteRespFailedDetails>  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): Array<ModelBatchDeleteRespFailedDetails> | undefined {
        return this['failed_details'];
    }
}