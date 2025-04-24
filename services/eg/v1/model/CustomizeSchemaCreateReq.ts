

export class CustomizeSchemaCreateReq {
    public name?: string;
    public description?: string;
    public compatibility?: CustomizeSchemaCreateReqCompatibilityEnum | string;
    public format?: CustomizeSchemaCreateReqFormatEnum | string;
    public definition?: string;
    public constructor(name?: string, compatibility?: string, definition?: string) { 
        this['name'] = name;
        this['compatibility'] = compatibility;
        this['definition'] = definition;
    }
    public withName(name: string): CustomizeSchemaCreateReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CustomizeSchemaCreateReq {
        this['description'] = description;
        return this;
    }
    public withCompatibility(compatibility: CustomizeSchemaCreateReqCompatibilityEnum | string): CustomizeSchemaCreateReq {
        this['compatibility'] = compatibility;
        return this;
    }
    public withFormat(format: CustomizeSchemaCreateReqFormatEnum | string): CustomizeSchemaCreateReq {
        this['format'] = format;
        return this;
    }
    public withDefinition(definition: string): CustomizeSchemaCreateReq {
        this['definition'] = definition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizeSchemaCreateReqCompatibilityEnum {
    NONE = 'NONE'
}
/**
    * @export
    * @enum {string}
    */
export enum CustomizeSchemaCreateReqFormatEnum {
    OPENAPI_3_0 = 'OPENAPI_3_0'
}
