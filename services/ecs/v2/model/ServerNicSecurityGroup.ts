

export class ServerNicSecurityGroup {
    public id: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): ServerNicSecurityGroup {
        this['id'] = id;
        return this;
    }
}