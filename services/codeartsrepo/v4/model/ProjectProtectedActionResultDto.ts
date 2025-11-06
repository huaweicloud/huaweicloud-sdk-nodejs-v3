import { ForceActionEnableDto } from './ForceActionEnableDto';
import { RoleBasicDto } from './RoleBasicDto';
import { UserBasicDto } from './UserBasicDto';
import { UserTeamBasicDto } from './UserTeamBasicDto';


export class ProjectProtectedActionResultDto {
    public action?: string;
    public enable?: boolean;
    public levels?: string;
    private 'level_names'?: string;
    public users?: Array<UserBasicDto>;
    private 'user_teams'?: Array<UserTeamBasicDto>;
    public roles?: Array<RoleBasicDto>;
    private 'addition_switchers'?: Array<ForceActionEnableDto>;
    public constructor() { 
    }
    public withAction(action: string): ProjectProtectedActionResultDto {
        this['action'] = action;
        return this;
    }
    public withEnable(enable: boolean): ProjectProtectedActionResultDto {
        this['enable'] = enable;
        return this;
    }
    public withLevels(levels: string): ProjectProtectedActionResultDto {
        this['levels'] = levels;
        return this;
    }
    public withLevelNames(levelNames: string): ProjectProtectedActionResultDto {
        this['level_names'] = levelNames;
        return this;
    }
    public set levelNames(levelNames: string  | undefined) {
        this['level_names'] = levelNames;
    }
    public get levelNames(): string | undefined {
        return this['level_names'];
    }
    public withUsers(users: Array<UserBasicDto>): ProjectProtectedActionResultDto {
        this['users'] = users;
        return this;
    }
    public withUserTeams(userTeams: Array<UserTeamBasicDto>): ProjectProtectedActionResultDto {
        this['user_teams'] = userTeams;
        return this;
    }
    public set userTeams(userTeams: Array<UserTeamBasicDto>  | undefined) {
        this['user_teams'] = userTeams;
    }
    public get userTeams(): Array<UserTeamBasicDto> | undefined {
        return this['user_teams'];
    }
    public withRoles(roles: Array<RoleBasicDto>): ProjectProtectedActionResultDto {
        this['roles'] = roles;
        return this;
    }
    public withAdditionSwitchers(additionSwitchers: Array<ForceActionEnableDto>): ProjectProtectedActionResultDto {
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