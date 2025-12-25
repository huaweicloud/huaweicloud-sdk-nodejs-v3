import { DevcloudUserDOV5Page } from './DevcloudUserDOV5Page';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMavenUserResponse extends SdkResponse {
    public status?: ListMavenUserResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: DevcloudUserDOV5Page;
    public constructor() { 
        super();
    }
    public withStatus(status: ListMavenUserResponseStatusEnum | string): ListMavenUserResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListMavenUserResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: DevcloudUserDOV5Page): ListMavenUserResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMavenUserResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
