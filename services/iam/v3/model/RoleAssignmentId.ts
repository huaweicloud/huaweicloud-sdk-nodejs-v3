

export class RoleAssignmentId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RoleAssignmentId {
        this['id'] = id;
        return this;
    }
}