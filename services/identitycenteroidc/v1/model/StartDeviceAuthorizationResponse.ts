
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartDeviceAuthorizationResponse extends SdkResponse {
    private 'device_code'?: string;
    private 'expires_in'?: number;
    public interval?: number;
    private 'user_code'?: string;
    private 'verification_uri'?: string;
    private 'verification_uri_complete'?: string;
    public constructor() { 
        super();
    }
    public withDeviceCode(deviceCode: string): StartDeviceAuthorizationResponse {
        this['device_code'] = deviceCode;
        return this;
    }
    public set deviceCode(deviceCode: string  | undefined) {
        this['device_code'] = deviceCode;
    }
    public get deviceCode(): string | undefined {
        return this['device_code'];
    }
    public withExpiresIn(expiresIn: number): StartDeviceAuthorizationResponse {
        this['expires_in'] = expiresIn;
        return this;
    }
    public set expiresIn(expiresIn: number  | undefined) {
        this['expires_in'] = expiresIn;
    }
    public get expiresIn(): number | undefined {
        return this['expires_in'];
    }
    public withInterval(interval: number): StartDeviceAuthorizationResponse {
        this['interval'] = interval;
        return this;
    }
    public withUserCode(userCode: string): StartDeviceAuthorizationResponse {
        this['user_code'] = userCode;
        return this;
    }
    public set userCode(userCode: string  | undefined) {
        this['user_code'] = userCode;
    }
    public get userCode(): string | undefined {
        return this['user_code'];
    }
    public withVerificationUri(verificationUri: string): StartDeviceAuthorizationResponse {
        this['verification_uri'] = verificationUri;
        return this;
    }
    public set verificationUri(verificationUri: string  | undefined) {
        this['verification_uri'] = verificationUri;
    }
    public get verificationUri(): string | undefined {
        return this['verification_uri'];
    }
    public withVerificationUriComplete(verificationUriComplete: string): StartDeviceAuthorizationResponse {
        this['verification_uri_complete'] = verificationUriComplete;
        return this;
    }
    public set verificationUriComplete(verificationUriComplete: string  | undefined) {
        this['verification_uri_complete'] = verificationUriComplete;
    }
    public get verificationUriComplete(): string | undefined {
        return this['verification_uri_complete'];
    }
}