

export class ListIpsRules1Request {
    private 'affected_application_like'?: number;
    private 'create_time'?: number;
    private 'fw_instance_id'?: string;
    private 'ips_cve_like'?: number;
    private 'ips_group'?: number;
    private 'ips_id'?: string;
    private 'ips_level'?: number;
    private 'ips_name_like'?: string;
    private 'ips_rules_type_like'?: number;
    private 'ips_status'?: string;
    private 'is_updated_ips_rule_queried'?: boolean;
    public limit?: number;
    private 'object_id'?: string;
    public offset?: number;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(limit?: number, objectId?: string, offset?: number, projectId?: string) { 
        this['limit'] = limit;
        this['object_id'] = objectId;
        this['offset'] = offset;
        this['project_id'] = projectId;
    }
    public withAffectedApplicationLike(affectedApplicationLike: number): ListIpsRules1Request {
        this['affected_application_like'] = affectedApplicationLike;
        return this;
    }
    public set affectedApplicationLike(affectedApplicationLike: number  | undefined) {
        this['affected_application_like'] = affectedApplicationLike;
    }
    public get affectedApplicationLike(): number | undefined {
        return this['affected_application_like'];
    }
    public withCreateTime(createTime: number): ListIpsRules1Request {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withFwInstanceId(fwInstanceId: string): ListIpsRules1Request {
        this['fw_instance_id'] = fwInstanceId;
        return this;
    }
    public set fwInstanceId(fwInstanceId: string  | undefined) {
        this['fw_instance_id'] = fwInstanceId;
    }
    public get fwInstanceId(): string | undefined {
        return this['fw_instance_id'];
    }
    public withIpsCveLike(ipsCveLike: number): ListIpsRules1Request {
        this['ips_cve_like'] = ipsCveLike;
        return this;
    }
    public set ipsCveLike(ipsCveLike: number  | undefined) {
        this['ips_cve_like'] = ipsCveLike;
    }
    public get ipsCveLike(): number | undefined {
        return this['ips_cve_like'];
    }
    public withIpsGroup(ipsGroup: number): ListIpsRules1Request {
        this['ips_group'] = ipsGroup;
        return this;
    }
    public set ipsGroup(ipsGroup: number  | undefined) {
        this['ips_group'] = ipsGroup;
    }
    public get ipsGroup(): number | undefined {
        return this['ips_group'];
    }
    public withIpsId(ipsId: string): ListIpsRules1Request {
        this['ips_id'] = ipsId;
        return this;
    }
    public set ipsId(ipsId: string  | undefined) {
        this['ips_id'] = ipsId;
    }
    public get ipsId(): string | undefined {
        return this['ips_id'];
    }
    public withIpsLevel(ipsLevel: number): ListIpsRules1Request {
        this['ips_level'] = ipsLevel;
        return this;
    }
    public set ipsLevel(ipsLevel: number  | undefined) {
        this['ips_level'] = ipsLevel;
    }
    public get ipsLevel(): number | undefined {
        return this['ips_level'];
    }
    public withIpsNameLike(ipsNameLike: string): ListIpsRules1Request {
        this['ips_name_like'] = ipsNameLike;
        return this;
    }
    public set ipsNameLike(ipsNameLike: string  | undefined) {
        this['ips_name_like'] = ipsNameLike;
    }
    public get ipsNameLike(): string | undefined {
        return this['ips_name_like'];
    }
    public withIpsRulesTypeLike(ipsRulesTypeLike: number): ListIpsRules1Request {
        this['ips_rules_type_like'] = ipsRulesTypeLike;
        return this;
    }
    public set ipsRulesTypeLike(ipsRulesTypeLike: number  | undefined) {
        this['ips_rules_type_like'] = ipsRulesTypeLike;
    }
    public get ipsRulesTypeLike(): number | undefined {
        return this['ips_rules_type_like'];
    }
    public withIpsStatus(ipsStatus: string): ListIpsRules1Request {
        this['ips_status'] = ipsStatus;
        return this;
    }
    public set ipsStatus(ipsStatus: string  | undefined) {
        this['ips_status'] = ipsStatus;
    }
    public get ipsStatus(): string | undefined {
        return this['ips_status'];
    }
    public withIsUpdatedIpsRuleQueried(isUpdatedIpsRuleQueried: boolean): ListIpsRules1Request {
        this['is_updated_ips_rule_queried'] = isUpdatedIpsRuleQueried;
        return this;
    }
    public set isUpdatedIpsRuleQueried(isUpdatedIpsRuleQueried: boolean  | undefined) {
        this['is_updated_ips_rule_queried'] = isUpdatedIpsRuleQueried;
    }
    public get isUpdatedIpsRuleQueried(): boolean | undefined {
        return this['is_updated_ips_rule_queried'];
    }
    public withLimit(limit: number): ListIpsRules1Request {
        this['limit'] = limit;
        return this;
    }
    public withObjectId(objectId: string): ListIpsRules1Request {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withOffset(offset: number): ListIpsRules1Request {
        this['offset'] = offset;
        return this;
    }
    public withProjectId(projectId: string): ListIpsRules1Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListIpsRules1Request {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}