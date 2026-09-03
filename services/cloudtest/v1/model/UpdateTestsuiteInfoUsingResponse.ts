
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateTestsuiteInfoUsingResponse extends SdkResponse {
    public error?: Error;
    private 'et_trace_id'?: string;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): UpdateTestsuiteInfoUsingResponse {
        this['error'] = error;
        return this;
    }
    public withEtTraceId(etTraceId: string): UpdateTestsuiteInfoUsingResponse {
        this['et_trace_id'] = etTraceId;
        return this;
    }
    public set etTraceId(etTraceId: string  | undefined) {
        this['et_trace_id'] = etTraceId;
    }
    public get etTraceId(): string | undefined {
        return this['et_trace_id'];
    }
    public withResult(result: object): UpdateTestsuiteInfoUsingResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateTestsuiteInfoUsingResponse {
        this['status'] = status;
        return this;
    }
}