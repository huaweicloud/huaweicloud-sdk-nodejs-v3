import { BasicRoleDto } from './BasicRoleDto';
import { RepositoryUserDto } from './RepositoryUserDto';
import { UserTeamBasicDto } from './UserTeamBasicDto';


export class RepositoryProtectedActionDto {
    public action?: string;
    public enable?: boolean;
    public users?: Array<RepositoryUserDto>;
    private 'user_teams'?: Array<UserTeamBasicDto>;
    public roles?: Array<BasicRoleDto>;
    public constructor() { 
    }
    public withAction(action: string): RepositoryProtectedActionDto {
        this['action'] = action;
        return this;
    }
    public withEnable(enable: boolean): RepositoryProtectedActionDto {
        this['enable'] = enable;
        return this;
    }
    public withUsers(users: Array<RepositoryUserDto>): RepositoryProtectedActionDto {
        this['users'] = users;
        return this;
    }
    public withUserTeams(userTeams: Array<UserTeamBasicDto>): RepositoryProtectedActionDto {
        this['user_teams'] = userTeams;
        return this;
    }
    public set userTeams(userTeams: Array<UserTeamBasicDto>  | undefined) {
        this['user_teams'] = userTeams;
    }
    public get userTeams(): Array<UserTeamBasicDto> | undefined {
        return this['user_teams'];
    }
    public withRoles(roles: Array<BasicRoleDto>): RepositoryProtectedActionDto {
        this['roles'] = roles;
        return this;
    }
}