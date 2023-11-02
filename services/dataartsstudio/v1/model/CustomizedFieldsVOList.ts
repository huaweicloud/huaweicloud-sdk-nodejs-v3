import { CustomizedFieldsVO } from './CustomizedFieldsVO';


export class CustomizedFieldsVOList {
    public type?: CustomizedFieldsVOListTypeEnum | string;
    public fields?: Array<CustomizedFieldsVO>;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: CustomizedFieldsVOListTypeEnum | string): CustomizedFieldsVOList {
        this['type'] = type;
        return this;
    }
    public withFields(fields: Array<CustomizedFieldsVO>): CustomizedFieldsVOList {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomizedFieldsVOListTypeEnum {
    TABLE = 'TABLE',
    ATTRIBUTE = 'ATTRIBUTE',
    SUBJECT = 'SUBJECT',
    METRIC = 'METRIC'
}
