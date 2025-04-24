

export class CustomizeSchemaItemInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    public compatibility?: CustomizeSchemaItemInfoCompatibilityEnum | string;
    private 'provider_type'?: CustomizeSchemaItemInfoProviderTypeEnum | string;
    public format?: string;
    private 'number_of_versions'?: number;
    private 'event_type_id'?: string;
    private 'event_type_name'?: string;
    private 'event_source_id'?: string;
    private 'event_source_name'?: string;
    private 'event_source_label'?: string;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): CustomizeSchemaItemInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CustomizeSchemaItemInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CustomizeSchemaItemInfo {
        this['description'] = description;
        return this;
    }
    public withCompatibility(compatibility: CustomizeSchemaItemInfoCompatibilityEnum | string): CustomizeSchemaItemInfo {
        this['compatibility'] = compatibility;
        return this;
    }
    public withProviderType(providerType: CustomizeSchemaItemInfoProviderTypeEnum | string): CustomizeSchemaItemInfo {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: CustomizeSchemaItemInfoProviderTypeEnum | string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): CustomizeSchemaItemInfoProviderTypeEnum | string | undefined {
        return this['provider_type'];
    }
    public withFormat(format: string): CustomizeSchemaItemInfo {
        this['format'] = format;
        return this;
    }
    public withNumberOfVersions(numberOfVersions: number): CustomizeSchemaItemInfo {
        this['number_of_versions'] = numberOfVersions;
        return this;
    }
    public set numberOfVersions(numberOfVersions: number  | undefined) {
        this['number_of_versions'] = numberOfVersions;
    }
    public get numberOfVersions(): number | undefined {
        return this['number_of_versions'];
    }
    public withEventTypeId(eventTypeId: string): CustomizeSchemaItemInfo {
        this['event_type_id'] = eventTypeId;
        return this;
    }
    public set eventTypeId(eventTypeId: string  | undefined) {
        this['event_type_id'] = eventTypeId;
    }
    public get eventTypeId(): string | undefined {
        return this['event_type_id'];
    }
    public withEventTypeName(eventTypeName: string): CustomizeSchemaItemInfo {
        this['event_type_name'] = eventTypeName;
        return this;
    }
    public set eventTypeName(eventTypeName: string  | undefined) {
        this['event_type_name'] = eventTypeName;
    }
    public get eventTypeName(): string | undefined {
        return this['event_type_name'];
    }
    public withEventSourceId(eventSourceId: string): CustomizeSchemaItemInfo {
        this['event_source_id'] = eventSourceId;
        return this;
    }
    public set eventSourceId(eventSourceId: string  | undefined) {
        this['event_source_id'] = eventSourceId;
    }
    public get eventSourceId(): string | undefined {
        return this['event_source_id'];
    }
    public withEventSourceName(eventSourceName: string): CustomizeSchemaItemInfo {
        this['event_source_name'] = eventSourceName;
        return this;
    }
    public set eventSourceName(eventSourceName: string  | undefined) {
        this['event_source_name'] = eventSourceName;
    }
    public get eventSourceName(): string | undefined {
        return this['event_source_name'];
    }
    public withEventSourceLabel(eventSourceLabel: string): CustomizeSchemaItemInfo {
        this['event_source_label'] = eventSourceLabel;
        return this;
    }
    public set eventSourceLabel(eventSourceLabel: string  | undefined) {
        this['event_source_label'] = eventSourceLabel;
    }
    public get eventSourceLabel(): string | undefined {
        return this['event_source_label'];
    }
    public withCreatedTime(createdTime: string): CustomizeSchemaItemInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): CustomizeSchemaItemInfo {
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
export enum CustomizeSchemaItemInfoCompatibilityEnum {
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum CustomizeSchemaItemInfoProviderTypeEnum {
    OFFICIAL = 'OFFICIAL',
    CUSTOM = 'CUSTOM'
}
