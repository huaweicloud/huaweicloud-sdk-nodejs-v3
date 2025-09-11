

export class SecurityGroup {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityGroup {
        this['id'] = id;
        return this;
    }
}