

export class SendKafkaMessageRequestBodyPropertyList {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): SendKafkaMessageRequestBodyPropertyList {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): SendKafkaMessageRequestBodyPropertyList {
        this['value'] = value;
        return this;
    }
}