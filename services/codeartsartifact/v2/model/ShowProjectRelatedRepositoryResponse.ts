import { PrivilegeProjectInfoV5 } from './PrivilegeProjectInfoV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectRelatedRepositoryResponse extends SdkResponse {
    public status?: ShowProjectRelatedRepositoryResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: PrivilegeProjectInfoV5;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowProjectRelatedRepositoryResponseStatusEnum | string): ShowProjectRelatedRepositoryResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowProjectRelatedRepositoryResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: PrivilegeProjectInfoV5): ShowProjectRelatedRepositoryResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowProjectRelatedRepositoryResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
