import { ProjectPrivilege } from './ProjectPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnhancedPrivilegeResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'connection_id'?: string;
    public privileges?: Array<ProjectPrivilege>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowEnhancedPrivilegeResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowEnhancedPrivilegeResponse {
        this['message'] = message;
        return this;
    }
    public withConnectionId(connectionId: string): ShowEnhancedPrivilegeResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withPrivileges(privileges: Array<ProjectPrivilege>): ShowEnhancedPrivilegeResponse {
        this['privileges'] = privileges;
        return this;
    }
}