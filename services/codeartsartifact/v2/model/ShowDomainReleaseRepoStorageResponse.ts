import { ReleaseStorageVOV5 } from './ReleaseStorageVOV5';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainReleaseRepoStorageResponse extends SdkResponse {
    public status?: ShowDomainReleaseRepoStorageResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: ReleaseStorageVOV5;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowDomainReleaseRepoStorageResponseStatusEnum | string): ShowDomainReleaseRepoStorageResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowDomainReleaseRepoStorageResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: ReleaseStorageVOV5): ShowDomainReleaseRepoStorageResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainReleaseRepoStorageResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
