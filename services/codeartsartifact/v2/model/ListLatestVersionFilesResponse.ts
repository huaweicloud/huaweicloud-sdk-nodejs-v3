import { StandarBaseResponseV5 } from './StandarBaseResponseV5';
import { VersionViewVoV5 } from './VersionViewVoV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLatestVersionFilesResponse extends SdkResponse {
    public status?: ListLatestVersionFilesResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<VersionViewVoV5>;
    public constructor() { 
        super();
    }
    public withStatus(status: ListLatestVersionFilesResponseStatusEnum | string): ListLatestVersionFilesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListLatestVersionFilesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<VersionViewVoV5>): ListLatestVersionFilesResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLatestVersionFilesResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
