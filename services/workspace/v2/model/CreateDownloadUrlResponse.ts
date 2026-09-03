
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDownloadUrlResponse extends SdkResponse {
    private 'download_url'?: string;
    private 'obs_bucket'?: string;
    private 'obs_object_key'?: string;
    private 'expires_at'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDownloadUrl(downloadUrl: string): CreateDownloadUrlResponse {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withObsBucket(obsBucket: string): CreateDownloadUrlResponse {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withObsObjectKey(obsObjectKey: string): CreateDownloadUrlResponse {
        this['obs_object_key'] = obsObjectKey;
        return this;
    }
    public set obsObjectKey(obsObjectKey: string  | undefined) {
        this['obs_object_key'] = obsObjectKey;
    }
    public get obsObjectKey(): string | undefined {
        return this['obs_object_key'];
    }
    public withExpiresAt(expiresAt: string): CreateDownloadUrlResponse {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: string  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): string | undefined {
        return this['expires_at'];
    }
    public withXRequestId(xRequestId: string): CreateDownloadUrlResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}