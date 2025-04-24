
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEventSchemaResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public compatibility?: UpdateEventSchemaResponseCompatibilityEnum | string;
    private 'provider_type'?: UpdateEventSchemaResponseProviderTypeEnum | string;
    public format?: string;
    private 'number_of_versions'?: number;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public version?: number;
    public definition?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateEventSchemaResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UpdateEventSchemaResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateEventSchemaResponse {
        this['description'] = description;
        return this;
    }
    public withCompatibility(compatibility: UpdateEventSchemaResponseCompatibilityEnum | string): UpdateEventSchemaResponse {
        this['compatibility'] = compatibility;
        return this;
    }
    public withProviderType(providerType: UpdateEventSchemaResponseProviderTypeEnum | string): UpdateEventSchemaResponse {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: UpdateEventSchemaResponseProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): UpdateEventSchemaResponseProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withFormat(format: string): UpdateEventSchemaResponse {
        this['format'] = format;
        return this;
    }
    public withNumberOfVersions(numberOfVersions: number): UpdateEventSchemaResponse {
        this['number_of_versions'] = numberOfVersions;
        return this;
    }
    public set numberOfVersions(numberOfVersions: number  | undefined) {
        this['number_of_versions'] = numberOfVersions;
    }
    public get numberOfVersions(): number | undefined {
        return this['number_of_versions'];
    }
    public withCreatedTime(createdTime: string): UpdateEventSchemaResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): UpdateEventSchemaResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
    public withVersion(version: number): UpdateEventSchemaResponse {
        this['version'] = version;
        return this;
    }
    public withDefinition(definition: string): UpdateEventSchemaResponse {
        this['definition'] = definition;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateEventSchemaResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum UpdateEventSchemaResponseCompatibilityEnum {
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateEventSchemaResponseProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM'
}
