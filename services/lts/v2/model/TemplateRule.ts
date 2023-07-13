

export class TemplateRule {
    public type: TemplateRuleTypeEnum;
    public param: string;
    public constructor(type?: any, param?: any) { 
        this['type'] = type;
        this['param'] = param;
    }
    public withType(type: TemplateRuleTypeEnum): TemplateRule {
        this['type'] = type;
        return this;
    }
    public withParam(param: string): TemplateRule {
        this['param'] = param;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateRuleTypeEnum {
    CUSTOM_REGEX = 'custom_regex',
    JSON = 'json',
    SPLIT = 'split',
    NGINX = 'nginx'
}
