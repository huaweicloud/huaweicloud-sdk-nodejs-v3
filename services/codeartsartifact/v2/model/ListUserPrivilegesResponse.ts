import { PrivilegesResponseV5Result } from './PrivilegesResponseV5Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserPrivilegesResponse extends SdkResponse {
    public status?: string;
    private 'trace_id'?: string;
    public result?: PrivilegesResponseV5Result;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListUserPrivilegesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListUserPrivilegesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: PrivilegesResponseV5Result): ListUserPrivilegesResponse {
        this['result'] = result;
        return this;
    }
}