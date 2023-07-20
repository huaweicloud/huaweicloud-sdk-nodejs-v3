import { RoleAgencyAssignmentId } from './RoleAgencyAssignmentId';
import { RoleAssignmentId } from './RoleAssignmentId';
import { RoleAssignmentScope } from './RoleAssignmentScope';
import { RoleGroupAssignmentId } from './RoleGroupAssignmentId';
import { RoleUserAssignmentId } from './RoleUserAssignmentId';


export class RoleAssignmentBody {
    public user?: RoleUserAssignmentId;
    public role?: RoleAssignmentId;
    public group?: RoleGroupAssignmentId;
    public agency?: RoleAgencyAssignmentId;
    public scope?: RoleAssignmentScope;
    private 'is_inherited'?: boolean;
    public constructor() { 
    }
    public withUser(user: RoleUserAssignmentId): RoleAssignmentBody {
        this['user'] = user;
        return this;
    }
    public withRole(role: RoleAssignmentId): RoleAssignmentBody {
        this['role'] = role;
        return this;
    }
    public withGroup(group: RoleGroupAssignmentId): RoleAssignmentBody {
        this['group'] = group;
        return this;
    }
    public withAgency(agency: RoleAgencyAssignmentId): RoleAssignmentBody {
        this['agency'] = agency;
        return this;
    }
    public withScope(scope: RoleAssignmentScope): RoleAssignmentBody {
        this['scope'] = scope;
        return this;
    }
    public withIsInherited(isInherited: boolean): RoleAssignmentBody {
        this['is_inherited'] = isInherited;
        return this;
    }
    public set isInherited(isInherited: boolean  | undefined) {
        this['is_inherited'] = isInherited;
    }
    public get isInherited(): boolean | undefined {
        return this['is_inherited'];
    }
}