

export class SecurityGroupIdInfo {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): SecurityGroupIdInfo {
        this['id'] = id;
        return this;
    }
}