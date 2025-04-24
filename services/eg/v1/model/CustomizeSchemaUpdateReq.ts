

export class CustomizeSchemaUpdateReq {
    public description?: string;
    public compatibility?: CustomizeSchemaUpdateReqCompatibilityEnum | string;
    public constructor() { 
    }
    public withDescription(description: string): CustomizeSchemaUpdateReq {
        this['description'] = description;
        return this;
    }
    public withCompatibility(compatibility: CustomizeSchemaUpdateReqCompatibilityEnum | string): CustomizeSchemaUpdateReq {
        this['compatibility'] = compatibility;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizeSchemaUpdateReqCompatibilityEnum {
    NONE = 'NONE'
}
