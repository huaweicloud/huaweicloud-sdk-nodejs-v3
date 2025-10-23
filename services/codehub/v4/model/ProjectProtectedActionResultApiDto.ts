import { ForceActionEnableDto } from './ForceActionEnableDto';
import { RoleBasicDto } from './RoleBasicDto';
import { UserBasicDto } from './UserBasicDto';
import { UserTeamBasicDto } from './UserTeamBasicDto';


export class ProjectProtectedActionResultApiDto {
    public action?: string;
    public enable?: boolean;
    public users?: Array<UserBasicDto>;
    private 'user_teams'?: Array<UserTeamBasicDto>;
    public roles?: Array<RoleBasicDto>;
    private 'addition_switchers'?: Array<ForceActionEnableDto>;
    public constructor() { 
    }
    public withAction(action: string): ProjectProtectedActionResultApiDto {
        this['action'] = action;
        return this;
    }
    public withEnable(enable: boolean): ProjectProtectedActionResultApiDto {
        this['enable'] = enable;
        return this;
    }
    public withUsers(users: Array<UserBasicDto>): ProjectProtectedActionResultApiDto {
        this['users'] = users;
        return this;
    }
    public withUserTeams(userTeams: Array<UserTeamBasicDto>): ProjectProtectedActionResultApiDto {
        this['user_teams'] = userTeams;
        return this;
    }
    public set userTeams(userTeams: Array<UserTeamBasicDto>  | undefined) {
        this['user_teams'] = userTeams;
    }
    public get userTeams(): Array<UserTeamBasicDto> | undefined {
        return this['user_teams'];
    }
    public withRoles(roles: Array<RoleBasicDto>): ProjectProtectedActionResultApiDto {
        this['roles'] = roles;
        return this;
    }
    public withAdditionSwitchers(additionSwitchers: Array<ForceActionEnableDto>): ProjectProtectedActionResultApiDto {
        this['addition_switchers'] = additionSwitchers;
        return this;
    }
    public set additionSwitchers(additionSwitchers: Array<ForceActionEnableDto>  | undefined) {
        this['addition_switchers'] = additionSwitchers;
    }
    public get additionSwitchers(): Array<ForceActionEnableDto> | undefined {
        return this['addition_switchers'];
    }
}