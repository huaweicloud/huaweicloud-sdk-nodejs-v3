

export class ValidateRepoNameDto {
    public name?: string;
    private 'project_id'?: string;
    private 'group_id'?: number;
    public constructor() { 
    }
    public withName(name: string): ValidateRepoNameDto {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ValidateRepoNameDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withGroupId(groupId: number): ValidateRepoNameDto {
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