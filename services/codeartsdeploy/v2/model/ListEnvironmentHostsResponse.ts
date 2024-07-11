import { EnvironmentHostInfo } from './EnvironmentHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentHostsResponse extends SdkResponse {
    public status?: string;
    public total?: number;
    public result?: Array<EnvironmentHostInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListEnvironmentHostsResponse {
        this['status'] = status;
        return this;
    }
    public withTotal(total: number): ListEnvironmentHostsResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<EnvironmentHostInfo>): ListEnvironmentHostsResponse {
        this['result'] = result;
        return this;
    }
}