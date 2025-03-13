import { InvalidVpnUser } from './InvalidVpnUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateVpnUsersResponse extends SdkResponse {
    private 'invalid_users'?: Array<InvalidVpnUser>;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withInvalidUsers(invalidUsers: Array<InvalidVpnUser>): BatchCreateVpnUsersResponse {
        this['invalid_users'] = invalidUsers;
        return this;
    }
    public set invalidUsers(invalidUsers: Array<InvalidVpnUser>  | undefined) {
        this['invalid_users'] = invalidUsers;
    }
    public get invalidUsers(): Array<InvalidVpnUser> | undefined {
        return this['invalid_users'];
    }
    public withRequestId(requestId: string): BatchCreateVpnUsersResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): BatchCreateVpnUsersResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}