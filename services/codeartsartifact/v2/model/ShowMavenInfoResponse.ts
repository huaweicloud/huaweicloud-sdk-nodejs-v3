import { RepositoryBuildVO } from './RepositoryBuildVO';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMavenInfoResponse extends SdkResponse {
    public status?: ShowMavenInfoResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<RepositoryBuildVO>;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowMavenInfoResponseStatusEnum | string): ShowMavenInfoResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowMavenInfoResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<RepositoryBuildVO>): ShowMavenInfoResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMavenInfoResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
