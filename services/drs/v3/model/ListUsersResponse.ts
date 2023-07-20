import { QueryRoleDetailResp } from './QueryRoleDetailResp';
import { QueryUserDetailResp } from './QueryUserDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'is_global_password'?: string;
    public message?: string;
    private 'user_list'?: Array<QueryUserDetailResp>;
    private 'roles_list'?: Array<QueryRoleDetailResp>;
    private 'is_success'?: boolean;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ListUsersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withIsGlobalPassword(isGlobalPassword: string): ListUsersResponse {
        this['is_global_password'] = isGlobalPassword;
        return this;
    }
    public set isGlobalPassword(isGlobalPassword: string  | undefined) {
        this['is_global_password'] = isGlobalPassword;
    }
    public get isGlobalPassword(): string | undefined {
        return this['is_global_password'];
    }
    public withMessage(message: string): ListUsersResponse {
        this['message'] = message;
        return this;
    }
    public withUserList(userList: Array<QueryUserDetailResp>): ListUsersResponse {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<QueryUserDetailResp>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<QueryUserDetailResp> | undefined {
        return this['user_list'];
    }
    public withRolesList(rolesList: Array<QueryRoleDetailResp>): ListUsersResponse {
        this['roles_list'] = rolesList;
        return this;
    }
    public set rolesList(rolesList: Array<QueryRoleDetailResp>  | undefined) {
        this['roles_list'] = rolesList;
    }
    public get rolesList(): Array<QueryRoleDetailResp> | undefined {
        return this['roles_list'];
    }
    public withIsSuccess(isSuccess: boolean): ListUsersResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
}