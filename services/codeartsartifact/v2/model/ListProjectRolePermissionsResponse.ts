import { ProjectRolePermissionDo } from './ProjectRolePermissionDo';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectRolePermissionsResponse extends SdkResponse {
    public status?: ListProjectRolePermissionsResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<ProjectRolePermissionDo>;
    public constructor() { 
        super();
    }
    public withStatus(status: ListProjectRolePermissionsResponseStatusEnum | string): ListProjectRolePermissionsResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListProjectRolePermissionsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<ProjectRolePermissionDo>): ListProjectRolePermissionsResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProjectRolePermissionsResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
