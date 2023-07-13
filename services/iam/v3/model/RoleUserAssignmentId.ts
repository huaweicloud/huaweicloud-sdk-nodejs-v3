

export class RoleUserAssignmentId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RoleUserAssignmentId {
        this['id'] = id;
        return this;
    }
}