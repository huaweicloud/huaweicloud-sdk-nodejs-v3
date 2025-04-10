import { PrivilegesResponseResult } from './PrivilegesResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserPrivilegesResponse extends SdkResponse {
    public status?: string;
    public traceId?: string;
    public result?: PrivilegesResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowUserPrivilegesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowUserPrivilegesResponse {
        this['traceId'] = traceId;
        return this;
    }
    public withResult(result: PrivilegesResponseResult): ShowUserPrivilegesResponse {
        this['result'] = result;
        return this;
    }
}