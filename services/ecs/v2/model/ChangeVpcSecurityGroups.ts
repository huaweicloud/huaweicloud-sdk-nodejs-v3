

export class ChangeVpcSecurityGroups {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ChangeVpcSecurityGroups {
        this['id'] = id;
        return this;
    }
}