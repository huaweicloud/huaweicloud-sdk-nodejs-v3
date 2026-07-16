import { InferDeploymentVersionItemResp } from './InferDeploymentVersionItemResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferDeploymentVersionsResponse extends SdkResponse {
    public data?: Array<InferDeploymentVersionItemResp>;
    public current?: number;
    public size?: number;
    public pages?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<InferDeploymentVersionItemResp>): ListInferDeploymentVersionsResponse {
        this['data'] = data;
        return this;
    }
    public withCurrent(current: number): ListInferDeploymentVersionsResponse {
        this['current'] = current;
        return this;
    }
    public withSize(size: number): ListInferDeploymentVersionsResponse {
        this['size'] = size;
        return this;
    }
    public withPages(pages: number): ListInferDeploymentVersionsResponse {
        this['pages'] = pages;
        return this;
    }
    public withTotal(total: number): ListInferDeploymentVersionsResponse {
        this['total'] = total;
        return this;
    }
}