import { RepoFileDOV5 } from './RepoFileDOV5';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFileDetailByFullNameResponse extends SdkResponse {
    public status?: ShowFileDetailByFullNameResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepoFileDOV5;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowFileDetailByFullNameResponseStatusEnum | string): ShowFileDetailByFullNameResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowFileDetailByFullNameResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepoFileDOV5): ShowFileDetailByFullNameResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowFileDetailByFullNameResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
