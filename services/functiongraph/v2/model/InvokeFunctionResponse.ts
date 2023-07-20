
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class InvokeFunctionResponse extends SdkResponse {
    private 'request_id'?: string;
    public result?: string;
    public log?: string;
    public status?: number;
    private 'X-Cff-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): InvokeFunctionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withResult(result: string): InvokeFunctionResponse {
        this['result'] = result;
        return this;
    }
    public withLog(log: string): InvokeFunctionResponse {
        this['log'] = log;
        return this;
    }
    public withStatus(status: number): InvokeFunctionResponse {
        this['status'] = status;
        return this;
    }
    public withXCffRequestId(xCffRequestId: string): InvokeFunctionResponse {
        this['X-Cff-Request-Id'] = xCffRequestId;
        return this;
    }
    public set xCffRequestId(xCffRequestId: string  | undefined) {
        this['X-Cff-Request-Id'] = xCffRequestId;
    }
    public get xCffRequestId(): string | undefined {
        return this['X-Cff-Request-Id'];
    }
}