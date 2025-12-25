import { RepositoryBasicDO } from './RepositoryBasicDO';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryResponse extends SdkResponse {
    public status?: ShowRepositoryResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepositoryBasicDO;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowRepositoryResponseStatusEnum | string): ShowRepositoryResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowRepositoryResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepositoryBasicDO): ShowRepositoryResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
