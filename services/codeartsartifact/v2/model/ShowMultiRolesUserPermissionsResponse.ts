import { ProjectRolePermissionDo } from './ProjectRolePermissionDo';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMultiRolesUserPermissionsResponse extends SdkResponse {
    public status?: ShowMultiRolesUserPermissionsResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: ProjectRolePermissionDo;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowMultiRolesUserPermissionsResponseStatusEnum | string): ShowMultiRolesUserPermissionsResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowMultiRolesUserPermissionsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: ProjectRolePermissionDo): ShowMultiRolesUserPermissionsResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowMultiRolesUserPermissionsResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
