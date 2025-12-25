import { LatestVersionFilesCount } from './LatestVersionFilesCount';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLatestVersionFilesCountResponse extends SdkResponse {
    public status?: ShowLatestVersionFilesCountResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: LatestVersionFilesCount;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowLatestVersionFilesCountResponseStatusEnum | string): ShowLatestVersionFilesCountResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowLatestVersionFilesCountResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: LatestVersionFilesCount): ShowLatestVersionFilesCountResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLatestVersionFilesCountResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
