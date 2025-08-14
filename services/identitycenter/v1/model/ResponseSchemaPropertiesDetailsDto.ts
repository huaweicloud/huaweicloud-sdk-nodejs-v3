

export class ResponseSchemaPropertiesDetailsDto {
    private 'attr_name_format'?: string;
    public include?: ResponseSchemaPropertiesDetailsDtoIncludeEnum | string;
    public constructor(attrNameFormat?: string, include?: string) { 
        this['attr_name_format'] = attrNameFormat;
        this['include'] = include;
    }
    public withAttrNameFormat(attrNameFormat: string): ResponseSchemaPropertiesDetailsDto {
        this['attr_name_format'] = attrNameFormat;
        return this;
    }
    public set attrNameFormat(attrNameFormat: string  | undefined) {
        this['attr_name_format'] = attrNameFormat;
    }
    public get attrNameFormat(): string | undefined {
        return this['attr_name_format'];
    }
    public withInclude(include: ResponseSchemaPropertiesDetailsDtoIncludeEnum | string): ResponseSchemaPropertiesDetailsDto {
        this['include'] = include;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseSchemaPropertiesDetailsDtoIncludeEnum {
    YES = 'YES'
}
