import { ShowProjectListResult } from './ShowProjectListResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectListResponse extends SdkResponse {
    public status?: ShowProjectListResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<ShowProjectListResult>;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowProjectListResponseStatusEnum | string): ShowProjectListResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowProjectListResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<ShowProjectListResult>): ShowProjectListResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowProjectListResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
