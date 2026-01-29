import { Privilege } from './Privilege';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepoRolesPrivilegeResponse extends SdkResponse {
    public status?: UpdateRepoRolesPrivilegeResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<Privilege>;
    public constructor() { 
        super();
    }
    public withStatus(status: UpdateRepoRolesPrivilegeResponseStatusEnum | string): UpdateRepoRolesPrivilegeResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): UpdateRepoRolesPrivilegeResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<Privilege>): UpdateRepoRolesPrivilegeResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRepoRolesPrivilegeResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
