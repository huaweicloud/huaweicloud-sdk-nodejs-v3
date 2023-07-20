

export class ListExternalVaultRequest {
    private 'external_project_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'protect_type'?: ListExternalVaultRequestProtectTypeEnum | string;
    private 'region_id'?: string;
    private 'objcet_type'?: string;
    private 'cloud_type'?: string;
    private 'vault_id'?: string;
    public constructor(externalProjectId?: string, regionId?: string) { 
        this['external_project_id'] = externalProjectId;
        this['region_id'] = regionId;
    }
    public withExternalProjectId(externalProjectId: string): ListExternalVaultRequest {
        this['external_project_id'] = externalProjectId;
        return this;
    }
    public set externalProjectId(externalProjectId: string  | undefined) {
        this['external_project_id'] = externalProjectId;
    }
    public get externalProjectId(): string | undefined {
        return this['external_project_id'];
    }
    public withLimit(limit: number): ListExternalVaultRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListExternalVaultRequest {
        this['offset'] = offset;
        return this;
    }
    public withProtectType(protectType: ListExternalVaultRequestProtectTypeEnum | string): ListExternalVaultRequest {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: ListExternalVaultRequestProtectTypeEnum | string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): ListExternalVaultRequestProtectTypeEnum | string | undefined {
        return this['protect_type'];
    }
    public withRegionId(regionId: string): ListExternalVaultRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withObjcetType(objcetType: string): ListExternalVaultRequest {
        this['objcet_type'] = objcetType;
        return this;
    }
    public set objcetType(objcetType: string  | undefined) {
        this['objcet_type'] = objcetType;
    }
    public get objcetType(): string | undefined {
        return this['objcet_type'];
    }
    public withCloudType(cloudType: string): ListExternalVaultRequest {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withVaultId(vaultId: string): ListExternalVaultRequest {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListExternalVaultRequestProtectTypeEnum {
    BACKUPREPLICATIONHYBRID = 'backup;replication;hybrid'
}
