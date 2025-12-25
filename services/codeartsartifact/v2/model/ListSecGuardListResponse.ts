import { SecGuardTaskCount } from './SecGuardTaskCount';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecGuardListResponse extends SdkResponse {
    public status?: ListSecGuardListResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: SecGuardTaskCount;
    public constructor() { 
        super();
    }
    public withStatus(status: ListSecGuardListResponseStatusEnum | string): ListSecGuardListResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListSecGuardListResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: SecGuardTaskCount): ListSecGuardListResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSecGuardListResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
