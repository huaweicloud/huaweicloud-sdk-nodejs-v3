

export class SecurityGroupInfo {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SecurityGroupInfo {
        this['id'] = id;
        return this;
    }
}