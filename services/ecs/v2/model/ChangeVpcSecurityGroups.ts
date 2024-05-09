

export class ChangeVpcSecurityGroups {
    public id?: object;
    public constructor(id?: object) { 
        this['id'] = id;
    }
    public withId(id: object): ChangeVpcSecurityGroups {
        this['id'] = id;
        return this;
    }
}