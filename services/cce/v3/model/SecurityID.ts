

export class SecurityID {
    public id?: string;
    public constructor() { 
    }
    public withId(id: string): SecurityID {
        this['id'] = id;
        return this;
    }
}