

export class CatalogTargetInfo {
    public id?: string;
    public name?: string;
    public label?: string;
    public description?: string;
    private 'provider_type'?: CatalogTargetInfoProviderTypeEnum | string;
    public parameters?: Array<object>;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): CatalogTargetInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CatalogTargetInfo {
        this['name'] = name;
        return this;
    }
    public withLabel(label: string): CatalogTargetInfo {
        this['label'] = label;
        return this;
    }
    public withDescription(description: string): CatalogTargetInfo {
        this['description'] = description;
        return this;
    }
    public withProviderType(providerType: CatalogTargetInfoProviderTypeEnum | string): CatalogTargetInfo {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: CatalogTargetInfoProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): CatalogTargetInfoProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withParameters(parameters: Array<object>): CatalogTargetInfo {
        this['parameters'] = parameters;
        return this;
    }
    public withCreatedTime(createdTime: string): CatalogTargetInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CatalogTargetInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CatalogTargetInfoProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM'
}
