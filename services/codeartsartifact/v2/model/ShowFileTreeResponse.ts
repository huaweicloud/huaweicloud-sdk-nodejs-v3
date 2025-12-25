import { ShowFileTreeResult } from './ShowFileTreeResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFileTreeResponse extends SdkResponse {
    public status?: ShowFileTreeResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: ShowFileTreeResult;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowFileTreeResponseStatusEnum | string): ShowFileTreeResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowFileTreeResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: ShowFileTreeResult): ShowFileTreeResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFileTreeResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
