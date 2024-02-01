

export class GcbType {
    public type?: GcbTypeTypeEnum | string;
    public constructor() { 
    }
    public withType(type: GcbTypeTypeEnum | string): GcbType {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GcbTypeTypeEnum {
    REGION = 'Region',
    SUBAREA = 'SubArea',
    AREA = 'Area',
    TRSAREA = 'TrsArea'
}
