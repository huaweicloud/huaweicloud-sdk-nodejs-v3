import { NovaSecurityGroupCommonRule } from './NovaSecurityGroupCommonRule';


export class NovaSecurityGroup {
    public description?: string;
    public id?: string;
    public name?: string;
    private 'tenant_id'?: string;
    public rules?: Array<NovaSecurityGroupCommonRule>;
    public constructor(description?: string, id?: string, name?: string, tenantId?: string, rules?: Array<NovaSecurityGroupCommonRule>) { 
        this['description'] = description;
        this['id'] = id;
        this['name'] = name;
        this['tenant_id'] = tenantId;
        this['rules'] = rules;
    }
    public withDescription(description: string): NovaSecurityGroup {
        this['description'] = description;
        return this;
    }
    public withId(id: string): NovaSecurityGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NovaSecurityGroup {
        this['name'] = name;
        return this;
    }
    public withTenantId(tenantId: string): NovaSecurityGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withRules(rules: Array<NovaSecurityGroupCommonRule>): NovaSecurityGroup {
        this['rules'] = rules;
        return this;
    }
}