import { AccessConfigInfo } from './AccessConfigInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAccessConfigResponse extends SdkResponse {
    public result?: Array<AccessConfigInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResult(result: Array<AccessConfigInfo>): DeleteAccessConfigResponse {
        this['result'] = result;
        return this;
    }
    public withTotal(total: number): DeleteAccessConfigResponse {
        this['total'] = total;
        return this;
    }
}