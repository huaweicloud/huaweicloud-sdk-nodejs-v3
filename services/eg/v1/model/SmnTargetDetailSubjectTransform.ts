

export class SmnTargetDetailSubjectTransform {
    public type?: SmnTargetDetailSubjectTransformTypeEnum | string;
    public value?: string;
    public template?: string;
    public constructor(type?: string, value?: string) { 
        this['type'] = type;
        this['value'] = value;
    }
    public withType(type: SmnTargetDetailSubjectTransformTypeEnum | string): SmnTargetDetailSubjectTransform {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): SmnTargetDetailSubjectTransform {
        this['value'] = value;
        return this;
    }
    public withTemplate(template: string): SmnTargetDetailSubjectTransform {
        this['template'] = template;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmnTargetDetailSubjectTransformTypeEnum {
    VARIABLE = 'VARIABLE',
    CONSTANT = 'CONSTANT'
}
