import { GetHostGroupInfo } from './GetHostGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteHostGroupResponse extends SdkResponse {
    public result?: Array<GetHostGroupInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<GetHostGroupInfo>): DeleteHostGroupResponse {
        this['result'] = result;
        return this;
    }
    public withTotal(total: number): DeleteHostGroupResponse {
        this['total'] = total;
        return this;
    }
}