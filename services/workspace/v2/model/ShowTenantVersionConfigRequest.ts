

export class ShowTenantVersionConfigRequest {
    private 'version_config_id'?: string;
    public constructor(versionConfigId?: string) { 
        this['version_config_id'] = versionConfigId;
    }
    public withVersionConfigId(versionConfigId: string): ShowTenantVersionConfigRequest {
        this['version_config_id'] = versionConfigId;
        return this;
    }
    public set versionConfigId(versionConfigId: string  | undefined) {
        this['version_config_id'] = versionConfigId;
    }
    public get versionConfigId(): string | undefined {
        return this['version_config_id'];
    }
}