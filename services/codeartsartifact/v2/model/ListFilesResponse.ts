import { RepoFileDOV5Page } from './RepoFileDOV5Page';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFilesResponse extends SdkResponse {
    public status?: ListFilesResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: RepoFileDOV5Page;
    public constructor() { 
        super();
    }
    public withStatus(status: ListFilesResponseStatusEnum | string): ListFilesResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListFilesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RepoFileDOV5Page): ListFilesResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFilesResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
