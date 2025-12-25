import { StandarBaseResponseV5 } from './StandarBaseResponseV5';
import { TrashcanResultData } from './TrashcanResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteTrashesResponse extends SdkResponse {
    public status?: BatchDeleteTrashesResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: TrashcanResultData;
    public constructor() { 
        super();
    }
    public withStatus(status: BatchDeleteTrashesResponseStatusEnum | string): BatchDeleteTrashesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): BatchDeleteTrashesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: TrashcanResultData): BatchDeleteTrashesResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchDeleteTrashesResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
