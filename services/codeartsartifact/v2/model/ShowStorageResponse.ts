import { StandarBaseResponseV5 } from './StandarBaseResponseV5';
import { StorageMap } from './StorageMap';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStorageResponse extends SdkResponse {
    public status?: ShowStorageResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: StorageMap;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowStorageResponseStatusEnum | string): ShowStorageResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowStorageResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: StorageMap): ShowStorageResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStorageResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
