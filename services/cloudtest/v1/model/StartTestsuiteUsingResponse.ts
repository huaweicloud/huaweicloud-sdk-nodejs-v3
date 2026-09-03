import { TaskBasicInfoVo } from './TaskBasicInfoVo';
import { Warn } from './Warn';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartTestsuiteUsingResponse extends SdkResponse {
    public error?: Error;
    private 'et_trace_id'?: string;
    public result?: TaskBasicInfoVo;
    public status?: string;
    public warn?: Warn;
    public constructor() { 
        super();
    }
    public withError(error: Error): StartTestsuiteUsingResponse {
        this['error'] = error;
        return this;
    }
    public withEtTraceId(etTraceId: string): StartTestsuiteUsingResponse {
        this['et_trace_id'] = etTraceId;
        return this;
    }
    public set etTraceId(etTraceId: string  | undefined) {
        this['et_trace_id'] = etTraceId;
    }
    public get etTraceId(): string | undefined {
        return this['et_trace_id'];
    }
    public withResult(result: TaskBasicInfoVo): StartTestsuiteUsingResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): StartTestsuiteUsingResponse {
        this['status'] = status;
        return this;
    }
    public withWarn(warn: Warn): StartTestsuiteUsingResponse {
        this['warn'] = warn;
        return this;
    }
}