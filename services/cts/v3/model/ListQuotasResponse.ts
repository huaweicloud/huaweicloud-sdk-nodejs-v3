import { CtsQuota } from './CtsQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public resources?: Array<CtsQuota>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<CtsQuota>): ListQuotasResponse {
        this['resources'] = resources;
        return this;
    }
}