

export class MessageAttribute {
    public name?: string;
    public type?: MessageAttributeTypeEnum | string;
    public value?: object;
    public constructor(name?: string, type?: string, value?: object) { 
        this['name'] = name;
        this['type'] = type;
        this['value'] = value;
    }
    public withName(name: string): MessageAttribute {
        this['name'] = name;
        return this;
    }
    public withType(type: MessageAttributeTypeEnum | string): MessageAttribute {
        this['type'] = type;
        return this;
    }
    public withValue(value: object): MessageAttribute {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MessageAttributeTypeEnum {
    STRING = 'STRING',
    STRING_ARRAY = 'STRING_ARRAY',
    PROTOCOL = 'PROTOCOL'
}
