import { RepositoryProtectedActionBasicBodyDto } from './RepositoryProtectedActionBasicBodyDto';


export class RepositoryProtectedTagActionBodyDto {
    public enable?: boolean;
    private 'user_ids'?: Array<object>;
    private 'user_team_ids'?: Array<number>;
    private 'related_role_ids'?: Array<string>;
    public action?: RepositoryProtectedTagActionBodyDtoActionEnum | string;
    public constructor() { 
    }
    public withEnable(enable: boolean): RepositoryProtectedTagActionBodyDto {
        this['enable'] = enable;
        return this;
    }
    public withUserIds(userIds: Array<object>): RepositoryProtectedTagActionBodyDto {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<object>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<object> | undefined {
        return this['user_ids'];
    }
    public withUserTeamIds(userTeamIds: Array<number>): RepositoryProtectedTagActionBodyDto {
        this['user_team_ids'] = userTeamIds;
        return this;
    }
    public set userTeamIds(userTeamIds: Array<number>  | undefined) {
        this['user_team_ids'] = userTeamIds;
    }
    public get userTeamIds(): Array<number> | undefined {
        return this['user_team_ids'];
    }
    public withRelatedRoleIds(relatedRoleIds: Array<string>): RepositoryProtectedTagActionBodyDto {
        this['related_role_ids'] = relatedRoleIds;
        return this;
    }
    public set relatedRoleIds(relatedRoleIds: Array<string>  | undefined) {
        this['related_role_ids'] = relatedRoleIds;
    }
    public get relatedRoleIds(): Array<string> | undefined {
        return this['related_role_ids'];
    }
    public withAction(action: RepositoryProtectedTagActionBodyDtoActionEnum | string): RepositoryProtectedTagActionBodyDto {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryProtectedTagActionBodyDtoActionEnum {
    CREATE = 'create'
}
