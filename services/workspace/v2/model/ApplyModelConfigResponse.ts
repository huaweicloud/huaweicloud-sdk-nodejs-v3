import { ModelConfigFailedItem } from './ModelConfigFailedItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ApplyModelConfigResponse extends SdkResponse {
    public total?: number;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<ModelConfigFailedItem>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ApplyModelConfigResponse {
        this['total'] = total;
        return this;
    }
    public withSuccessCount(successCount: number): ApplyModelConfigResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): ApplyModelConfigResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<ModelConfigFailedItem>): ApplyModelConfigResponse {
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