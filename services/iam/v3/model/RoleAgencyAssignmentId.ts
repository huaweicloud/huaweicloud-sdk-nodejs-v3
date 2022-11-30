

export class RoleAgencyAssignmentId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RoleAgencyAssignmentId {
        this['id'] = id;
        return this;
    }
}