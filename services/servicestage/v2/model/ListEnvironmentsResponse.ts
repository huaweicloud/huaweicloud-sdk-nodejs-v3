import { Environment } from './Environment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentsResponse extends SdkResponse {
    public count?: number;
    public environments?: Array<Environment>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListEnvironmentsResponse {
        this['count'] = count;
        return this;
    }
    public withEnvironments(environments: Array<Environment>): ListEnvironmentsResponse {
        this['environments'] = environments;
        return this;
    }
}