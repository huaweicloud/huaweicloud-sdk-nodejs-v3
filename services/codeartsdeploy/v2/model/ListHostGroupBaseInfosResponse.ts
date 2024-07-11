import { EnvironmentBaseInfo } from './EnvironmentBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostGroupBaseInfosResponse extends SdkResponse {
    public status?: string;
    public total?: number;
    public result?: Array<EnvironmentBaseInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListHostGroupBaseInfosResponse {
        this['status'] = status;
        return this;
    }
    public withTotal(total: number): ListHostGroupBaseInfosResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<EnvironmentBaseInfo>): ListHostGroupBaseInfosResponse {
        this['result'] = result;
        return this;
    }
}