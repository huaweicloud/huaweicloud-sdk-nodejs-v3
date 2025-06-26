import { Policy } from './Policy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AuthorizeObsResponse extends SdkResponse {
    private 'server_end_point'?: string;
    private 'bucket_name'?: string;
    public directory?: string;
    public ak?: string;
    public sk?: string;
    private 'expires_at'?: string;
    public policy?: Policy;
    private 'security_token'?: string;
    public constructor() { 
        super();
    }
    public withServerEndPoint(serverEndPoint: string): AuthorizeObsResponse {
        this['server_end_point'] = serverEndPoint;
        return this;
    }
    public set serverEndPoint(serverEndPoint: string  | undefined) {
        this['server_end_point'] = serverEndPoint;
    }
    public get serverEndPoint(): string | undefined {
        return this['server_end_point'];
    }
    public withBucketName(bucketName: string): AuthorizeObsResponse {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withDirectory(directory: string): AuthorizeObsResponse {
        this['directory'] = directory;
        return this;
    }
    public withAk(ak: string): AuthorizeObsResponse {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): AuthorizeObsResponse {
        this['sk'] = sk;
        return this;
    }
    public withExpiresAt(expiresAt: string): AuthorizeObsResponse {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withPolicy(policy: Policy): AuthorizeObsResponse {
        this['policy'] = policy;
        return this;
    }
    public withSecurityToken(securityToken: string): AuthorizeObsResponse {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string  | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken(): string | undefined {
        return this['security_token'];
    }
}