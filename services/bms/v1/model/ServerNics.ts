

export class ServerNics {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ServerNics {
        this['id'] = id;
        return this;
    }
}