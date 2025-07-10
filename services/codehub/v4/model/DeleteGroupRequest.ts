

export class DeleteGroupRequest {
    private 'project_id'?: string;
    private 'group_id'?: number;
    public constructor(projectId?: string, groupId?: number) { 
        this['project_id'] = projectId;
        this['group_id'] = groupId;
    }
    public withProjectId(projectId: string): DeleteGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGroupId(groupId: number): DeleteGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
}