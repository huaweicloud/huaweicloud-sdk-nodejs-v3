

export class CreateVpnUserResponseBodyUser {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): CreateVpnUserResponseBodyUser {
        this['id'] = id;
        return this;
    }
}