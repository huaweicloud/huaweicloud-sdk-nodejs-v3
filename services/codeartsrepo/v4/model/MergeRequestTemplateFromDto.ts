

export class MergeRequestTemplateFromDto {
    public path?: string;
    public type?: MergeRequestTemplateFromDtoTypeEnum | string;
    private 'repository_id'?: number;
    private 'group_id'?: number;
    private 'project_id'?: string;
    public constructor() { 
    }
    public withPath(path: string): MergeRequestTemplateFromDto {
        this['path'] = path;
        return this;
    }
    public withType(type: MergeRequestTemplateFromDtoTypeEnum | string): MergeRequestTemplateFromDto {
        this['type'] = type;
        return this;
    }
    public withRepositoryId(repositoryId: number): MergeRequestTemplateFromDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withGroupId(groupId: number): MergeRequestTemplateFromDto {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withProjectId(projectId: string): MergeRequestTemplateFromDto {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MergeRequestTemplateFromDtoTypeEnum {
    REPOSITORY = 'repository',
    GROUP = 'group',
    PROJECT = 'project'
}
