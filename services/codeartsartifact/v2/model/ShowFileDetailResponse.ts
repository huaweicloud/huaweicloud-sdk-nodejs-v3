import { RepoFileDOV5 } from './RepoFileDOV5';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFileDetailResponse extends SdkResponse {
    public status?: ShowFileDetailResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepoFileDOV5;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowFileDetailResponseStatusEnum | string): ShowFileDetailResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowFileDetailResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepoFileDOV5): ShowFileDetailResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFileDetailResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
