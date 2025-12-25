

export class AopWorkflowVersionInfo {
    public id?: string;
    private 'version_id'?: string;
    public name?: string;
    private 'aopworkflow_id'?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'owner_id'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'create_time'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    private 'update_time'?: string;
    public enabled?: boolean;
    public status?: string;
    public version?: string;
    public taskconfig?: string;
    public taskflow?: string;
    private 'taskflow_type'?: string;
    private 'aop_type'?: string;
    public input?: string;
    public output?: string;
    private 'dataclass_id'?: string;
    private 'dataclass_name'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withId(id: string): AopWorkflowVersionInfo {
        this['id'] = id;
        return this;
    }
    public withVersionId(versionId: string): AopWorkflowVersionInfo {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withName(name: string): AopWorkflowVersionInfo {
        this['name'] = name;
        return this;
    }
    public withAopworkflowId(aopworkflowId: string): AopWorkflowVersionInfo {
        this['aopworkflow_id'] = aopworkflowId;
        return this;
    }
    public set aopworkflowId(aopworkflowId: string  | undefined) {
        this['aopworkflow_id'] = aopworkflowId;
    }
    public get aopworkflowId(): string | undefined {
        return this['aopworkflow_id'];
    }
    public withDescription(description: string): AopWorkflowVersionInfo {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): AopWorkflowVersionInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOwnerId(ownerId: string): AopWorkflowVersionInfo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withCreatorId(creatorId: string): AopWorkflowVersionInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): AopWorkflowVersionInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: string): AopWorkflowVersionInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withModifierId(modifierId: string): AopWorkflowVersionInfo {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): AopWorkflowVersionInfo {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
    public withUpdateTime(updateTime: string): AopWorkflowVersionInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withEnabled(enabled: boolean): AopWorkflowVersionInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withStatus(status: string): AopWorkflowVersionInfo {
        this['status'] = status;
        return this;
    }
    public withVersion(version: string): AopWorkflowVersionInfo {
        this['version'] = version;
        return this;
    }
    public withTaskconfig(taskconfig: string): AopWorkflowVersionInfo {
        this['taskconfig'] = taskconfig;
        return this;
    }
    public withTaskflow(taskflow: string): AopWorkflowVersionInfo {
        this['taskflow'] = taskflow;
        return this;
    }
    public withTaskflowType(taskflowType: string): AopWorkflowVersionInfo {
        this['taskflow_type'] = taskflowType;
        return this;
    }
    public set taskflowType(taskflowType: string  | undefined) {
        this['taskflow_type'] = taskflowType;
    }
    public get taskflowType(): string | undefined {
        return this['taskflow_type'];
    }
    public withAopType(aopType: string): AopWorkflowVersionInfo {
        this['aop_type'] = aopType;
        return this;
    }
    public set aopType(aopType: string  | undefined) {
        this['aop_type'] = aopType;
    }
    public get aopType(): string | undefined {
        return this['aop_type'];
    }
    public withInput(input: string): AopWorkflowVersionInfo {
        this['input'] = input;
        return this;
    }
    public withOutput(output: string): AopWorkflowVersionInfo {
        this['output'] = output;
        return this;
    }
    public withDataclassId(dataclassId: string): AopWorkflowVersionInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataclassName(dataclassName: string): AopWorkflowVersionInfo {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withWorkspaceId(workspaceId: string): AopWorkflowVersionInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}