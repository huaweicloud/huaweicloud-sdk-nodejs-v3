import { RepositoryDO } from './RepositoryDO';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryInfoResponse extends SdkResponse {
    public status?: ShowRepositoryInfoResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepositoryDO;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowRepositoryInfoResponseStatusEnum | string): ShowRepositoryInfoResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowRepositoryInfoResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepositoryDO): ShowRepositoryInfoResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryInfoResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
