import { CreateVpnUserResponseBodyUser } from './CreateVpnUserResponseBodyUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpnUserResponse extends SdkResponse {
    public user?: CreateVpnUserResponseBodyUser;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withUser(user: CreateVpnUserResponseBodyUser): CreateVpnUserResponse {
        this['user'] = user;
        return this;
    }
    public withRequestId(requestId: string): CreateVpnUserResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateVpnUserResponse {
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