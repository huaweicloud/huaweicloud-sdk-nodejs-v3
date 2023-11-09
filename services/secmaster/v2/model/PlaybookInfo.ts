

export class PlaybookInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'project_id'?: string;
    private 'version_id'?: string;
    public enabled?: boolean;
    private 'workspace_id'?: string;
    private 'approve_role'?: string;
    private 'user_role'?: string;
    private 'edit_role'?: string;
    private 'owner_id'?: string;
    public version?: string;
    private 'dataclass_name'?: string;
    private 'dataclass_id'?: string;
    private 'unaudited_version_id'?: string;
    private 'reject_version_id'?: string;
    public constructor() { 
    }
    public withId(id: string): PlaybookInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PlaybookInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PlaybookInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): PlaybookInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): PlaybookInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): PlaybookInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVersionId(versionId: string): PlaybookInfo {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withEnabled(enabled: boolean): PlaybookInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withWorkspaceId(workspaceId: string): PlaybookInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withApproveRole(approveRole: string): PlaybookInfo {
        this['approve_role'] = approveRole;
        return this;
    }
    public set approveRole(approveRole: string  | undefined) {
        this['approve_role'] = approveRole;
    }
    public get approveRole(): string | undefined {
        return this['approve_role'];
    }
    public withUserRole(userRole: string): PlaybookInfo {
        this['user_role'] = userRole;
        return this;
    }
    public set userRole(userRole: string  | undefined) {
        this['user_role'] = userRole;
    }
    public get userRole(): string | undefined {
        return this['user_role'];
    }
    public withEditRole(editRole: string): PlaybookInfo {
        this['edit_role'] = editRole;
        return this;
    }
    public set editRole(editRole: string  | undefined) {
        this['edit_role'] = editRole;
    }
    public get editRole(): string | undefined {
        return this['edit_role'];
    }
    public withOwnerId(ownerId: string): PlaybookInfo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withVersion(version: string): PlaybookInfo {
        this['version'] = version;
        return this;
    }
    public withDataclassName(dataclassName: string): PlaybookInfo {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withDataclassId(dataclassId: string): PlaybookInfo {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withUnauditedVersionId(unauditedVersionId: string): PlaybookInfo {
        this['unaudited_version_id'] = unauditedVersionId;
        return this;
    }
    public set unauditedVersionId(unauditedVersionId: string  | undefined) {
        this['unaudited_version_id'] = unauditedVersionId;
    }
    public get unauditedVersionId(): string | undefined {
        return this['unaudited_version_id'];
    }
    public withRejectVersionId(rejectVersionId: string): PlaybookInfo {
        this['reject_version_id'] = rejectVersionId;
        return this;
    }
    public set rejectVersionId(rejectVersionId: string  | undefined) {
        this['reject_version_id'] = rejectVersionId;
    }
    public get rejectVersionId(): string | undefined {
        return this['reject_version_id'];
    }
}