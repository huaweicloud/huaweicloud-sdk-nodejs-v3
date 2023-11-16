

export class AssignedNodeGroup {
    public name?: string;
    private 'assigned_roles'?: Array<string>;
    public constructor(name?: string, assignedRoles?: Array<string>) { 
        this['name'] = name;
        this['assigned_roles'] = assignedRoles;
    }
    public withName(name: string): AssignedNodeGroup {
        this['name'] = name;
        return this;
    }
    public withAssignedRoles(assignedRoles: Array<string>): AssignedNodeGroup {
        this['assigned_roles'] = assignedRoles;
        return this;
    }
    public set assignedRoles(assignedRoles: Array<string>  | undefined) {
        this['assigned_roles'] = assignedRoles;
    }
    public get assignedRoles(): Array<string> | undefined {
        return this['assigned_roles'];
    }
}