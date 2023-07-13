import { GetHostGroupInfo } from './GetHostGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostGroupResponse extends SdkResponse {
    public result?: Array<GetHostGroupInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<GetHostGroupInfo>): ListHostGroupResponse {
        this['result'] = result;
        return this;
    }
    public withTotal(total: number): ListHostGroupResponse {
        this['total'] = total;
        return this;
    }
}