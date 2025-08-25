
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAccessKeyResponse extends SdkResponse {
    private 'access_key'?: string;
    private 'secret_key'?: string;
    private 'app_id'?: string;
    private 'key_name'?: string;
    private 'is_imported'?: boolean;
    public constructor() { 
        super();
    }
    public withAccessKey(accessKey: string): ShowAccessKeyResponse {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withSecretKey(secretKey: string): ShowAccessKeyResponse {
        this['secret_key'] = secretKey;
        return this;
    }
    public set secretKey(secretKey: string  | undefined) {
        this['secret_key'] = secretKey;
    }
    public get secretKey(): string | undefined {
        return this['secret_key'];
    }
    public withAppId(appId: string): ShowAccessKeyResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withKeyName(keyName: string): ShowAccessKeyResponse {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withIsImported(isImported: boolean): ShowAccessKeyResponse {
        this['is_imported'] = isImported;
        return this;
    }
    public set isImported(isImported: boolean  | undefined) {
        this['is_imported'] = isImported;
    }
    public get isImported(): boolean | undefined {
        return this['is_imported'];
    }
}