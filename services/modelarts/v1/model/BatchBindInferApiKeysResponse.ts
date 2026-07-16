import { ApiKeyFailureResponse } from './ApiKeyFailureResponse';
import { ApiKeyResponseV2 } from './ApiKeyResponseV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchBindInferApiKeysResponse extends SdkResponse {
    public total?: number;
    private 'success_count'?: number;
    private 'success_items'?: Array<ApiKeyResponseV2>;
    private 'failure_count'?: number;
    private 'failure_items'?: Array<ApiKeyFailureResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): BatchBindInferApiKeysResponse {
        this['total'] = total;
        return this;
    }
    public withSuccessCount(successCount: number): BatchBindInferApiKeysResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withSuccessItems(successItems: Array<ApiKeyResponseV2>): BatchBindInferApiKeysResponse {
        this['success_items'] = successItems;
        return this;
    }
    public set successItems(successItems: Array<ApiKeyResponseV2>  | undefined) {
        this['success_items'] = successItems;
    }
    public get successItems(): Array<ApiKeyResponseV2> | undefined {
        return this['success_items'];
    }
    public withFailureCount(failureCount: number): BatchBindInferApiKeysResponse {
        this['failure_count'] = failureCount;
        return this;
    }
    public set failureCount(failureCount: number  | undefined) {
        this['failure_count'] = failureCount;
    }
    public get failureCount(): number | undefined {
        return this['failure_count'];
    }
    public withFailureItems(failureItems: Array<ApiKeyFailureResponse>): BatchBindInferApiKeysResponse {
        this['failure_items'] = failureItems;
        return this;
    }
    public set failureItems(failureItems: Array<ApiKeyFailureResponse>  | undefined) {
        this['failure_items'] = failureItems;
    }
    public get failureItems(): Array<ApiKeyFailureResponse> | undefined {
        return this['failure_items'];
    }
}