import { ModelItemResp } from './ModelItemResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateModelResponse extends SdkResponse {
    private 'created_models'?: Array<ModelItemResp>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCreatedModels(createdModels: Array<ModelItemResp>): BatchCreateModelResponse {
        this['created_models'] = createdModels;
        return this;
    }
    public set createdModels(createdModels: Array<ModelItemResp>  | undefined) {
        this['created_models'] = createdModels;
    }
    public get createdModels(): Array<ModelItemResp> | undefined {
        return this['created_models'];
    }
    public withTotal(total: number): BatchCreateModelResponse {
        this['total'] = total;
        return this;
    }
}