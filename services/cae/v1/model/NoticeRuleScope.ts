

export class NoticeRuleScope {
    public type?: NoticeRuleScopeTypeEnum | string;
    public environments?: Array<string>;
    public applications?: Array<string>;
    public components?: Array<string>;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: NoticeRuleScopeTypeEnum | string): NoticeRuleScope {
        this['type'] = type;
        return this;
    }
    public withEnvironments(environments: Array<string>): NoticeRuleScope {
        this['environments'] = environments;
        return this;
    }
    public withApplications(applications: Array<string>): NoticeRuleScope {
        this['applications'] = applications;
        return this;
    }
    public withComponents(components: Array<string>): NoticeRuleScope {
        this['components'] = components;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NoticeRuleScopeTypeEnum {
    ENVIRONMENTS = 'environments',
    APPLICATIONS = 'applications',
    COMPONENTS = 'components'
}
