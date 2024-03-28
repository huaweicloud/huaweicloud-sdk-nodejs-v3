import { EnhancedConnectionPrivilege } from './EnhancedConnectionPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnhancedConnectionPrivilegeResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'connection_id'?: string;
    public privileges?: Array<EnhancedConnectionPrivilege>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowEnhancedConnectionPrivilegeResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowEnhancedConnectionPrivilegeResponse {
        this['message'] = message;
        return this;
    }
    public withConnectionId(connectionId: string): ShowEnhancedConnectionPrivilegeResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withPrivileges(privileges: Array<EnhancedConnectionPrivilege>): ShowEnhancedConnectionPrivilegeResponse {
        this['privileges'] = privileges;
        return this;
    }
}