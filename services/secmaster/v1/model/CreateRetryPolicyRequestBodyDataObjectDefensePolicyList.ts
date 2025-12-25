

export class CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
    private 'defense_connection_id'?: string;
    private 'defense_connection_name'?: string;
    private 'defense_connection_region_id'?: string;
    private 'defense_connection_region_name'?: string;
    private 'defense_type'?: string;
    private 'target_enterprise_id'?: string;
    private 'target_enterprise_name'?: string;
    private 'target_project_id'?: string;
    private 'target_project_name'?: string;
    public constructor(defenseConnectionId?: string, defenseConnectionName?: string, defenseConnectionRegionId?: string, defenseConnectionRegionName?: string, defenseType?: string, targetEnterpriseId?: string, targetEnterpriseName?: string, targetProjectId?: string, targetProjectName?: string) { 
        this['defense_connection_id'] = defenseConnectionId;
        this['defense_connection_name'] = defenseConnectionName;
        this['defense_connection_region_id'] = defenseConnectionRegionId;
        this['defense_connection_region_name'] = defenseConnectionRegionName;
        this['defense_type'] = defenseType;
        this['target_enterprise_id'] = targetEnterpriseId;
        this['target_enterprise_name'] = targetEnterpriseName;
        this['target_project_id'] = targetProjectId;
        this['target_project_name'] = targetProjectName;
    }
    public withDefenseConnectionId(defenseConnectionId: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['defense_connection_id'] = defenseConnectionId;
        return this;
    }
    public set defenseConnectionId(defenseConnectionId: string  | undefined) {
        this['defense_connection_id'] = defenseConnectionId;
    }
    public get defenseConnectionId(): string | undefined {
        return this['defense_connection_id'];
    }
    public withDefenseConnectionName(defenseConnectionName: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['defense_connection_name'] = defenseConnectionName;
        return this;
    }
    public set defenseConnectionName(defenseConnectionName: string  | undefined) {
        this['defense_connection_name'] = defenseConnectionName;
    }
    public get defenseConnectionName(): string | undefined {
        return this['defense_connection_name'];
    }
    public withDefenseConnectionRegionId(defenseConnectionRegionId: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['defense_connection_region_id'] = defenseConnectionRegionId;
        return this;
    }
    public set defenseConnectionRegionId(defenseConnectionRegionId: string  | undefined) {
        this['defense_connection_region_id'] = defenseConnectionRegionId;
    }
    public get defenseConnectionRegionId(): string | undefined {
        return this['defense_connection_region_id'];
    }
    public withDefenseConnectionRegionName(defenseConnectionRegionName: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['defense_connection_region_name'] = defenseConnectionRegionName;
        return this;
    }
    public set defenseConnectionRegionName(defenseConnectionRegionName: string  | undefined) {
        this['defense_connection_region_name'] = defenseConnectionRegionName;
    }
    public get defenseConnectionRegionName(): string | undefined {
        return this['defense_connection_region_name'];
    }
    public withDefenseType(defenseType: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['defense_type'] = defenseType;
        return this;
    }
    public set defenseType(defenseType: string  | undefined) {
        this['defense_type'] = defenseType;
    }
    public get defenseType(): string | undefined {
        return this['defense_type'];
    }
    public withTargetEnterpriseId(targetEnterpriseId: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['target_enterprise_id'] = targetEnterpriseId;
        return this;
    }
    public set targetEnterpriseId(targetEnterpriseId: string  | undefined) {
        this['target_enterprise_id'] = targetEnterpriseId;
    }
    public get targetEnterpriseId(): string | undefined {
        return this['target_enterprise_id'];
    }
    public withTargetEnterpriseName(targetEnterpriseName: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['target_enterprise_name'] = targetEnterpriseName;
        return this;
    }
    public set targetEnterpriseName(targetEnterpriseName: string  | undefined) {
        this['target_enterprise_name'] = targetEnterpriseName;
    }
    public get targetEnterpriseName(): string | undefined {
        return this['target_enterprise_name'];
    }
    public withTargetProjectId(targetProjectId: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withTargetProjectName(targetProjectName: string): CreateRetryPolicyRequestBodyDataObjectDefensePolicyList {
        this['target_project_name'] = targetProjectName;
        return this;
    }
    public set targetProjectName(targetProjectName: string  | undefined) {
        this['target_project_name'] = targetProjectName;
    }
    public get targetProjectName(): string | undefined {
        return this['target_project_name'];
    }
}