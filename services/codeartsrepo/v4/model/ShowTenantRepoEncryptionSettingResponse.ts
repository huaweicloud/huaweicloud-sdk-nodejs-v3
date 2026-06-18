import { TenantRepoEncryptionSettingRequestDto } from './TenantRepoEncryptionSettingRequestDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantRepoEncryptionSettingResponse extends SdkResponse {
    private 'tenant_id'?: string;
    private 'encryption_type'?: string;
    private 'default_encryption_enabled'?: boolean;
    private 'cmk_key_name'?: string;
    private 'cmk_key_id'?: string;
    public id?: number;
    private 'key_state'?: ShowTenantRepoEncryptionSettingResponseKeyStateEnum | string;
    public region?: string;
    private 'region_type'?: string;
    public constructor() { 
        super();
    }
    public withTenantId(tenantId: string): ShowTenantRepoEncryptionSettingResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withEncryptionType(encryptionType: string): ShowTenantRepoEncryptionSettingResponse {
        this['encryption_type'] = encryptionType;
        return this;
    }
    public set encryptionType(encryptionType: string  | undefined) {
        this['encryption_type'] = encryptionType;
    }
    public get encryptionType(): string | undefined {
        return this['encryption_type'];
    }
    public withDefaultEncryptionEnabled(defaultEncryptionEnabled: boolean): ShowTenantRepoEncryptionSettingResponse {
        this['default_encryption_enabled'] = defaultEncryptionEnabled;
        return this;
    }
    public set defaultEncryptionEnabled(defaultEncryptionEnabled: boolean  | undefined) {
        this['default_encryption_enabled'] = defaultEncryptionEnabled;
    }
    public get defaultEncryptionEnabled(): boolean | undefined {
        return this['default_encryption_enabled'];
    }
    public withCmkKeyName(cmkKeyName: string): ShowTenantRepoEncryptionSettingResponse {
        this['cmk_key_name'] = cmkKeyName;
        return this;
    }
    public set cmkKeyName(cmkKeyName: string  | undefined) {
        this['cmk_key_name'] = cmkKeyName;
    }
    public get cmkKeyName(): string | undefined {
        return this['cmk_key_name'];
    }
    public withCmkKeyId(cmkKeyId: string): ShowTenantRepoEncryptionSettingResponse {
        this['cmk_key_id'] = cmkKeyId;
        return this;
    }
    public set cmkKeyId(cmkKeyId: string  | undefined) {
        this['cmk_key_id'] = cmkKeyId;
    }
    public get cmkKeyId(): string | undefined {
        return this['cmk_key_id'];
    }
    public withId(id: number): ShowTenantRepoEncryptionSettingResponse {
        this['id'] = id;
        return this;
    }
    public withKeyState(keyState: ShowTenantRepoEncryptionSettingResponseKeyStateEnum | string): ShowTenantRepoEncryptionSettingResponse {
        this['key_state'] = keyState;
        return this;
    }
    public set keyState(keyState: ShowTenantRepoEncryptionSettingResponseKeyStateEnum | string  | undefined) {
        this['key_state'] = keyState;
    }
    public get keyState(): ShowTenantRepoEncryptionSettingResponseKeyStateEnum | string | undefined {
        return this['key_state'];
    }
    public withRegion(region: string): ShowTenantRepoEncryptionSettingResponse {
        this['region'] = region;
        return this;
    }
    public withRegionType(regionType: string): ShowTenantRepoEncryptionSettingResponse {
        this['region_type'] = regionType;
        return this;
    }
    public set regionType(regionType: string  | undefined) {
        this['region_type'] = regionType;
    }
    public get regionType(): string | undefined {
        return this['region_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTenantRepoEncryptionSettingResponseKeyStateEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4',
    E_5 = '5'
}
