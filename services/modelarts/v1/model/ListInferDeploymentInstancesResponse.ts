import { ServiceInstanceResponse } from './ServiceInstanceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferDeploymentInstancesResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServiceInstanceResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListInferDeploymentInstancesResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServiceInstanceResponse>): ListInferDeploymentInstancesResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListInferDeploymentInstancesResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferDeploymentInstancesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferDeploymentInstancesResponse {
        this['total'] = total;
        return this;
    }
}