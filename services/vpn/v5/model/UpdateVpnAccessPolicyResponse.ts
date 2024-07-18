import { VpnAccessPolicy } from './VpnAccessPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVpnAccessPolicyResponse extends SdkResponse {
    private 'access_policy'?: VpnAccessPolicy;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withAccessPolicy(accessPolicy: VpnAccessPolicy): UpdateVpnAccessPolicyResponse {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: VpnAccessPolicy  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): VpnAccessPolicy | undefined {
        return this['access_policy'];
    }
    public withRequestId(requestId: string): UpdateVpnAccessPolicyResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): UpdateVpnAccessPolicyResponse {
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