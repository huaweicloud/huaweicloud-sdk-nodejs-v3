
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddOrUpdateTestsuiteInfoUsingResponse extends SdkResponse {
    public error?: Error;
    private 'et_trace_id'?: string;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): AddOrUpdateTestsuiteInfoUsingResponse {
        this['error'] = error;
        return this;
    }
    public withEtTraceId(etTraceId: string): AddOrUpdateTestsuiteInfoUsingResponse {
        this['et_trace_id'] = etTraceId;
        return this;
    }
    public set etTraceId(etTraceId: string  | undefined) {
        this['et_trace_id'] = etTraceId;
    }
    public get etTraceId(): string | undefined {
        return this['et_trace_id'];
    }
    public withResult(result: object): AddOrUpdateTestsuiteInfoUsingResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): AddOrUpdateTestsuiteInfoUsingResponse {
        this['status'] = status;
        return this;
    }
}