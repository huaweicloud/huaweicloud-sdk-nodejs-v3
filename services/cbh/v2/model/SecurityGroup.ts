

export class SecurityGroup {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SecurityGroup {
        this['id'] = id;
        return this;
    }
}