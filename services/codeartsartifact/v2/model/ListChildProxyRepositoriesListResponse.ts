import { RepositoryDOV5 } from './RepositoryDOV5';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListChildProxyRepositoriesListResponse extends SdkResponse {
    public status?: ListChildProxyRepositoriesListResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<RepositoryDOV5>;
    public constructor() { 
        super();
    }
    public withStatus(status: ListChildProxyRepositoriesListResponseStatusEnum | string): ListChildProxyRepositoriesListResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListChildProxyRepositoriesListResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<RepositoryDOV5>): ListChildProxyRepositoriesListResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListChildProxyRepositoriesListResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
