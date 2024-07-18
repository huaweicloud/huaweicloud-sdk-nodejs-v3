

export class OpVpnUser {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): OpVpnUser {
        this['id'] = id;
        return this;
    }
}