
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailOfEventSchemaResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public compatibility?: ShowDetailOfEventSchemaResponseCompatibilityEnum | string;
    private 'provider_type'?: ShowDetailOfEventSchemaResponseProviderTypeEnum | string;
    public format?: string;
    private 'number_of_versions'?: number;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public version?: number;
    public definition?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailOfEventSchemaResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailOfEventSchemaResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDetailOfEventSchemaResponse {
        this['description'] = description;
        return this;
    }
    public withCompatibility(compatibility: ShowDetailOfEventSchemaResponseCompatibilityEnum | string): ShowDetailOfEventSchemaResponse {
        this['compatibility'] = compatibility;
        return this;
    }
    public withProviderType(providerType: ShowDetailOfEventSchemaResponseProviderTypeEnum | string): ShowDetailOfEventSchemaResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: ShowDetailOfEventSchemaResponseProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): ShowDetailOfEventSchemaResponseProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withFormat(format: string): ShowDetailOfEventSchemaResponse {
        this['format'] = format;
        return this;
    }
    public withNumberOfVersions(numberOfVersions: number): ShowDetailOfEventSchemaResponse {
        this['number_of_versions'] = numberOfVersions;
        return this;
    }
    public set numberOfVersions(numberOfVersions: number  | undefined) {
        this['number_of_versions'] = numberOfVersions;
    }
    public get numberOfVersions(): number | undefined {
        return this['number_of_versions'];
    }
    public withCreatedTime(createdTime: string): ShowDetailOfEventSchemaResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): ShowDetailOfEventSchemaResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withVersion(version: number): ShowDetailOfEventSchemaResponse {
        this['version'] = version;
        return this;
    }
    public withDefinition(definition: string): ShowDetailOfEventSchemaResponse {
        this['definition'] = definition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailOfEventSchemaResponseCompatibilityEnum {
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailOfEventSchemaResponseProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM'
}
