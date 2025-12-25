import { ListAllRepositoriesResult } from './ListAllRepositoriesResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllRepositoriesResponse extends SdkResponse {
    public status?: ListAllRepositoriesResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: ListAllRepositoriesResult;
    public constructor() { 
        super();
    }
    public withStatus(status: ListAllRepositoriesResponseStatusEnum | string): ListAllRepositoriesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListAllRepositoriesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: ListAllRepositoriesResult): ListAllRepositoriesResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAllRepositoriesResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
