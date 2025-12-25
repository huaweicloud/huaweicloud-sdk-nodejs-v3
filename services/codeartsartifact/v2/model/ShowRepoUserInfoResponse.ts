import { RepositoryUserDO } from './RepositoryUserDO';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepoUserInfoResponse extends SdkResponse {
    public status?: ShowRepoUserInfoResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepositoryUserDO;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowRepoUserInfoResponseStatusEnum | string): ShowRepoUserInfoResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowRepoUserInfoResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepositoryUserDO): ShowRepoUserInfoResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepoUserInfoResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
