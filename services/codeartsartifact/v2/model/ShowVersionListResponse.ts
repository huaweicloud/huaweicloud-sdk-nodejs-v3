import { VersionListViewV5 } from './VersionListViewV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionListResponse extends SdkResponse {
    public status?: ShowVersionListResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<VersionListViewV5>;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowVersionListResponseStatusEnum | string): ShowVersionListResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowVersionListResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<VersionListViewV5>): ShowVersionListResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowVersionListResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
