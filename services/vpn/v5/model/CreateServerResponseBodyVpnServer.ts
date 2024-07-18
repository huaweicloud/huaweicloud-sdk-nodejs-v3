

export class CreateServerResponseBodyVpnServer {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CreateServerResponseBodyVpnServer {
        this['id'] = id;
        return this;
    }
}