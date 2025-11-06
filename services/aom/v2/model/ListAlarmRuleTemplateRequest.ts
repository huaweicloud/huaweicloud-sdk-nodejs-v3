

export class ListAlarmRuleTemplateRequest {
    private 'Enterprise-Project-Id'?: string;
    public id?: string;
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmRuleTemplateRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withId(id: string): ListAlarmRuleTemplateRequest {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ListAlarmRuleTemplateRequest {
        this['type'] = type;
        return this;
    }
}