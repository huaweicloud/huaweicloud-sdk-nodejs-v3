import { CreateVpnAccessPolicyResponseBodyAccessPolicy } from './CreateVpnAccessPolicyResponseBodyAccessPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpnAccessPolicyResponse extends SdkResponse {
    private 'access_policy'?: CreateVpnAccessPolicyResponseBodyAccessPolicy;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withAccessPolicy(accessPolicy: CreateVpnAccessPolicyResponseBodyAccessPolicy): CreateVpnAccessPolicyResponse {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: CreateVpnAccessPolicyResponseBodyAccessPolicy  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): CreateVpnAccessPolicyResponseBodyAccessPolicy | undefined {
        return this['access_policy'];
    }
    public withRequestId(requestId: string): CreateVpnAccessPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateVpnAccessPolicyResponse {
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