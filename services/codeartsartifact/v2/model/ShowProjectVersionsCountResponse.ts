import { ResultCount } from './ResultCount';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectVersionsCountResponse extends SdkResponse {
    public status?: ShowProjectVersionsCountResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: ResultCount;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowProjectVersionsCountResponseStatusEnum | string): ShowProjectVersionsCountResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowProjectVersionsCountResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: ResultCount): ShowProjectVersionsCountResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowProjectVersionsCountResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
