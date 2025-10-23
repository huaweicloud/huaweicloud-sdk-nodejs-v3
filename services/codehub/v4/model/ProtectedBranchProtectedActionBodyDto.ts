import { ProtectedActionSwitcher } from './ProtectedActionSwitcher';
import { RepositoryProtectedActionBasicBodyDto } from './RepositoryProtectedActionBasicBodyDto';


export class ProtectedBranchProtectedActionBodyDto {
    public enable?: boolean;
    private 'user_ids'?: Array<object>;
    private 'user_team_ids'?: Array<number>;
    private 'related_role_ids'?: Array<string>;
    public action?: ProtectedBranchProtectedActionBodyDtoActionEnum | string;
    private 'addition_switchers'?: Array<ProtectedActionSwitcher>;
    public constructor() { 
    }
    public withEnable(enable: boolean): ProtectedBranchProtectedActionBodyDto {
        this['enable'] = enable;
        return this;
    }
    public withUserIds(userIds: Array<object>): ProtectedBranchProtectedActionBodyDto {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<object>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<object> | undefined {
        return this['user_ids'];
    }
    public withUserTeamIds(userTeamIds: Array<number>): ProtectedBranchProtectedActionBodyDto {
        this['user_team_ids'] = userTeamIds;
        return this;
    }
    public set userTeamIds(userTeamIds: Array<number>  | undefined) {
        this['user_team_ids'] = userTeamIds;
    }
    public get userTeamIds(): Array<number> | undefined {
        return this['user_team_ids'];
    }
    public withRelatedRoleIds(relatedRoleIds: Array<string>): ProtectedBranchProtectedActionBodyDto {
        this['related_role_ids'] = relatedRoleIds;
        return this;
    }
    public set relatedRoleIds(relatedRoleIds: Array<string>  | undefined) {
        this['related_role_ids'] = relatedRoleIds;
    }
    public get relatedRoleIds(): Array<string> | undefined {
        return this['related_role_ids'];
    }
    public withAction(action: ProtectedBranchProtectedActionBodyDtoActionEnum | string): ProtectedBranchProtectedActionBodyDto {
        this['action'] = action;
        return this;
    }
    public withAdditionSwitchers(additionSwitchers: Array<ProtectedActionSwitcher>): ProtectedBranchProtectedActionBodyDto {
        this['addition_switchers'] = additionSwitchers;
        return this;
    }
    public set additionSwitchers(additionSwitchers: Array<ProtectedActionSwitcher>  | undefined) {
        this['addition_switchers'] = additionSwitchers;
    }
    public get additionSwitchers(): Array<ProtectedActionSwitcher> | undefined {
        return this['addition_switchers'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProtectedBranchProtectedActionBodyDtoActionEnum {
    PUSH = 'push',
    MERGE = 'merge'
}
