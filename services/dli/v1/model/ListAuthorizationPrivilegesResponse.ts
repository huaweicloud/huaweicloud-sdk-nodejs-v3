import { ShowDatabaseUsersPrivilege } from './ShowDatabaseUsersPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthorizationPrivilegesResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'object_name'?: string;
    private 'object_type'?: string;
    public count?: number;
    public privileges?: Array<ShowDatabaseUsersPrivilege>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListAuthorizationPrivilegesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListAuthorizationPrivilegesResponse {
        this['message'] = message;
        return this;
    }
    public withObjectName(objectName: string): ListAuthorizationPrivilegesResponse {
        this['object_name'] = objectName;
        return this;
    }
    public set objectName(objectName: string  | undefined) {
        this['object_name'] = objectName;
    }
    public get objectName(): string | undefined {
        return this['object_name'];
    }
    public withObjectType(objectType: string): ListAuthorizationPrivilegesResponse {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withCount(count: number): ListAuthorizationPrivilegesResponse {
        this['count'] = count;
        return this;
    }
    public withPrivileges(privileges: Array<ShowDatabaseUsersPrivilege>): ListAuthorizationPrivilegesResponse {
        this['privileges'] = privileges;
        return this;
    }
}