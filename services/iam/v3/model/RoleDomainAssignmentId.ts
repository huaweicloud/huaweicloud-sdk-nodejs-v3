

export class RoleDomainAssignmentId {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): RoleDomainAssignmentId {
        this['id'] = id;
        return this;
    }
}