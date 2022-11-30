

export class RoleProjectAssignmentId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RoleProjectAssignmentId {
        this['id'] = id;
        return this;
    }
}