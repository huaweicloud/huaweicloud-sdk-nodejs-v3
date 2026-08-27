import { ModelConfigFailedItem } from './ModelConfigFailedItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveModelConfigResponse extends SdkResponse {
    private 'deleted_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<ModelConfigFailedItem>;
    public constructor() { 
        super();
    }
    public withDeletedCount(deletedCount: number): RemoveModelConfigResponse {
        this['deleted_count'] = deletedCount;
        return this;
    }
    public set deletedCount(deletedCount: number  | undefined) {
        this['deleted_count'] = deletedCount;
    }
    public get deletedCount(): number | undefined {
        return this['deleted_count'];
    }
    public withFailedCount(failedCount: number): RemoveModelConfigResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<ModelConfigFailedItem>): RemoveModelConfigResponse {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: Array<ModelConfigFailedItem>  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): Array<ModelConfigFailedItem> | undefined {
        return this['failed_details'];
    }
}