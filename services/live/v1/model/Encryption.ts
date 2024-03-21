

export class Encryption {
    private 'key_rotation_interval_seconds'?: number;
    private 'encryption_method'?: EncryptionEncryptionMethodEnum | string;
    public level?: EncryptionLevelEnum | string;
    private 'drm_content_id'?: string;
    private 'system_ids'?: Array<EncryptionSystemIdsEnum> | Array<string>;
    private 'auth_info'?: string;
    private 'km_url'?: string;
    public constructor(drmContentId?: string, systemIds?: Array<string>, authInfo?: string, kmUrl?: string) { 
        this['drm_content_id'] = drmContentId;
        this['system_ids'] = systemIds;
        this['auth_info'] = authInfo;
        this['km_url'] = kmUrl;
    }
    public withKeyRotationIntervalSeconds(keyRotationIntervalSeconds: number): Encryption {
        this['key_rotation_interval_seconds'] = keyRotationIntervalSeconds;
        return this;
    }
    public set keyRotationIntervalSeconds(keyRotationIntervalSeconds: number  | undefined) {
        this['key_rotation_interval_seconds'] = keyRotationIntervalSeconds;
    }
    public get keyRotationIntervalSeconds(): number | undefined {
        return this['key_rotation_interval_seconds'];
    }
    public withEncryptionMethod(encryptionMethod: EncryptionEncryptionMethodEnum | string): Encryption {
        this['encryption_method'] = encryptionMethod;
        return this;
    }
    public set encryptionMethod(encryptionMethod: EncryptionEncryptionMethodEnum | string  | undefined) {
        this['encryption_method'] = encryptionMethod;
    }
    public get encryptionMethod(): EncryptionEncryptionMethodEnum | string | undefined {
        return this['encryption_method'];
    }
    public withLevel(level: EncryptionLevelEnum | string): Encryption {
        this['level'] = level;
        return this;
    }
    public withDrmContentId(drmContentId: string): Encryption {
        this['drm_content_id'] = drmContentId;
        return this;
    }
    public set drmContentId(drmContentId: string  | undefined) {
        this['drm_content_id'] = drmContentId;
    }
    public get drmContentId(): string | undefined {
        return this['drm_content_id'];
    }
    public withSystemIds(systemIds: Array<EncryptionSystemIdsEnum> | Array<string>): Encryption {
        this['system_ids'] = systemIds;
        return this;
    }
    public set systemIds(systemIds: Array<EncryptionSystemIdsEnum> | Array<string>  | undefined) {
        this['system_ids'] = systemIds;
    }
    public get systemIds(): Array<EncryptionSystemIdsEnum> | Array<string> | undefined {
        return this['system_ids'];
    }
    public withAuthInfo(authInfo: string): Encryption {
        this['auth_info'] = authInfo;
        return this;
    }
    public set authInfo(authInfo: string  | undefined) {
        this['auth_info'] = authInfo;
    }
    public get authInfo(): string | undefined {
        return this['auth_info'];
    }
    public withKmUrl(kmUrl: string): Encryption {
        this['km_url'] = kmUrl;
        return this;
    }
    public set kmUrl(kmUrl: string  | undefined) {
        this['km_url'] = kmUrl;
    }
    public get kmUrl(): string | undefined {
        return this['km_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EncryptionEncryptionMethodEnum {
    SAMPLE_AES = 'SAMPLE-AES',
    AES_128 = 'AES-128'
}
/**
    * @export
    * @enum {string}
    */
export enum EncryptionLevelEnum {
    CONTENT = 'content',
    PROFILE = 'profile'
}
/**
    * @export
    * @enum {string}
    */
export enum EncryptionSystemIdsEnum {
    WIDEVINE = 'Widevine',
    PLAYREADY = 'PlayReady',
    FAIRPLAY = 'FairPlay'
}
