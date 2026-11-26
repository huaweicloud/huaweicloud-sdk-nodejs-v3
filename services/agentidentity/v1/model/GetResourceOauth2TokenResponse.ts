
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetResourceOauth2TokenResponse extends SdkResponse {
    private 'access_token'?: string;
    private 'authorization_url'?: string;
    private 'session_status'?: GetResourceOauth2TokenResponseSessionStatusEnum | string;
    private 'session_uri'?: string;
    private 'expires_at'?: Date;
    public constructor() { 
        super();
    }
    public withAccessToken(accessToken: string): GetResourceOauth2TokenResponse {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
    public withAuthorizationUrl(authorizationUrl: string): GetResourceOauth2TokenResponse {
        this['authorization_url'] = authorizationUrl;
        return this;
    }
    public set authorizationUrl(authorizationUrl: string  | undefined) {
        this['authorization_url'] = authorizationUrl;
    }
    public get authorizationUrl(): string | undefined {
        return this['authorization_url'];
    }
    public withSessionStatus(sessionStatus: GetResourceOauth2TokenResponseSessionStatusEnum | string): GetResourceOauth2TokenResponse {
        this['session_status'] = sessionStatus;
        return this;
    }
    public set sessionStatus(sessionStatus: GetResourceOauth2TokenResponseSessionStatusEnum | string  | undefined) {
        this['session_status'] = sessionStatus;
    }
    public get sessionStatus(): GetResourceOauth2TokenResponseSessionStatusEnum | string | undefined {
        return this['session_status'];
    }
    public withSessionUri(sessionUri: string): GetResourceOauth2TokenResponse {
        this['session_uri'] = sessionUri;
        return this;
    }
    public set sessionUri(sessionUri: string  | undefined) {
        this['session_uri'] = sessionUri;
    }
    public get sessionUri(): string | undefined {
        return this['session_uri'];
    }
    public withExpiresAt(expiresAt: Date): GetResourceOauth2TokenResponse {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: Date  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): Date | undefined {
        return this['expires_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetResourceOauth2TokenResponseSessionStatusEnum {
    IN_PROGRESS = 'IN_PROGRESS',
    FAILED = 'FAILED'
}
