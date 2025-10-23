

export class ProjectProtectedTagActionDto {
    public action?: ProjectProtectedTagActionDtoActionEnum | string;
    public enable?: boolean;
    private 'user_ids'?: Array<number>;
    private 'user_names'?: Array<string>;
    private 'user_team_ids'?: Array<number>;
    private 'user_team_names'?: Array<string>;
    private 'related_role_ids'?: Array<string>;
    public constructor() { 
    }
    public withAction(action: ProjectProtectedTagActionDtoActionEnum | string): ProjectProtectedTagActionDto {
        this['action'] = action;
        return this;
    }
    public withEnable(enable: boolean): ProjectProtectedTagActionDto {
        this['enable'] = enable;
        return this;
    }
    public withUserIds(userIds: Array<number>): ProjectProtectedTagActionDto {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<number>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<number> | undefined {
        return this['user_ids'];
    }
    public withUserNames(userNames: Array<string>): ProjectProtectedTagActionDto {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withUserTeamIds(userTeamIds: Array<number>): ProjectProtectedTagActionDto {
        this['user_team_ids'] = userTeamIds;
        return this;
    }
    public set userTeamIds(userTeamIds: Array<number>  | undefined) {
        this['user_team_ids'] = userTeamIds;
    }
    public get userTeamIds(): Array<number> | undefined {
        return this['user_team_ids'];
    }
    public withUserTeamNames(userTeamNames: Array<string>): ProjectProtectedTagActionDto {
        this['user_team_names'] = userTeamNames;
        return this;
    }
    public set userTeamNames(userTeamNames: Array<string>  | undefined) {
        this['user_team_names'] = userTeamNames;
    }
    public get userTeamNames(): Array<string> | undefined {
        return this['user_team_names'];
    }
    public withRelatedRoleIds(relatedRoleIds: Array<string>): ProjectProtectedTagActionDto {
        this['related_role_ids'] = relatedRoleIds;
        return this;
    }
    public set relatedRoleIds(relatedRoleIds: Array<string>  | undefined) {
        this['related_role_ids'] = relatedRoleIds;
    }
    public get relatedRoleIds(): Array<string> | undefined {
        return this['related_role_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProjectProtectedTagActionDtoActionEnum {
    READ = 'read',
    CREATE_DELETE = 'create-delete',
    CREATE = 'create'
}
