

export class UserGroupPermissionDto {
    private 'can_create_group'?: boolean;
    private 'can_craete_project'?: boolean;
    private 'can_set_group'?: boolean;
    private 'group_id'?: number;
    private 'group_visibility'?: string;
    public constructor() { 
    }
    public withCanCreateGroup(canCreateGroup: boolean): UserGroupPermissionDto {
        this['can_create_group'] = canCreateGroup;
        return this;
    }
    public set canCreateGroup(canCreateGroup: boolean  | undefined) {
        this['can_create_group'] = canCreateGroup;
    }
    public get canCreateGroup(): boolean | undefined {
        return this['can_create_group'];
    }
    public withCanCraeteProject(canCraeteProject: boolean): UserGroupPermissionDto {
        this['can_craete_project'] = canCraeteProject;
        return this;
    }
    public set canCraeteProject(canCraeteProject: boolean  | undefined) {
        this['can_craete_project'] = canCraeteProject;
    }
    public get canCraeteProject(): boolean | undefined {
        return this['can_craete_project'];
    }
    public withCanSetGroup(canSetGroup: boolean): UserGroupPermissionDto {
        this['can_set_group'] = canSetGroup;
        return this;
    }
    public set canSetGroup(canSetGroup: boolean  | undefined) {
        this['can_set_group'] = canSetGroup;
    }
    public get canSetGroup(): boolean | undefined {
        return this['can_set_group'];
    }
    public withGroupId(groupId: number): UserGroupPermissionDto {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withGroupVisibility(groupVisibility: string): UserGroupPermissionDto {
        this['group_visibility'] = groupVisibility;
        return this;
    }
    public set groupVisibility(groupVisibility: string  | undefined) {
        this['group_visibility'] = groupVisibility;
    }
    public get groupVisibility(): string | undefined {
        return this['group_visibility'];
    }
}