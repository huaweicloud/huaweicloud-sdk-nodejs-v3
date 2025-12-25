import { StandarBaseResponseV5 } from './StandarBaseResponseV5';
import { StorageStatisticDO } from './StorageStatisticDO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListArtifactoryStorageStatisticResponse extends SdkResponse {
    public status?: ListArtifactoryStorageStatisticResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<StorageStatisticDO>;
    public constructor() { 
        super();
    }
    public withStatus(status: ListArtifactoryStorageStatisticResponseStatusEnum | string): ListArtifactoryStorageStatisticResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListArtifactoryStorageStatisticResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<StorageStatisticDO>): ListArtifactoryStorageStatisticResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListArtifactoryStorageStatisticResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
