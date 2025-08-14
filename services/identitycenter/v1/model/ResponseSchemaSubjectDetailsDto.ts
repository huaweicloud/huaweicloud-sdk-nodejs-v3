

export class ResponseSchemaSubjectDetailsDto {
    private 'name_id_format'?: string;
    public include?: ResponseSchemaSubjectDetailsDtoIncludeEnum | string;
    public constructor(nameIdFormat?: string, include?: string) { 
        this['name_id_format'] = nameIdFormat;
        this['include'] = include;
    }
    public withNameIdFormat(nameIdFormat: string): ResponseSchemaSubjectDetailsDto {
        this['name_id_format'] = nameIdFormat;
        return this;
    }
    public set nameIdFormat(nameIdFormat: string  | undefined) {
        this['name_id_format'] = nameIdFormat;
    }
    public get nameIdFormat(): string | undefined {
        return this['name_id_format'];
    }
    public withInclude(include: ResponseSchemaSubjectDetailsDtoIncludeEnum | string): ResponseSchemaSubjectDetailsDto {
        this['include'] = include;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseSchemaSubjectDetailsDtoIncludeEnum {
    REQUIRED = 'REQUIRED'
}
