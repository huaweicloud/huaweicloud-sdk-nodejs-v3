
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetUserPasswordResponse extends SdkResponse {
    public status?: string;
    private 'trace_id'?: string;
    public result?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ResetUserPasswordResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ResetUserPasswordResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: object): ResetUserPasswordResponse {
        this['result'] = result;
        return this;
    }
}