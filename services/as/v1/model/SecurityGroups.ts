

export class SecurityGroups {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SecurityGroups {
        this['id'] = id;
        return this;
    }
}