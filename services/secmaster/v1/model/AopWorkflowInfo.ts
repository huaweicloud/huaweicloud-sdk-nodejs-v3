

export class AopWorkflowInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'owner_id'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'create_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'update_time'?: string;
    private 'edit_role'?: string;
    private 'use_role'?: string;
    private 'approve_role'?: string;
    public enabled?: boolean;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    private 'current_approval_version_id'?: string;
    private 'current_rejected_version_id'?: string;
    private 'aop_type'?: string;
    private 'engine_type'?: string;
    private 'dataclass_id'?: string;
    private 'dataclass_name'?: string;
    public labels?: string;
    public version?: string;
    public constructor() { 
    }
    public withId(id: string): AopWorkflowInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AopWorkflowInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AopWorkflowInfo {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): AopWorkflowInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOwnerId(ownerId: string): AopWorkflowInfo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withCreatorId(creatorId: string): AopWorkflowInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): AopWorkflowInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: string): AopWorkflowInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withModifierId(modifierId: string): AopWorkflowInfo {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): AopWorkflowInfo {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withUpdateTime(updateTime: string): AopWorkflowInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withEditRole(editRole: string): AopWorkflowInfo {
        this['edit_role'] = editRole;
        return this;
    }
    public set editRole(editRole: string  | undefined) {
        this['edit_role'] = editRole;
    }
    public get editRole(): string | undefined {
        return this['edit_role'];
    }
    public withUseRole(useRole: string): AopWorkflowInfo {
        this['use_role'] = useRole;
        return this;
    }
    public set useRole(useRole: string  | undefined) {
        this['use_role'] = useRole;
    }
    public get useRole(): string | undefined {
        return this['use_role'];
    }
    public withApproveRole(approveRole: string): AopWorkflowInfo {
        this['approve_role'] = approveRole;
        return this;
    }
    public set approveRole(approveRole: string  | undefined) {
        this['approve_role'] = approveRole;
    }
    public get approveRole(): string | undefined {
        return this['approve_role'];
    }
    public withEnabled(enabled: boolean): AopWorkflowInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withWorkspaceId(workspaceId: string): AopWorkflowInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): AopWorkflowInfo {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withCurrentApprovalVersionId(currentApprovalVersionId: string): AopWorkflowInfo {
        this['current_approval_version_id'] = currentApprovalVersionId;
        return this;
    }
    public set currentApprovalVersionId(currentApprovalVersionId: string  | undefined) {
        this['current_approval_version_id'] = currentApprovalVersionId;
    }
    public get currentApprovalVersionId(): string | undefined {
        return this['current_approval_version_id'];
    }
    public withCurrentRejectedVersionId(currentRejectedVersionId: string): AopWorkflowInfo {
        this['current_rejected_version_id'] = currentRejectedVersionId;
        return this;
    }
    public set currentRejectedVersionId(currentRejectedVersionId: string  | undefined) {
        this['current_rejected_version_id'] = currentRejectedVersionId;
    }
    public get currentRejectedVersionId(): string | undefined {
        return this['current_rejected_version_id'];
    }
    public withAopType(aopType: string): AopWorkflowInfo {
        this['aop_type'] = aopType;
        return this;
    }
    public set aopType(aopType: string  | undefined) {
        this['aop_type'] = aopType;
    }
    public get aopType(): string | undefined {
        return this['aop_type'];
    }
    public withEngineType(engineType: string): AopWorkflowInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withDataclassId(dataclassId: string): AopWorkflowInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataclassName(dataclassName: string): AopWorkflowInfo {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withLabels(labels: string): AopWorkflowInfo {
        this['labels'] = labels;
        return this;
    }
    public withVersion(version: string): AopWorkflowInfo {
        this['version'] = version;
        return this;
    }
}