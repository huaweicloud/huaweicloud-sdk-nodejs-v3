import { DatabaseUserPrivilege } from './DatabaseUserPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseUsersResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'database_name'?: string;
    public privileges?: Array<DatabaseUserPrivilege>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ListDatabaseUsersResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ListDatabaseUsersResponse {
        this['message'] = message;
        return this;
    }
    public withDatabaseName(databaseName: string): ListDatabaseUsersResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withPrivileges(privileges: Array<DatabaseUserPrivilege>): ListDatabaseUsersResponse {
        this['privileges'] = privileges;
        return this;
    }
}