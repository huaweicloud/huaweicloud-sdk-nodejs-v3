import { TableUserPermissionsRespPrivilege } from './TableUserPermissionsRespPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTablePrivilegesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'user_name'?: string;
    public privileges?: Array<TableUserPermissionsRespPrivilege>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListTablePrivilegesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListTablePrivilegesResponse {
        this['message'] = message;
        return this;
    }
    public withUserName(userName: string): ListTablePrivilegesResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPrivileges(privileges: Array<TableUserPermissionsRespPrivilege>): ListTablePrivilegesResponse {
        this['privileges'] = privileges;
        return this;
    }
}