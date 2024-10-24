import { HttpHeader } from './HttpHeader';


export class Encryption {
    private 'key_rotation_interval_seconds'?: number;
    private 'encryption_method'?: EncryptionEncryptionMethodEnum | string;
    public level?: EncryptionLevelEnum | string;
    private 'resource_id'?: string;
    private 'system_ids'?: Array<EncryptionSystemIdsEnum> | Array<string>;
    public url?: string;
    private 'speke_version'?: EncryptionSpekeVersionEnum | string;
    private 'request_mode'?: EncryptionRequestModeEnum | string;
    private 'http_headers'?: Array<HttpHeader>;
    public urn?: string;
    public constructor(resourceId?: string, systemIds?: Array<string>, url?: string, spekeVersion?: string, requestMode?: string) { 
        this['resource_id'] = resourceId;
        this['system_ids'] = systemIds;
        this['url'] = url;
        this['speke_version'] = spekeVersion;
        this['request_mode'] = requestMode;
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
    public withResourceId(resourceId: string): Encryption {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
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
    public withUrl(url: string): Encryption {
        this['url'] = url;
        return this;
    }
    public withSpekeVersion(spekeVersion: EncryptionSpekeVersionEnum | string): Encryption {
        this['speke_version'] = spekeVersion;
        return this;
    }
    public set spekeVersion(spekeVersion: EncryptionSpekeVersionEnum | string  | undefined) {
        this['speke_version'] = spekeVersion;
    }
    public get spekeVersion(): EncryptionSpekeVersionEnum | string | undefined {
        return this['speke_version'];
    }
    public withRequestMode(requestMode: EncryptionRequestModeEnum | string): Encryption {
        this['request_mode'] = requestMode;
        return this;
    }
    public set requestMode(requestMode: EncryptionRequestModeEnum | string  | undefined) {
        this['request_mode'] = requestMode;
    }
    public get requestMode(): EncryptionRequestModeEnum | string | undefined {
        return this['request_mode'];
    }
    public withHttpHeaders(httpHeaders: Array<HttpHeader>): Encryption {
        this['http_headers'] = httpHeaders;
        return this;
    }
    public set httpHeaders(httpHeaders: Array<HttpHeader>  | undefined) {
        this['http_headers'] = httpHeaders;
    }
    public get httpHeaders(): Array<HttpHeader> | undefined {
        return this['http_headers'];
    }
    public withUrn(urn: string): Encryption {
        this['urn'] = urn;
        return this;
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
/**
    * @export
    * @enum {string}
    */
export enum EncryptionSpekeVersionEnum {
    E_1_0 = '1.0'
}
/**
    * @export
    * @enum {string}
    */
export enum EncryptionRequestModeEnum {
    DIRECT_HTTP = 'direct_http',
    FUNCTIONGRAPH_PROXY = 'functiongraph_proxy'
}
