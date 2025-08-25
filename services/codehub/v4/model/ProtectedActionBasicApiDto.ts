

export class ProtectedActionBasicApiDto {
    public action?: ProtectedActionBasicApiDtoActionEnum | string;
    public enable?: boolean;
    private 'user_ids'?: Array<number>;
    private 'user_team_ids'?: Array<number>;
    private 'related_role_ids'?: Array<string>;
    public constructor() { 
    }
    public withAction(action: ProtectedActionBasicApiDtoActionEnum | string): ProtectedActionBasicApiDto {
        this['action'] = action;
        return this;
    }
    public withEnable(enable: boolean): ProtectedActionBasicApiDto {
        this['enable'] = enable;
        return this;
    }
    public withUserIds(userIds: Array<number>): ProtectedActionBasicApiDto {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<number>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<number> | undefined {
        return this['user_ids'];
    }
    public withUserTeamIds(userTeamIds: Array<number>): ProtectedActionBasicApiDto {
        this['user_team_ids'] = userTeamIds;
        return this;
    }
    public set userTeamIds(userTeamIds: Array<number>  | undefined) {
        this['user_team_ids'] = userTeamIds;
    }
    public get userTeamIds(): Array<number> | undefined {
        return this['user_team_ids'];
    }
    public withRelatedRoleIds(relatedRoleIds: Array<string>): ProtectedActionBasicApiDto {
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
export enum ProtectedActionBasicApiDtoActionEnum {
    PUSH = 'push',
    MERGE = 'merge'
}
