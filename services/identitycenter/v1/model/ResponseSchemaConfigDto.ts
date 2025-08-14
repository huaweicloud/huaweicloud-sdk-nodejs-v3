import { ResponseSchemaPropertiesDetailsDto } from './ResponseSchemaPropertiesDetailsDto';
import { ResponseSchemaSubjectDetailsDto } from './ResponseSchemaSubjectDetailsDto';


export class ResponseSchemaConfigDto {
    public properties?: { [key: string]: ResponseSchemaPropertiesDetailsDto; };
    public subject?: ResponseSchemaSubjectDetailsDto;
    private 'supported_name_id_formats'?: Array<string>;
    public constructor(subject?: ResponseSchemaSubjectDetailsDto) { 
        this['subject'] = subject;
    }
    public withProperties(properties: { [key: string]: ResponseSchemaPropertiesDetailsDto; }): ResponseSchemaConfigDto {
        this['properties'] = properties;
        return this;
    }
    public withSubject(subject: ResponseSchemaSubjectDetailsDto): ResponseSchemaConfigDto {
        this['subject'] = subject;
        return this;
    }
    public withSupportedNameIdFormats(supportedNameIdFormats: Array<string>): ResponseSchemaConfigDto {
        this['supported_name_id_formats'] = supportedNameIdFormats;
        return this;
    }
    public set supportedNameIdFormats(supportedNameIdFormats: Array<string>  | undefined) {
        this['supported_name_id_formats'] = supportedNameIdFormats;
    }
    public get supportedNameIdFormats(): Array<string> | undefined {
        return this['supported_name_id_formats'];
    }
}