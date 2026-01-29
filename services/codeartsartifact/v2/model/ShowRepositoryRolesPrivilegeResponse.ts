import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryRolesPrivilegeResponse extends SdkResponse {
    public status?: ShowRepositoryRolesPrivilegeResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: object;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowRepositoryRolesPrivilegeResponseStatusEnum | string): ShowRepositoryRolesPrivilegeResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowRepositoryRolesPrivilegeResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: object): ShowRepositoryRolesPrivilegeResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryRolesPrivilegeResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
