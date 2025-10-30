

export class ShowDefaultSecurityCheckPolicyDetailsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'support_os'?: string;
    private 'check_type'?: string;
    public standard?: string;
    public tag?: string;
    private 'check_rule_name'?: string;
    public severity?: string;
    public level?: string;
    private 'group_id'?: string;
    public checked?: boolean;
    public constructor(offset?: number, limit?: number, supportOs?: string, standard?: string) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['support_os'] = supportOs;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSupportOs(supportOs: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withCheckType(checkType: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['standard'] = standard;
        return this;
    }
    public withTag(tag: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['tag'] = tag;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withSeverity(severity: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['severity'] = severity;
        return this;
    }
    public withLevel(level: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['level'] = level;
        return this;
    }
    public withGroupId(groupId: string): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withChecked(checked: boolean): ShowDefaultSecurityCheckPolicyDetailsRequest {
        this['checked'] = checked;
        return this;
    }
}