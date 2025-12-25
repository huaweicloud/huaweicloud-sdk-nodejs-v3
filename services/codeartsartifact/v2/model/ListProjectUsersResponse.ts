import { RepoUserPrivilegeResult } from './RepoUserPrivilegeResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectUsersResponse extends SdkResponse {
    public status?: ListProjectUsersResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepoUserPrivilegeResult;
    public constructor() { 
        super();
    }
    public withStatus(status: ListProjectUsersResponseStatusEnum | string): ListProjectUsersResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListProjectUsersResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepoUserPrivilegeResult): ListProjectUsersResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectUsersResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
