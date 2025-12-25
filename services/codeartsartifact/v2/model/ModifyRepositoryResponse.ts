import { MavenTabRepo } from './MavenTabRepo';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyRepositoryResponse extends SdkResponse {
    public status?: ModifyRepositoryResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: MavenTabRepo;
    public constructor() { 
        super();
    }
    public withStatus(status: ModifyRepositoryResponseStatusEnum | string): ModifyRepositoryResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ModifyRepositoryResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: MavenTabRepo): ModifyRepositoryResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyRepositoryResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
