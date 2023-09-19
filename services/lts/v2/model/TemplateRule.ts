

export class TemplateRule {
    public type?: TemplateRuleTypeEnum | string;
    public param?: string;
    public constructor(type?: string, param?: string) { 
        this['type'] = type;
        this['param'] = param;
    }
    public withType(type: TemplateRuleTypeEnum | string): TemplateRule {
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
