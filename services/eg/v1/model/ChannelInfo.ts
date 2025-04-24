

export class ChannelInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'provider_type'?: ChannelInfoProviderTypeEnum | string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ChannelInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChannelInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ChannelInfo {
        this['description'] = description;
        return this;
    }
    public withProviderType(providerType: ChannelInfoProviderTypeEnum | string): ChannelInfo {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ChannelInfoProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ChannelInfoProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withCreatedTime(createdTime: string): ChannelInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ChannelInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChannelInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChannelInfoProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM',
    PARTNER = 'PARTNER'
}
