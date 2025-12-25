

export class DpeInfo {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'workspace_id'?: string;
    private 'dataclass_id'?: string;
    private 'dataclass_name'?: string;
    private 'classifier_id'?: string;
    public status?: string;
    private 'complete_degree'?: string;
    private 'instance_num'?: string;
    public description?: string;
    private 'update_time'?: string;
    private 'create_time'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'modifier_id'?: string;
    private 'modifier_name'?: string;
    public constructor() { 
    }
    public withId(id: string): DpeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DpeInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): DpeInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withWorkspaceId(workspaceId: string): DpeInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDataclassId(dataclassId: string): DpeInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDataclassName(dataclassName: string): DpeInfo {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withClassifierId(classifierId: string): DpeInfo {
        this['classifier_id'] = classifierId;
        return this;
    }
    public set classifierId(classifierId: string  | undefined) {
        this['classifier_id'] = classifierId;
    }
    public get classifierId(): string | undefined {
        return this['classifier_id'];
    }
    public withStatus(status: string): DpeInfo {
        this['status'] = status;
        return this;
    }
    public withCompleteDegree(completeDegree: string): DpeInfo {
        this['complete_degree'] = completeDegree;
        return this;
    }
    public set completeDegree(completeDegree: string  | undefined) {
        this['complete_degree'] = completeDegree;
    }
    public get completeDegree(): string | undefined {
        return this['complete_degree'];
    }
    public withInstanceNum(instanceNum: string): DpeInfo {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: string  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): string | undefined {
        return this['instance_num'];
    }
    public withDescription(description: string): DpeInfo {
        this['description'] = description;
        return this;
    }
    public withUpdateTime(updateTime: string): DpeInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: string): DpeInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): DpeInfo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): DpeInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withModifierId(modifierId: string): DpeInfo {
        this['modifier_id'] = modifierId;
        return this;
    }
    public set modifierId(modifierId: string  | undefined) {
        this['modifier_id'] = modifierId;
    }
    public get modifierId(): string | undefined {
        return this['modifier_id'];
    }
    public withModifierName(modifierName: string): DpeInfo {
        this['modifier_name'] = modifierName;
        return this;
    }
    public set modifierName(modifierName: string  | undefined) {
        this['modifier_name'] = modifierName;
    }
    public get modifierName(): string | undefined {
        return this['modifier_name'];
    }
}