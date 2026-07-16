import { InferDeploymentItemResponseData } from './InferDeploymentItemResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferDeploymentsResponse extends SdkResponse {
    public data?: Array<InferDeploymentItemResponseData>;
    public current?: number;
    public size?: number;
    public pages?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<InferDeploymentItemResponseData>): ListInferDeploymentsResponse {
        this['data'] = data;
        return this;
    }
    public withCurrent(current: number): ListInferDeploymentsResponse {
        this['current'] = current;
        return this;
    }
    public withSize(size: number): ListInferDeploymentsResponse {
        this['size'] = size;
        return this;
    }
    public withPages(pages: number): ListInferDeploymentsResponse {
        this['pages'] = pages;
        return this;
    }
    public withTotal(total: number): ListInferDeploymentsResponse {
        this['total'] = total;
        return this;
    }
}