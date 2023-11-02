import { ApigIamUserDto } from './ApigIamUserDto';
import { ApigRole } from './ApigRole';
import { Group } from './Group';


export class ApigWorkspaceUserDto {
    public type?: number;
    private 'user_ids'?: Array<ApigIamUserDto>;
    public groups?: Array<Group>;
    private 'roles_ids'?: Array<ApigRole>;
    public constructor(type?: number, rolesIds?: Array<ApigRole>) { 
        this['type'] = type;
        this['roles_ids'] = rolesIds;
    }
    public withType(type: number): ApigWorkspaceUserDto {
        this['type'] = type;
        return this;
    }
    public withUserIds(userIds: Array<ApigIamUserDto>): ApigWorkspaceUserDto {
        this['user_ids'] = userIds;
        return this;
    }
    public set userIds(userIds: Array<ApigIamUserDto>  | undefined) {
        this['user_ids'] = userIds;
    }
    public get userIds(): Array<ApigIamUserDto> | undefined {
        return this['user_ids'];
    }
    public withGroups(groups: Array<Group>): ApigWorkspaceUserDto {
        this['groups'] = groups;
        return this;
    }
    public withRolesIds(rolesIds: Array<ApigRole>): ApigWorkspaceUserDto {
        this['roles_ids'] = rolesIds;
        return this;
    }
    public set rolesIds(rolesIds: Array<ApigRole>  | undefined) {
        this['roles_ids'] = rolesIds;
    }
    public get rolesIds(): Array<ApigRole> | undefined {
        return this['roles_ids'];
    }
}