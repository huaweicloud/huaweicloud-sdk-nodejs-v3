import { QueryRoleDetailResp } from './QueryRoleDetailResp';
import { QueryUserDetailResp } from './QueryUserDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    private 'is_global_password'?: string | undefined;
    public message?: string;
    private 'user_list'?: Array<QueryUserDetailResp> | undefined;
    private 'roles_list'?: Array<QueryRoleDetailResp> | undefined;
    private 'is_success'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ListUsersResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withIsGlobalPassword(isGlobalPassword: string): ListUsersResponse {
        this['is_global_password'] = isGlobalPassword;
        return this;
    }
    public set isGlobalPassword(isGlobalPassword: string | undefined) {
        this['is_global_password'] = isGlobalPassword;
    }
    public get isGlobalPassword() {
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
    public set userList(userList: Array<QueryUserDetailResp> | undefined) {
        this['user_list'] = userList;
    }
    public get userList() {
        return this['user_list'];
    }
    public withRolesList(rolesList: Array<QueryRoleDetailResp>): ListUsersResponse {
        this['roles_list'] = rolesList;
        return this;
    }
    public set rolesList(rolesList: Array<QueryRoleDetailResp> | undefined) {
        this['roles_list'] = rolesList;
    }
    public get rolesList() {
        return this['roles_list'];
    }
    public withIsSuccess(isSuccess: boolean): ListUsersResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess() {
        return this['is_success'];
    }
}