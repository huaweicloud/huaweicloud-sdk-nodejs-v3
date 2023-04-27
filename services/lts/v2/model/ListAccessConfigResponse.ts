import { AccessConfigInfo } from './AccessConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessConfigResponse extends SdkResponse {
    public result?: Array<AccessConfigInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AccessConfigInfo>): ListAccessConfigResponse {
        this['result'] = result;
        return this;
    }
    public withTotal(total: number): ListAccessConfigResponse {
        this['total'] = total;
        return this;
    }
}