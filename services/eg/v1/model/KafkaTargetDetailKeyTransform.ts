

export class KafkaTargetDetailKeyTransform {
    public type?: KafkaTargetDetailKeyTransformTypeEnum | string;
    public value?: string;
    public template?: string;
    public constructor() { 
    }
    public withType(type: KafkaTargetDetailKeyTransformTypeEnum | string): KafkaTargetDetailKeyTransform {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): KafkaTargetDetailKeyTransform {
        this['value'] = value;
        return this;
    }
    public withTemplate(template: string): KafkaTargetDetailKeyTransform {
        this['template'] = template;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KafkaTargetDetailKeyTransformTypeEnum {
    NONE = 'NONE',
    VARIABLE = 'VARIABLE',
    CONSTANT = 'CONSTANT'
}
