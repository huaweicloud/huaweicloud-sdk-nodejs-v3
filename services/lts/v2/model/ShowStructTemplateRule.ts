

export class ShowStructTemplateRule {
    public param?: string;
    public type?: ShowStructTemplateRuleTypeEnum | string;
    public constructor() { 
    }
    public withParam(param: string): ShowStructTemplateRule {
        this['param'] = param;
        return this;
    }
    public withType(type: ShowStructTemplateRuleTypeEnum | string): ShowStructTemplateRule {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowStructTemplateRuleTypeEnum {
    JSON = 'json',
    SPLIT = 'split',
    NGINX = 'nginx',
    BUILT_IN = 'built_in',
    CUSTOM_REGEX = 'custom_regex'
}
