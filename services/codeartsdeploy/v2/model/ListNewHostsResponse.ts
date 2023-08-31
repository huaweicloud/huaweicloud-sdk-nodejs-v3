import { HostInfo } from './HostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNewHostsResponse extends SdkResponse {
    public total?: number;
    public status?: string;
    public result?: Array<HostInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListNewHostsResponse {
        this['total'] = total;
        return this;
    }
    public withStatus(status: string): ListNewHostsResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: Array<HostInfo>): ListNewHostsResponse {
        this['result'] = result;
        return this;
    }
}