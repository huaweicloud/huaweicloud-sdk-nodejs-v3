import { RepositoryDOV5 } from './RepositoryDOV5';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMavenListResponse extends SdkResponse {
    public status?: ListMavenListResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<RepositoryDOV5>;
    public constructor() { 
        super();
    }
    public withStatus(status: ListMavenListResponseStatusEnum | string): ListMavenListResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListMavenListResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<RepositoryDOV5>): ListMavenListResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMavenListResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
