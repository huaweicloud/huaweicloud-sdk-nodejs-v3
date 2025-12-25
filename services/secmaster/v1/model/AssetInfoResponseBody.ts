

export class AssetInfoResponseBody {
    public id?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    public name?: string;
    private 'component_id'?: string;
    private 'component_name'?: string;
    private 'component_version_id'?: string;
    public type?: string;
    public status?: string;
    public config?: string;
    public description?: string;
    public enabled?: boolean;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'update_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'defense_type'?: string;
    private 'target_project_id'?: string;
    private 'target_project_name'?: string;
    private 'target_enterprise_id'?: string;
    private 'target_enterprise_name'?: string;
    private 'region_id'?: string;
    private 'region_name'?: string;
    private 'can_be_deleted'?: boolean;
    public constructor() { 
    }
    public withId(id: string): AssetInfoResponseBody {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): AssetInfoResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): AssetInfoResponseBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withName(name: string): AssetInfoResponseBody {
        this['name'] = name;
        return this;
    }
    public withComponentId(componentId: string): AssetInfoResponseBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withComponentName(componentName: string): AssetInfoResponseBody {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withComponentVersionId(componentVersionId: string): AssetInfoResponseBody {
        this['component_version_id'] = componentVersionId;
        return this;
    }
    public set componentVersionId(componentVersionId: string  | undefined) {
        this['component_version_id'] = componentVersionId;
    }
    public get componentVersionId(): string | undefined {
        return this['component_version_id'];
    }
    public withType(type: string): AssetInfoResponseBody {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): AssetInfoResponseBody {
        this['status'] = status;
        return this;
    }
    public withConfig(config: string): AssetInfoResponseBody {
        this['config'] = config;
        return this;
    }
    public withDescription(description: string): AssetInfoResponseBody {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): AssetInfoResponseBody {
        this['enabled'] = enabled;
        return this;
    }
    public withCreateTime(createTime: string): AssetInfoResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): AssetInfoResponseBody {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): AssetInfoResponseBody {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withUpdateTime(updateTime: string): AssetInfoResponseBody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withModifierId(modifierId: string): AssetInfoResponseBody {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): AssetInfoResponseBody {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withDefenseType(defenseType: string): AssetInfoResponseBody {
        this['defense_type'] = defenseType;
        return this;
    }
    public set defenseType(defenseType: string  | undefined) {
        this['defense_type'] = defenseType;
    }
    public get defenseType(): string | undefined {
        return this['defense_type'];
    }
    public withTargetProjectId(targetProjectId: string): AssetInfoResponseBody {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withTargetProjectName(targetProjectName: string): AssetInfoResponseBody {
        this['target_project_name'] = targetProjectName;
        return this;
    }
    public set targetProjectName(targetProjectName: string  | undefined) {
        this['target_project_name'] = targetProjectName;
    }
    public get targetProjectName(): string | undefined {
        return this['target_project_name'];
    }
    public withTargetEnterpriseId(targetEnterpriseId: string): AssetInfoResponseBody {
        this['target_enterprise_id'] = targetEnterpriseId;
        return this;
    }
    public set targetEnterpriseId(targetEnterpriseId: string  | undefined) {
        this['target_enterprise_id'] = targetEnterpriseId;
    }
    public get targetEnterpriseId(): string | undefined {
        return this['target_enterprise_id'];
    }
    public withTargetEnterpriseName(targetEnterpriseName: string): AssetInfoResponseBody {
        this['target_enterprise_name'] = targetEnterpriseName;
        return this;
    }
    public set targetEnterpriseName(targetEnterpriseName: string  | undefined) {
        this['target_enterprise_name'] = targetEnterpriseName;
    }
    public get targetEnterpriseName(): string | undefined {
        return this['target_enterprise_name'];
    }
    public withRegionId(regionId: string): AssetInfoResponseBody {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withRegionName(regionName: string): AssetInfoResponseBody {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withCanBeDeleted(canBeDeleted: boolean): AssetInfoResponseBody {
        this['can_be_deleted'] = canBeDeleted;
        return this;
    }
    public set canBeDeleted(canBeDeleted: boolean  | undefined) {
        this['can_be_deleted'] = canBeDeleted;
    }
    public get canBeDeleted(): boolean | undefined {
        return this['can_be_deleted'];
    }
}