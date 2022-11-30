

export class RoleGroupAssignmentId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RoleGroupAssignmentId {
        this['id'] = id;
        return this;
    }
}